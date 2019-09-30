const sales = [
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 4,
  },
  {
    amount: 17,
    productId: 5,
  },
  {
    amount: 10,
    productId: 4,
  },
];
/*
productWhichMadeMostMoney returns an object with an id for that product and a total which totals all the amounts for that product.
*/

//write the productWhichMadeMostMoney function

function bestSales(sales) {
  const bestSalesObj={};
  const bestProduct=0;
  const amountSold=0;

  sales.forEach(prod=>{
    if(prod[productId]===bestProduct){
      amountSold+=prod[amount]
    }else if(prod[amount]>amountSold){
      bestProduct=prod[productId];
      amountSold=prod[amount];
    }
  })

}

module.exports = { bestSales, sales };
