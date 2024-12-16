const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '4avalon1989@gmail.com',
        pass: 'wstr vgmf ywld yngw' // Senha de app gerada pelo Gmail
    }
});

// Função para enviar o e-mail formatado com HTML
exports.sendHtmlEmail = async (to, subject, html) => {
    const mailOptions = {
        from: '4avalon1989@gmail.com', // Endereço do remetente
        to: `${to}, 4avalon1989@gmail.com`, // Envia cópia para 4avalon1989@gmail.com
        subject: subject || 'Sem Assunto',
        html: html
    };

    await transporter.sendMail(mailOptions);
};
