function times(num) {
    if(Number.isInteger(num)){
        return (newNum)=>{
            return newNum*num;
    
        }

    }
    throw 'Numbers only!'
}

module.exports = { times };
