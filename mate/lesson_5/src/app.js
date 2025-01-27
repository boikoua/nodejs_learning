function add(...numbers) {
    let sum = 0;
    const hello = 'hello';
    console.log(hello);

    for (const n of numbers) {
        sum += n;
    }

    return sum;
}

console.log(add(1, 2, 3, 4, 5));
