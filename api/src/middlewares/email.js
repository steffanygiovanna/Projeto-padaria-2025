const nodemailer = require('nodemailer');
async function enviarEmailCliente(emailCliente, senhaProvisoria) {
   
    let transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com', 
        port: 587,
        secure: false, 
        auth: {
            user: 'contacorporativa@hotmail.com', 
            pass: 'SenhaDoSeuEmail' 
        }
    });

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
