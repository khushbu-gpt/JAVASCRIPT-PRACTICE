let str = "madam";
let l = 0;
let r = str.length - 1;
let isPal = true;

while (l < r) {
  if (str[l] !== str[r]) {
    isPal = false;
    break;
  }
  l++;
  r--;
}

console.log(isPal);

// let str = "aabbc";

let map = {};
for (let ch of str) {
  map[ch] = (map[ch] || 0) + 1;
}
console.log(map);

// let str = "javascript";
let vowels = "aeiou";
let count = 0;

for (let ch of str) {
  if (vowels.includes(ch)) count++;
}

console.log(count);

// First Non-Repeating Character
// let str = "leetcode";
// let map = {};

for (let ch of str) {
  map[ch] = (map[ch] || 0) + 1;
}

for (let ch of str) {
  if (map[ch] === 1) {
    console.log(ch);
    break;
  }
}

// Valid Anagram
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let map = {};
  for (let ch of s) map[ch] = (map[ch] || 0) + 1;
  for (let ch of t) {
    if (!map[ch]) return false;
    map[ch]--;
  }
  return true;
}

console.log(isAnagram("listen", "silent"));

// Remove Duplicates from String
// let str = "aabbcc";
let seen = new Set();
let res = "";

for (let ch of str) {
  if (!seen.has(ch)) {
    seen.add(ch);
    res += ch;
  }
}

console.log(res);

// Longest Word in Sentence
// let str = "I love javascript coding";
let words = str.split(" ");
let longest = "";

for (let w of words) {
  if (w.length > longest.length) longest = w;
}

console.log(longest);

// Reverse Words (NOT characters)
// let str = "i love js";
// let words = str.split(" ");
// let l = 0, r = words.length - 1;

while (l < r) {
  [words[l], words[r]] = [words[r], words[l]];
  l++;
  r--;
}

console.log(words.join(" "));

// Check if String has All Unique Characters
// let str = "abcde";
let set = new Set();

let unique = true;
for (let ch of str) {
  if (set.has(ch)) {
    unique = false;
    break;
  }
  set.add(ch);
}

console.log(unique);

// Find Missing Character
// let str = "abdef";

for (let i = 0; i < str.length - 1; i++) {
  if (str.charCodeAt(i + 1) - str.charCodeAt(i) !== 1) {
    console.log(
      String.fromCharCode(str.charCodeAt(i) + 1)
    );
    break;
  }
}

// String Compression
// Output: "a3b2c1"

// let str = "aaabbc";
// let res = "";
// let count = 1;
for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i + 1]) {
    count++;
  } else {
    res += str[i] + count;
    count = 1;
  }
}

console.log(res);


// Check Rotation of String
// Input: "abcd" , "cdab"
function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  return (s1 + s1).includes(s2);
}

console.log(isRotation("abcd", "cdab"));
