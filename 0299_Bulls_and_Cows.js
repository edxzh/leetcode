const getHint = (secret, guess) => {
  let bullCount = 0;
  let cowCount = 0;

  let secretMap = {};
  let guessMap = {};

  for (let i = 0; i < secret.length; i++) {
    let s = secret[i];
    let g = guess[i];

    if (s === g) {
      bullCount++;
    } else {
      secretMap[s] = secretMap[s] + 1 || 1;
      guessMap[g] = guessMap[g] + 1 || 1;
    }
  }

  for (let s in secretMap) {
    const sCount = secretMap[s];
    const gCount = guessMap[s] || 0;

    cowCount += Math.min(sCount, gCount);
  }

  return `${bullCount}A${cowCount}B`;
};
