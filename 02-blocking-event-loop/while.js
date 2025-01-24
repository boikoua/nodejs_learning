// этим методом мы блокируем цикл событий, так как единственный поток занят циклом

let isRunning = true;

setTimeout(() => {
  isRunning = false;
}, 100);

while (isRunning) {
  console.log('While loop in running...');
}
