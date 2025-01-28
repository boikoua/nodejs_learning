// создание сервера с помощью http модуля

// импортируем модуль http
const http = require('http');

// константа нашего порта
const PORT = 3000;

// создаём сервер, с колбеком запроса и ответа

const server = http.createServer((req, res) => {
  console.log('Server request');
  console.log(req.url, req.method);

  // header ответа от сервера
  res.setHeader('Content-Type', 'application/json');

  // записываем данные в тело ответа
  // res.write('<head><link rel="stylesheet" href="#"></head>');
  // res.write('<h1>Hello world!</h1>');
  // res.write("<p>I'm front-end developer!</p>");

  // возврат JSON данных

  const data = JSON.stringify([
    { name: 'Vasya', age: 30 },
    { name: 'Serega', age: 27 },
  ]);

  // закончили запись данных для отправки
  res.end(data);
});

// включаем слушателя сервера, для обработки запросов
server.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

// закидывая данные в JSON виде, мы по сути создаём свою API
