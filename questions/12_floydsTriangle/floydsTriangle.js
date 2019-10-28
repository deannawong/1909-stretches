// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
    let result='';
    
    for(let i=1;i<n;i++){
        let currentNum=1;
        
        for(let j=0;j<i;j++){
            result+=currentNum;
            ++currentNum;
        }
    }
    return result;
};

module.exports = { floydsTriangle };
