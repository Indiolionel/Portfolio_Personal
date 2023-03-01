import {createTransport} from 'nodemailer'
import dotenv from 'dotenv';

dotenv.config();

export class MailerService {
    constructor() { }

    static async send(to: string, subject:string) {
        // console.log(message,to)
        const message = "Gracias por contactarte, a la brevedad tendra una respuesta"



        try {
            const transporter = createTransport({
                host: process.env.HOST_NODEMAILER,
                port: 465,
                secure: true
                , 
                auth: {
                    user: process.env.USER_NODEMAILER,
                    pass: process.env.PASS_NODEMAILER
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            const mail = await transporter.sendMail({
                to,
                subject,
                text:message
    
            })

            return mail

        } catch (error) {
            console.log(error)
        }
        
    }

}