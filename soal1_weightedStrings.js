const getWeightedStrings = (s, queries) => {
  const charWeight = (c) => {
    return c.charCodeAt(0) - "a".charCodeAt(0) + 1;
  };

  const generateSubstrings = (s) => {
    const substrings = new Set();
    let currentChar = "";
    let currentCount = 0;

    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (char === currentChar) {
        currentCount++;
      } else {
        if (currentChar) {
          for (let j = 1; j <= currentCount; j++) {
            substrings.add(currentChar.repeat(j));
          }
        }
        currentChar = char;
        currentCount = 1;
      }
    }

    for (let i = 1; i <= currentCount; i++) {
      substrings.add(currentChar.repeat(i));
    }

    return substrings;
  };

  const substrings = generateSubstrings(s);
  const substringWeights = new Set(
    [...substrings].map((sub) => {
      return [...sub].reduce((sum, char) => sum + charWeight(char), 0);
    })
  );

  const result = [];
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    if (substringWeights.has(query)) {
      result.push("Yes");
    } else {
      result.push("No");
    }
  }

  return result;
};

const s = "abbcccd";
const queries = [1, 3, 9, 8];
const output = getWeightedStrings(s, queries);
console.log(output);
