const emailService = require('../services/emailService');

exports.sendEmail = async (req, res) => {
    const { to, subject, html } = req.body;

    try {
        await emailService.sendHtmlEmail(to, subject, html);
        res.json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao enviar o e-mail' });
    }
};
