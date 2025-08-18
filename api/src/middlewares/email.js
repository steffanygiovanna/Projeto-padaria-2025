const nodemailer = require('nodemailer');

// Função para enviar e-mail para o cliente com senha provisória
async function enviarEmailCliente(emailCliente, senhaProvisoria) {
    // Configuração do transporte SMTP (ajuste para seu provedor de e-mail)
    let transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com', // Altere para o host SMTP real
        port: 587,
        secure: false, // true para 465, false para outros
        auth: {
            user: 'contacorporativa@hotmail.com', // Seu e-mail
            pass: 'SenhaDoSeuEmail' // Sua senha ou app password
        }
    });

    // Conteúdo do e-mail
    let mailOptions = {
        from: 'contacorporativa@hotmail.com',
        to: emailCliente,
        subject: 'Senha provisória para acesso',
        text: `Olá, seu acesso provisório ao sistema da Padaria é:\nSenha: ${senhaProvisoria}\nAcesse o sistema e altere sua senha assim que possível.`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('E-mail enviado para o cliente:', emailCliente);
    } catch (error) {
        console.error('Erro ao enviar e-mail para o cliente:', error);
    }
}

module.exports = { enviarEmailCliente };
