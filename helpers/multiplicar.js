const fs = require('fs');
require('colors');

const crearArchivo = async (base = 5, listar = false,limite =10) => {
  try {
    let consola,salida = '';
    for (let i = 1; i <= limite; i++) {
      consola += `${base} ${'*'.green} ${i} ${'='.green} ${base * i} \n`;
      salida += `${base} * ${i} = ${base * i} \n`;
    }

    fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
    if(listar){
      console.log('=============================='.rainbow);
      console.log('Tabla del : '.red, base);
      console.log('=============================='.rainbow);
      console.log(consola);
    }
    return `${'Tabla del'.yellow}${'-'.red}${base}${'.txt'.yellow}`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
