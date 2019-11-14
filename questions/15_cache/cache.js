function cache(func) {
  let cach = {};
  if (typeof func !== "function") {
    throw new Error("Input must be a function.");
  } else {
    return (outputFunc = (...arg) => {
      if (arg in cach) {
        return cach[arg];
      } else {
        cach[arg] = func(...arg);
        return cach[arg];
      }
    });
  }
}

module.exports = { cache };
