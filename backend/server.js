const express = require('express');
const cors = require('cors'); // Importa o CORS
const bodyParser = require('body-parser');
const emailController = require('./controllers/emailController');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Permite CORS
app.use(bodyParser.json()); // Para analisar JSON no corpo das requisições

// Rotas
app.post('/enviar-email', emailController.sendEmail);

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
