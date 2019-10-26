// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  constructor(numSides,numDice){
    this._sides=numSides;
    this._dice=numDice;
    this._history=[];

    if(typeof numSides!== 'number'||typeof numDice !=='number'||numSides<=0||numDice<=0){
      throw new Error ('error'); 
    }

    this.roll=()=>{
      let result=[];
      for(let i=0;i<this._dice;i++){
        result.push(Math.floor(Math.random()*this._sides)+1)
      }
      this._history.push(result)
      return result;

    }
  }

  get history(){
    return this._history;
  }
  
}


module.exports = { DiceRoller };
