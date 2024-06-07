const highestPalindrome = (str, k) => {
  const n = str.length;
  let arr = str.split("");
  let changes = new Array(n).fill(false);

  const makePalindrome = (low, high, k) => {
    if (low >= high) return k;
    if (arr[low] !== arr[high]) {
      let maxChar = Math.max(arr[low], arr[high]);
      arr[low] = maxChar;
      arr[high] = maxChar;
      changes[low] = changes[high] = true;
      k--;
    }
    return makePalindrome(low + 1, high - 1, k);
  };

  const makeHighestPalindrome = (low, high, k) => {
    if (low >= high) return k;
    if (arr[low] === arr[high]) {
      k = makeHighestPalindrome(low + 1, high - 1, k);
    } else {
      if (arr[low] !== "9") {
        arr[low] = "9";
        k--;
      }
      if (arr[high] !== "9") {
        arr[high] = "9";
        k--;
      }
      changes[low] = changes[high] = true;
      k = makeHighestPalindrome(low + 1, high - 1, k);
    }
    return k;
  };

  k = makePalindrome(0, n - 1, k);

  if (k < 0) return -1;

  k = makeHighestPalindrome(0, n - 1, k);

  return arr.join("");
};

console.log(highestPalindrome("3943", 1));
console.log(highestPalindrome("932239", 2));
