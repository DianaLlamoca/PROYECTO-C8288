//Creo una app en express básica que tendrá una ruta /users a la que se le aplicará el método get
//y se enviará como respuesta la lista de 'Usuarios'
const express = require('express');
const app = express();

const Usuarios= [
    { id: 1, name: 'user1', email: 'user1@test.com' },
    { id: 2, name: 'user2', email: 'user2@test.com' }
  ];


app.get('/users', (req, res) => {
  res.send(Usuarios);
});

//Exporto la instancia de la aplicación express para realizar las pruebas
module.exports=app;
