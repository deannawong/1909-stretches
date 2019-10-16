function groupBy(arr, attr) {
    return arr.reduce((accum,arg)=>{
        if(accum[arg.attr]){
            accum[arg[attr]].push(arg)
        }else{
            accum[arg[attr]]=[arg];
        }
        return accum;
            
    },{});
}

module.exports = { groupBy };
