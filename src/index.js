const express = require('express');
require('express-async-errors');
const contactsRoutes = require('./routes/contactsRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');

const app = express();

app.use(express.json());
app.use(contactsRoutes, categoriesRoutes);
app.use((error, request, response, next) => {
  console.log('### Error handler');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('🚀️ Server started at http://localhost:3000'));
