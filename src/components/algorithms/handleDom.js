
module.exports.msp_low = (id) => {
    document.getElementById(`${id}`).style.backgroundColor='red'
}
module.exports.msp_high = (id) => {
    document.getElementById(`${id}`).style.backgroundColor='red'
}
module.exports.msp_high_reset=(id)=>{
    document.getElementById(`${id}`).style.backgroundColor='green'
}
module.exports.msp_low_reset=(id)=>{
    document.getElementById(`${id}`).style.backgroundColor='green'
}
module.exports.msp_swap = (id1,value) => {
    document.getElementById(`${id1}`).style.height=`${value}px`;
}
