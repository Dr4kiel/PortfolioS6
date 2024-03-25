import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    try {
        const body = await req.json();
        const { name, email, text } = body;
        const transporter = nodemailer.createTransport({
            host: 'smtp.ionos.fr',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'Contact par le site',
            text: `Nom: ${name}\n\nEmail: ${email}\n\nMessage: ${text}`
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        return NextResponse.json({ success: true, message: 'Message envoyé' });
    }
    catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, success: false, message: 'Erreur lors de l\'envoi du message' });
    }
}