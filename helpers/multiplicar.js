const fs = require('fs'); // importamos la libreria de node para crear archivos txt
const colors = require('colors'); // el bueno

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {
        if(listar) {
            console.log('==================================='.green);
            console.log('            Tabla del '.yellow, colors.blue(base));
            console.log('==================================='.green);
        }
    
        let salida, consola = '';
    
        for(let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.magenta} ${i} ${'='.red} ${base * i}\n`;
        }
        if(listar) {
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}