const http = require('http');

const PORT = 4200;

const server = http.createServer((req, res) => {
  console.log('Получение ответа от сервера');

  res.setHeader('Content-Type', 'application/json');

  const data = JSON.stringify([
    { name: 'Veronika', sex: 'female', age: 33 },
    { name: 'Nastya', sex: 'female', age: 45 },
    { name: 'Andrey', sex: 'male', age: 38 },
  ]);

  res.end(data);
});

server.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log('Сервер запущен');
});
