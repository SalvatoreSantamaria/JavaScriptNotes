function shortestToChar(s, c) {
  const n = s.length;
  const ans = new Array(n);
  let prev = -Infinity;

  // Iterate from left to right
  for (let i = 0; i < n; i++) {
    if (s[i] === c) {
      prev = i;
    }
    ans[i] = i - prev;
  }

  prev = Infinity;

  // Iterate from right to left
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) {
      prev = i;
    }
    ans[i] = Math.min(ans[i], prev - i);
  }

  return ans;
}

const s = "loveleetcode";
const c = "e";
console.log(shortestToChar(s, c)); // [3,2,1,0,1,0,0,1,2,2,1,0]