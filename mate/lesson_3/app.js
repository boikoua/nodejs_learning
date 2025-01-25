import os from 'os';
import path from 'path';
import lodash from 'lodash';

// Версия операционной системы
console.log(os.version());

// Полный путь к файлу
console.log(path.resolve('./package.json'));

// Сравниваем массивы через библиотеку lodash
console.log(lodash.isEqual([1], [1]));

// console.log(__filename);
// console.log(__dirname);
