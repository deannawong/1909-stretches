function cache(func) {
  let cachedArg, cachedOutput;
  if (typeof func !== "function") {
    throw new Error("Input must be a function.");
  } else {
    return (outputFunc = arg => {
      if (cachedArg !== arg) {
        cachedArg = arg;
        cachedOutput = func(arg);
        return cachedOutput;
      } else {
        return cachedOutput;
      }
    });
  }
}

module.exports = { cache };
