function stringsConstruction(a: string, b: string): number {
  const aCount = getAlphabetCount(a);
  const bCount = getAlphabetCount(b);
  const counts = [];

  for (let char in aCount) {
    if (bCount.hasOwnProperty(char)) {
      counts.push(Math.floor(bCount[char] / aCount[char]));
    } else {
      return 0;
    }
  }

  return Math.min(...counts);
}

function getAlphabetCount(word: string) {
  const chars = word.split("");
  const alphabetCount = {};

  chars.map((item) => {
    if (alphabetCount.hasOwnProperty(item)) {
      alphabetCount[item]++;
    } else {
      alphabetCount[item] = 1;
    }
  });
  return alphabetCount;
}

console.log(stringsConstruction("abc", "abccba"));
