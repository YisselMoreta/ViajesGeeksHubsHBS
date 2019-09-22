const express = require('express');
const router = express.Router();
const userModel = require('../models/User');



router.get('/', (req, res) => {
    res.render('registro', {
        title: "Registro",
        style: "registro.css",
        script:'controllers.js'
    });
});

router.post('/', async (req, res) => {
    const registro = {
        usuario: req.body.usuario,
        email:req.body.email,
        password: req.body.clave
    }
    if (req.body.usuario=='' || req.body.clave == '' || req.body.email=='') {
        res.render('errorAlta', {
            mensaje: 'Hay campos vacíos',
            style: 'errorAlta.css'
        });
    } else {
        if (req.body.clave != req.body.confirmarClave) {
            res.render('errorAlta', {
                mensaje: 'Las contraseñas no coinciden',
                style: 'errorAlta.css'
            });
        } else {
            try {
                const user = await new userModel(registro).save();
                console.log(req.body);
                res.render('confirmacion', {
                    nombre: req.body.usuario,
                    style: 'confirmacion.css'
                });
            } catch (error) {
                res.render('errorAlta', {
                    mensaje: 'Ha habido un error al registrase',
                    style: 'errorAlta.css'
                });
            }
        }
    }

});
module.exports = router;