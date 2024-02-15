
const conditionObj = {};
const locationObj = {};
const statusObj = {};
const getPrdObj = async ()=>{
  await fetch('/api/condition').then((result) => result.json()).then( result =>{
    result.forEach(item => {
      conditionObj[item.id] = item.condition;
    });
  })
  await fetch('/api/location').then((result) => result.json()).then( result =>{
    result.forEach(item => {
      locationObj[item.id] = item.location;
    });
  })
  await fetch('/api/status').then((result) => result.json()).then( result =>{
    result.forEach(item => {
      statusObj[item.id] = item.status;
    });
  })
  
}
getPrdObj();
export {conditionObj , locationObj , statusObj}