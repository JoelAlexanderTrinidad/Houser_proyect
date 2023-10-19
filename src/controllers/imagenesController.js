const path = require('path');
const fs = require('fs');

module.exports = {
    traerImagenes: async (req, res) => {
        // const imagenRuta = path.join(__dirname, '../database/images')
        // res.sendFile(path.join(__dirname, '../database/images/1.jpg'));
        const imagenPath = path.join(__dirname, '../database/images/' + req.params.imagen);
        if(fs.existsSync(imagenPath)){
            res.sendFile(imagenPath);
          } else {
            res.status(404).send('Imagen no encontrada');
        }
    }
}