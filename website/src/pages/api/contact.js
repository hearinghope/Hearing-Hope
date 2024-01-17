import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'snypee2005@gmail.com',
          pass: 'Aditya@1125',
        },
      });

      const mailOptions = {
        from: 'snypee2005@gmail.com',
        to: 'snypee2005@gmail.com',
        subject: `New Form Submission - ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      console.log('Sending email to yourself...');
      await transporter.sendMail(mailOptions);
      console.log('Email to yourself sent successfully.');

      const userMailOptions = {
        from: 'adityaankitasingh@gmail.com',
        to: email,
        subject: 'Thank you for filling the form',
        text: 'Thank you for contacting us. We will get back to you soon.',
      };

      console.log('Sending thank you email to the user...');
      await transporter.sendMail(userMailOptions);
      console.log('Thank you email to the user sent successfully.');

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error', details: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
