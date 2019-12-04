// create an array method called "next" that console.logs
// the next index in the array when called.

/*
 Example:
 someArr = ['shake', 'and', 'bake']
 someArr.next() // "shake"
 someArr.next() // "and" 
 someArr.next() // "bake"
*/

// hint: you are adding functionality directly to the
// javascripts global Array object

// ****no test writing required on this stretch

// YOUR CODE (intentionally blank):

// no export statement required

// First Stab
// Array.prototype.next = () => {
//   let idx = 0;
//   const values = Array.prototype.values();
//   console.log(values[idx]);
//   idx++;
// };

//Class Solution
Array.prototype.next = function() {
  if (!this.nextIdx) {
    this.nextIdx = 0;
  }
  console.log(this[this.nextIdx]);
  this.nextIdx += 1;

  if (this.nextIdx >= this.length) {
    this.nextIdx = 0;
  }
  return this;
};
