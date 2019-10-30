// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
    // let result='';
    let result = [];
    let currentNum=1;

    for(let i=0;i<n;i++){
        // let currentNum=1;
        let currentRow=[];

        for(let j=0;j<=i;j++){
            // result+=currentNum;
            // ++currentNum;
            currentRow.push(currentNum);
            currentNum++;
        }
        result.push(currentRow.join(''))
    }
    return result.join('\n');
};

module.exports = { floydsTriangle };
