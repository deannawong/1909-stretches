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
  let bestSalesObj={};
  let bestProduct=0;
  let amountSold=0;

  if(sales.length===0)return {}

  sales.forEach(prod=>{
    if(prod.productId===bestProduct){
      amountSold+=prod.amount;
    }else if(prod.amount>amountSold){
      bestProduct=prod.productId;
      amountSold=prod.amount;
    }
  })
  bestSalesObj.id=bestProduct;
  bestSalesObj.total=amountSold;

  return bestSalesObj;

}

module.exports = { bestSales, sales };
