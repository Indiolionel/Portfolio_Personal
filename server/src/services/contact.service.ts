
import { prisma } from "../index";
import { MailerService } from "./mailer.service";


export class ContactService {
  constructor() { }


  public static async create(data: any) {
    const { email, messages } = data;
    
    await MailerService.send(email, messages.subject).then(() => console.log("Correo enviado a", email)).catch(err => console.log(err))
     
      return { success: true, email };
      
    } catch (error:any) {
      console.log({ error });
      return { sucess: false, mensaje: 'Hubo un error', error };
    }
  }







