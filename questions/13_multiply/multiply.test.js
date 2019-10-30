const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {


    expect(() => multiply(1)).toThrow();

    expect(() => multiply('one',2)).toThrow();
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(multiply(2,3)).toBe(6);

    // test that the returned value is correct
    expect(multiply(2,4)).toBe(8);

    // test some other values
    expect(multiply(5,5)).toBe(25);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    const randomNum1=Math.floor(Math.random()*10);
    const randomNum2=Math.floor(Math.random()*10);
    const result=randomNum1*randomNum2;
    expect(multiply(randomNum1,randomNum2)).toBe(result);
  });
});
