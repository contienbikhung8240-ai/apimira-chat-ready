export default async function handler(req,res){
  if(req.method!=="POST") return res.status(405).json({error:"Method not allowed"});
  const key=process.env.APIMIRA_API_KEY;
  if(!key) return res.status(500).json({error:"APIMIRA_API_KEY is not configured on the server."});
  try{
    const b=req.body||{};
    if(!b.model||!Array.isArray(b.messages)) return res.status(400).json({error:"model and messages are required"});
    const r=await fetch("https://apimira.com/v1/chat/completions",{
      method:"POST",
      headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},
      body:JSON.stringify({model:b.model,messages:b.messages,temperature:b.temperature??0.7})
    });
    const text=await r.text();
console.log("APIMIRA STATUS:", r.status);
console.log("APIMIRA RESPONSE:", text);
    res.status(r.status).setHeader("Content-Type","application/json").send(text);
  }catch(e){
  console.error("APIMIRA ERROR:", e);
  return res.status(502).json({
    error:"Could not reach ApiMira.",
    details:String(e)
  });
  }
