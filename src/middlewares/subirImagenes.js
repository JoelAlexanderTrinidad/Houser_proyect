const multer = require('multer');
const path = require('path');

const guardarImgInmuebles = multer.diskStorage({
    destination : function (req,file,callback) {
        callback(null,path.join(__dirname, '../database/images'))
    },
    filename : function (req,file,callback){
        callback(null, `${Date.now()}_inmueble_${path.extname(file.originalname)}`)
    }
});

const subirImg = multer({
    storage : guardarImgInmuebles
})

module.exports = {
    subirImg
}