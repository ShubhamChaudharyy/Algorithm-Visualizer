
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
module.exports.msp_swap = (id1,id2,chips) => {
    document.getElementById(`${id1}`).style.height=`${chips[id2]}px`;
    document.getElementById(`${id2}`).style.height=`${chips[id1]}px`
}
