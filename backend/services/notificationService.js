// backend/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Importamos o controlador

// Definindo rota GET para obter todos os usuários
router.get('/', userController.getAllUsers);

// Definindo rota POST para criar um novo usuário
router.post('/', userController.createUser);

module.exports = router;
 
