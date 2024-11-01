const express = require('express');
const cors = require('cors'); // importe o CORS

const app = express();

app.use(cors()); // Adicione o middleware CORS

// Resto do seu código...

const bodyParser = require('body-parser');
const emailController = require('./controllers/emailController');

app.use(bodyParser.json());

const PORT = 3000;

// Endpoint para enviar e-mail
app.post('/enviar-email', emailController.sendEmail);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
