// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
    this.prevStates = [];
  }
  //initial incorrect answer
  // setState(obj) {
  //   const [key, value] = Object.entries(obj);
  //   this.state[key] = value;
  // }

  setState(incomingState) {
    // this.state = { ...this.state, ...incomingState };
    this.prevStates.push(this.state);
    this.state = Object.assign({}, this.state, incomingState);
    return this.state;
  }

  goBack() {
    this.state = this.prevStates.pop();
    return this.state;
  }
}

module.exports = { StatefulThing };
