// Caeser Cipher
// https://en.wikipedia.org/wiki/Caesar_cipher
// create a function that takes a string and a shift value and returns an encrypted string

// accept only alphanumeric characters
// shifted values should wrap back around
// z -> a  and 9 -> 0

// example
// str = 'hello'
// shift = 3
// result = 'khoor'

// example
// str = "yolo789"
// shift = 4
// result = "csps123"

const encryptString = (str, shift) => {
  const numbers='0123456789'
  const alpha="abcdefghijklmnopqrstuvwxyz"
  const alphaCaps=alpha.toUpperCase();

  let newstr='';
  for(let i=0;i<str.length;i++){
    
    if(alpha.includes(str[i])){
      let newIdx;

      if(shift>alpha.length){
        const newShift=shift%26;
        newIdx=alpha.indexOf(str[i])+newShift
      }else{
        newIdx=alpha.indexOf(str[i])+shift;
      }
      newstr+=alpha[newIdx];
    }
    else if(alphaCaps.includes(str[i])){
      let newIdx;
      if(shift>alphaCaps.length){
        const newShift=shift%alphaCaps.length;
        newIdx=alphaCaps.indexOf(str[i])+newShift;
      }else{
        newIdx=alphaCaps.indexOf(str[i])+shift;
      }
      newstr+=alphaCaps[newIdx];
    }else if(numbers.includes(str[i])){
      let newIdx;
      if(shift>numbers.length){
        const newShift=shift%numbers.length;
        newIdx=numbers.indexOf(str[i])+newShift;
      }else{
        newIdx=numbers.indexOf(str[i])+shift;}
      newstr+=numbers[newIdx];
    }
  }
  return newstr;
};

module.exports = { encryptString };
