// вывод глобального объекта в консоль
// console.log(global);

// запуск функции с задержкой
// setTimeout(() => {
//   console.log('Hello!!!');
// }, 1000);

// ключевая переменная, для показа полного пути к файлу
// console.log(__dirname);

// ключевая переменная, для показа полного пути к файлу включаяя название файла
// console.log(__filename);

// объект с этим ключом имеет доступ к переменным
// console.log(process.env);

// массив используеміх значений при вызове
// console.log(process.argv);

// console.log('Hello ' + process.argv[2]);

// const test = process.argv[2];
// console.log(typeof test);

// глобальный объект, для работы со строкой браузера

const url = new URL('https://google.com/search#img');
console.log(url.hostname); // получим хост
console.log(url.href); // получим ссылку
console.log(url.pathname); // путь после адреса
console.log(url.hash); // всё что написано после хеша
