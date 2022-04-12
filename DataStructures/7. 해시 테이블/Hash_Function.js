function hashBasic(key, arrayLen) {
  let total = 0;
  for (const char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    const value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

console.log(hashBasic('ads', 22));

function hashImproved(key, arrayLen) {
  let total = 0;
  const WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const char = key[i];
    const value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
console.log(hashImproved('ads', 22));
