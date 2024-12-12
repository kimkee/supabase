export const runtime = 'edge';
const getPrdObj = async ()=>{
  const conditionObj = {}; 
  const locationObj = {}; 
  const statusObj = {}; 
  await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}api/condition`).then( result => result.json()).then( result =>{
    result.forEach(item => conditionObj[item.id] = item.condition);
  });
  await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}api/location`).then( result => result.json()).then( result =>{
    result.forEach(item => locationObj[item.id] = item.location);
  });
  await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}api/status`).then( result => result.json()).then( result =>{
    result.forEach(item => statusObj[item.id] = item.status);
  });

  return {conditionObj , locationObj , statusObj}
}

export default getPrdObj;