/*
largestDivisible returns the largest number from a list of numbers where that number is divisible by a passed in number
write the largestDivisible function

*/

function largestDivisible(arr, num) {
    let biggestNum=null;
    if(arr.length===0){
        return null
    };

    let divisibles = arr.sort().filter(current=>{
        if(current%num===0){
            return current;
        }
    })
    if(divisibles.length===0){
        return null;
    }
    return divisibles[divisibles.length-1];
}
// console.log(largestDivisible([1, 2, 3, 4, 5, 6, 7], 3));//6
// console.log(largestDivisible([1], 2));//null

module.exports = { largestDivisible };
