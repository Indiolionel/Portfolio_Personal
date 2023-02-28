import {createTransport} from 'nodemailer'

export class MailerService {
    constructor() { }

    static async send(to: string, subject:string) {
        // console.log(message,to)
        const message = "Gracias por contactarte, a la brevedad tendra una respuesta"

        try {
            const transporter = createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true
                , 
                auth: {
                    user: 'conciencia.inmaculata@gmail.com',
                    pass: 'auvgtxkfegfgwohu'
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