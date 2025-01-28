// создаём сервер с помощью express

const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

// слушаем сервер
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

// запрос данных спомощью get для домашней страницы
app.get('/', (req, res) => {
  // переда'м данные для отправки в браузер как в html стиле, так и просто текст
  // res.send('<h1>Hello world</h1>');

  // отправляем файлы в браузер
  res.sendFile(createPath('index'));
});

app.get('/home', (req, res) => {
  res.redirect('/');
});

app.get('/contacts', (req, res) => {
  res.sendFile(createPath('contacts'));
});

// делаем редирект на другой адрес
app.get('/about-us', (req, res) => {
  res.redirect('/contacts');
});

// пишем middleware возврат файла с ошибкой use пишем в самом конце
app.use((req, res) => {
  res.status(404).sendFile(createPath('error'));
});
