const assert=require('node:assert/strict');
const handler=require('../api/contact.js');
const valid={name:'Visitor',email:'visitor@example.com',subject:'Project',message:'I would like to discuss a project.'};
async function call(body=valid,method='POST'){const res={setHeader(){},status(n){this.code=n;return this;},json(data){this.data=data;return this;}};await handler({method,body},res);return res;}
(async()=>{
assert.equal((await call(valid,'GET')).code,405);
for(const body of [null,'{',{}, {...valid,email:'bad'}, {...valid,message:' '}, {...valid,subject:'Header\ninjection'}, {...valid,website:'spam'}, {...valid,message:'a'.repeat(5001)}])assert.equal((await call(body)).code,400);
delete process.env.RESEND_API_KEY;delete process.env.CONTACT_FROM_EMAIL;assert.equal((await call()).code,503);
process.env.RESEND_API_KEY='test';process.env.CONTACT_FROM_EMAIL='test@example.com';
global.fetch=async(url,opts)=>{const body=JSON.parse(opts.body);assert.equal(body.reply_to,valid.email);assert.equal(body.to[0],'mhussain950091@gmail.com');assert(body.text.includes(valid.message));return {ok:true,json:async()=>({id:'mock-id'})};};assert.equal((await call()).data.ok,true);
global.fetch=async()=>({ok:false,status:403,json:async()=>({error:'rejected'})});assert.equal((await call()).code,502);
global.fetch=async()=>{throw new Error('offline')};assert.equal((await call()).code,502);console.log('12 contact handler scenarios passed. No live emails sent.');
})().catch(e=>{console.error(e);process.exit(1)});
