const trim = obj => {
    let newObj={}
    for(let key in obj){
        
        if(obj[key] !== null && obj[key] !== undefined){
            newObj[key]=obj[key];
        };
    }
    return newObj;
};

module.exports = { trim };
