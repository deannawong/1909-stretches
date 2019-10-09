function times(num) {
    if(Number.isInteger(num)){
        return (newNum)=>newNum*num;
    }
    throw 'Numbers only!'
}

module.exports = { times };