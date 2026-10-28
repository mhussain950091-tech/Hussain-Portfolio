// Server-only configuration: never expose the email API key in frontend JSON.
module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }
  let body = req.body;
  try { if (typeof body === 'string') body = JSON.parse(body); }
  catch { return res.status(400).json({ error: 'Invalid request.' }); }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return res.status(400).json({ error: 'Invalid request.' });
  if (body.website) return res.status(400).json({ error: 'Unable to submit this form.' });
  const { name, email, subject = '', message } = body;
  if (typeof name !== 'string' || !name.trim() || name.length > 100 ||
      typeof email !== 'string' || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof subject !== 'string' || subject.length > 160 || /[\r\n]/.test(subject) ||
      typeof message !== 'string' || !message.trim() || message.length > 5000) {
    return res.status(400).json({ error: 'Please provide a valid name, email, and message (up to 5,000 characters).' });
  }
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL) {
    return res.status(503).json({ error: 'The contact form is temporarily unavailable. Please use email or WhatsApp.' });
  }
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL,
        to: [process.env.CONTACT_TO_EMAIL || 'mhussain950091@gmail.com'],
        reply_to: email,
        subject: `Portfolio message: ${subject.trim() || 'New enquiry'}`,
        text: `Message received from your portfolio\n\nName: ${name.trim()}\nEmail: ${email}\n\n${message.trim()}`
      }),
      signal: AbortSignal.timeout(12000)
    });
    const result = await response.json();
    if (!response.ok || !result.id) {
      console.error('Contact email rejected', response.status);
      return res.status(502).json({ error: 'Your message could not be sent. Please try email or WhatsApp.' });
    }
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact email request failed', error.name);
    return res.status(502).json({ error: 'Delivery could not be confirmed. Please contact me by email or WhatsApp.' });
  }
};
