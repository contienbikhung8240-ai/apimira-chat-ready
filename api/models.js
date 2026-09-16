export default async function handler(req,res){
  if(req.method!=="GET")
    return res.status(405).json({error:"Method not allowed"});

  const key=process.env.APIMIRA_API_KEY;

  if(!key)
    return res.status(500).json({
      error:"APIMIRA_API_KEY is not configured on the server."
    });

  try{
    const r=await fetch("https://apimira.com/v1/models",{
      headers:{
        Authorization:`Bearer ${key}`
      }
    });

    const text=await r.text();

    res
      .status(r.status)
      .setHeader("Content-Type","application/json")
      .send(text);

  }catch(e){
    res.status(502).json({
      error:"Could not reach ApiMira.",
      details:String(e)
    });
  }
}
