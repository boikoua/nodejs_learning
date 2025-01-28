// модуль для получения информации об ОС
const os = require('os');

console.log(os.version(), os.platform(), os.release());

const { userName, sayHi } = require('./test.js');

const name = 'Yevgen';

console.log(sayHi(userName));
console.log(sayHi(name));
