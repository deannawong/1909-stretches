function isEqual(obj1, obj2) {
  // write your function here
  // run your tests by running `jest isEqual`
  // you can also run tests on every save by running
  // `jest --watch isEqual`

  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  let objsAreSame=true;

  if(obj1Keys.length===obj2Keys.length){
    if(obj1Keys.length===0){
      return true;
    }
    for(key in obj1){
      if(obj1[key]!==obj2[key]){
        return false;

      }
    }
    return true;
  }
  return false;
  
}

module.exports = { isEqual };
