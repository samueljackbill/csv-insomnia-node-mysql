// Incluir as bibliotecas
// Upload de arquivos
const multer = require('multer');

// O módulo path permite interagir com o sistema de arquivos
const path = require('path');

module.exports = (multer({

    // diskStorage permite manipular locar para salvar o arquivo
    storage: multer.diskStorage({

        // Local para salvar o arquivo
        destination: (req, file, cb) => {
            cb(null, './public/upload/csv')
        },

        // Nome que deve ser atribuido ao arquivo
        filename: (req, file, cb) => {
            cb(null, Date.now().toString() + Math.round(Math.random() * 1E9) + path.extname(file.originalname));
        }
    }),

    // Validar a extensão do arquivo
    fileFilter: (req, file, cb) => {

        // Verificar se a extensão do arquivo enviada pelo usuário está no array de extensões
        const extensaoImg = ['text/csv'].find(formatoAceito => formatoAceito == file.mimetype);

        // Retornar TRUE quando a extensão do arquivo é válido
        if(extensaoImg){
            return cb(null, true);
        }

        // Retornar FALSE quando a extensão do arquivo é inválido
        return cb(null, false);
    }
}))