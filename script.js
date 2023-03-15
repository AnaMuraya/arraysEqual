function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  return a.every((val, idx) => val === b[idx]);
}

function solution(a, b) {
  if (arraysEqual(a, b)) return true;

  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) return false;
    const element = a[i];

    for (let j = 0; j < a.length; j++) {
      let arr = [...a];
      arr.splice(j, 1, element);
      arr.splice(i, 1, a[j]);

      if (arraysEqual(arr, b)) return true;
    }
  }

  return false;
}

console.log(solution(([1, 2, 3], [1, 2, 3]))); //true
