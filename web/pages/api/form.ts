import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { 
        firstName, 
        name, 
        society, 
        phone, 
        email, 
        date, 
        participants,
        message } = req.body;

        const finalDate = new Date(date)

    try {
      // Configuration du transporteur de messagerie
      let transporter = nodemailer.createTransport({
        port: 465,
        secure: true,
        host: process.env.CONTACT_FORM_HOST,
        auth: {
            user: process.env.CONTACT_FORM_SEND_EMAIL,
            pass: process.env.CONTACT_FORM_PASS,
        },
        tls: { rejectUnauthorized: false },
      });

      // Configuration l'e-mail à envoyer
      const mailOptions = {
        from: '"BEDRINEGAME" <noreply-factauto@factauto.fr>',
        replyTo: email,
        to: 'aboutou23@gmail.com',
        subject: 'Nouveau message de contact',
        text:`Nom: ${firstName} ${name}\nEmail: ${email}\ntéléphone: ${phone}\ndate: ${(finalDate).toLocaleString('fr', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false})}\nNombre de participant: ${participants}\nMessage: ${message || ''}\nsociety:${society || ''},
             `,
      };

      // Envoyez l'e-mail
      await transporter.sendMail(mailOptions);

      res.status(200).end();
    } catch (error) {
      console.log(error);
      res.status(500).end();
    }
  }

  else {
  res.send('BedrineGame mailer Node Js API !!!');
  }
}
