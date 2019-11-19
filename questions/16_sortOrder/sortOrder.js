/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(arr, sortKey, returnKey) {
  let result = [];
  let sortVals = [];
  arr.forEach(obj => {
    sortVals.push(obj[sortKey]);
  });

  sortVals.sort().map((sortKeyVal, idx) => {
    arr.forEach(obj => {
      if (obj[sortKey] === sortKeyVal) {
        result[idx] = obj[returnKey];
      }
    });
  });

  return result;
}

module.exports = { sortOrder };
