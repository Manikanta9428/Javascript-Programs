//Program: Count occurance of a char in string using Object

function countCharOccurrences(str) {
  const charCount = {};

  for (let char of str) {
    charCount[char] = charCount[char] + 1 || 1;
  }

  return charCount;
}

const Str = "javascript";
console.log(countCharOccurrences(Str));
