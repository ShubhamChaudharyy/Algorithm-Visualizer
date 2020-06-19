exports.isEmpty=(string)=>{
    if(string.trim()==='') return true;
    else return false;
}
exports.notMatching=(a)=>(b)=>{
  return a.localeCompare(b); 
}