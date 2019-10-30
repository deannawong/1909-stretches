const multiply = (num1, num2) => {
    if(typeof num1==='number'&&typeof num2==='number'){
        return num1*num2;
    }else{
        throw new Error ('Requires two numbers')
    }
    
};

module.exports = { multiply };
