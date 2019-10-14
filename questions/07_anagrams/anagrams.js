// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  let strArr1=str1.split('').sort();
  let strArr2=str2.split('').sort();
  let same=true;
  
  strArr1.forEach((char,idx)=>{
    if(char!==strArr2[idx]){
      same=false
    }
  })
  return same;
};

module.exports = { checkAnagrams };
