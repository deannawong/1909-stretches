// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  constructor(numSides,numDice){
    this.sides=numSides;
    this.dice=numDice;

    if(typeof numSides!== 'number'||typeof numDice !=='number'||numSides<=0||numDice<=0){
      throw new Error ('error'); 
    }
  }
  roll(){
    let result=[];

    for(let i=0;i<this.dice;i++){
      result.push(Math.floor(Math.random()*Math.floor(this.sides)))
    }
    return result;
  }
}

module.exports = { DiceRoller };
