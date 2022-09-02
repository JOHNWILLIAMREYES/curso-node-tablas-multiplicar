const fs = require('fs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require ('./config/yargs.js');
const colors = require('colors');
                


console.clear();
const { b: base , l:listar, h: limite} = argv;


crearArchivo(base,listar,limite)
  .then((nombreArchivo) => console.log(nombreArchivo, 'Creado'))
  .catch((err) => console.log('Tenemos el siguiente error : '.red, err));
