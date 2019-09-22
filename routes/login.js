const express = require('express');
const router = express.Router();
const util = require('util');
const mongoose = require('./conexion');
const userModel = require('../models/User');
const bcrypt=require('bcrypt');


router.get('/', (req, res) => {
    res.render('login', {
        title: 'login',
        style: "login.css"
    });
});

router.post('/', async (req, res) => {
    try {
        const user = await userModel.findOne({$or:[{usuario:req.body.usuario},{email:req.body.usuario}]}
        );
        if(user==null){
            res.render('entrada', {
                mensaje: 'Usuario no encontrado',
                style: 'entrada.css' 
            });
        }else{
            console.log(req.body.clave,user.password)
            const isMatch = await bcrypt.compare(req.body.clave, user.password);
            console.log(isMatch);
            if (isMatch) {
                res.render('paginaPrincipal', {
                    nombre: user.usuario,
                    style: 'paginaPrincipal.css'
                });
            } else {
                res.render('entrada', {
                    mensaje: 'Contraseña inválida',
                    style: 'entrada.css'
                });
            }
        }

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;