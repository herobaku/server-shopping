const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Используйте порт, предоставляемый Render
const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server запущен на порту ${PORT}`);
});

// Получение доступа к объекту данных
const db = router.db;
console.log('Данные:', db.getState());