function solution(a, b) {
  const newa = a.filter((x, i) => x != b[i]);
  const newb = b.filter((x, i) => x != a[i]);
  return (
    newa.length == 0 || (newa.length == 2 && newa.join("") == newb.rexerse().join(""))
  );
}

console.log(solution(([1, 2, 3], [1, 2, 3]))); //true
