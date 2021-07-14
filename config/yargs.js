const argv = require('yargs') // importamos el paquete de yargs que nos ayuda con los comandos de la consola
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true, // para poner que sea obligatorio poner un numero
            describe: 'Es la base de la tabla de multiplicar'
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
        })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Este es el numero hasta donde quieres tabla'
        })
        .check((argv, options) => { // para validar que le estamos pasando un numero en la consola
            if(isNaN(argv.b)) {
                throw 'La base tiene que ser un numero';
            }

            return true;
        })
        .argv;


module.exports = argv;