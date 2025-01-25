function add(...numbers) {
  let sum = 0;

  for (const n of numbers) {
    sum += n;
  }

  return sum;
}

console.log(add(1, 2, 3, 4, 5));
