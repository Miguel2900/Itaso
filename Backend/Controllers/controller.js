const fs = require('fs');
const path = require('path');

const Root = (req, res, next) => {
    
    const pathi = path.join(__dirname, '../../Frontend/index.html');
    fs.access(pathi, function(error){
        if(error){
            
            res.status(404).json({message: 'File not found'});
        } else {
  
            res.status(200).sendFile(pathi);
        }
    })
}
const Perfiles = (req, res, next) => {
    
    const pathi = path.join(__dirname, '../../Frontend/pages/01-perfiles/perfiles.html');
    fs.access(pathi, function(error){
        if(error){
            
            res.status(404).json({message: 'File not found'});
        } else {
            res.status(200).sendFile(pathi);
        }
    })
}
const Juegos = (req, res, next) => {
    
    const pathi = path.join(__dirname, '../../Frontend/pages/03-juegos/juegos.html');
    fs.access(pathi, function(error){
        if(error){
            
            res.status(404).json({message: 'File not found'});
        } else {
            res.status(200).sendFile(pathi);
        }
    })
}
const Ers = (req, res, next) => {
    
    const pathi = path.join(__dirname, '../../Frontend/pages/02-ers/ers.html');
    fs.access(pathi, function(error){
        if(error){
            
            res.status(404).json({message: 'File not found'});
        } else {
            res.status(200).sendFile(pathi);
        }
    })
}
const Noticias = (req, res, next) => {
    
    const pathi = path.join(__dirname, '../../Frontend/pages/04-noticias/noticias.html');
    fs.access(pathi, function(error){
        if(error){
            
            res.status(404).json({message: 'File not found'});
        } else {
            res.status(200).sendFile(pathi);
        }
    })
}
const Encuestas = (req, res, next) => {
    
    const pathi = path.join(__dirname, '../../Frontend/pages/05-encuestas/encuestas.html');
    fs.access(pathi, function(error){
        if(error){
            
            res.status(404).json({message: 'File not found'});
        } else {
            res.status(200).sendFile(pathi);
        }
    })
}
const Nosotros = (req, res, next) => {
    
    const pathi = path.join(__dirname, '../../Frontend/pages/06-nosotros/nosotros.html');
    fs.access(pathi, function(error){
        if(error){
            
            res.status(404).json({message: 'File not found'});
        } else {
            res.status(200).sendFile(pathi);
        }
    })
}
const Foro = (req, res, next) => {
    
    const pathi = path.join(__dirname, '../../Frontend/pages/07-foro/foro.html');
    fs.access(pathi, function(error){
        if(error){
            
            res.status(404).json({message: 'File not found'});
        } else {
            res.status(200).sendFile(pathi);
        }
    })
}


exports.Root = Root;
exports.Perfiles = Perfiles;
exports.Juegos = Juegos;
exports.ers = Ers;
exports.Noticias = Noticias;
exports.Encuestas = Encuestas;
exports.Nosotros = Nosotros;
exports.Foro = Foro;