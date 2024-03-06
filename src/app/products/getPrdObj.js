
const getPrdObj = async ()=>{

  const conditionObj =  fetch('/api/condition').then( result => result.json()).then( result =>{
    result.forEach(item => conditionObj[item.id] = item.condition);
  });
  const locationObj = fetch('/api/location').then( result => result.json()).then( result =>{
    result.forEach(item => locationObj[item.id] = item.location);
  });
  const statusObj = fetch('/api/status').then( result => result.json()).then( result =>{
    result.forEach(item => statusObj[item.id] = item.status);
  });

  return {conditionObj , locationObj , statusObj}
}

export default getPrdObj;