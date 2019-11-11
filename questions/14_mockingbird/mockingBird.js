const repeater = (func, n) => {
  // repeater runs a function n times and returns an array of its outputs

  let returnArr = [];
  for (let i = 0; i < n; i++) {
    returnArr.push(func());
  }
  return returnArr;
};

module.exports = { repeater };
