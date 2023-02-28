
import { prisma } from "../index";
import { MailerService } from "./mailer.service";


export class ContactService {
  constructor() { }


  // public static async getByEmail(email: string) {
  //   try {
  //     const emailUnique = await prisma.contact.findUnique({
  //       where: { email }
  //     })
  //     if (!emailUnique) return { sucess: false, error: 'No existe ese id de usuario' };
  //     return { success: true, email };

  //   } catch (error) {

  //   }

  // }

  public static async create(data: any) {
    const { email, messages } = data;
    console.log(data)
    // const emailActivo = await prisma.contact.findUnique({
    //   where:{email}
    // })
    // console.log(emailActivo)
    try {
    await MailerService.send(email, messages.subject).then(() => console.log("Correo enviado a", email)).catch(err => console.log(err))
      // if (!emailActivo){
      //   const contacts = await prisma.contact.create({
      //     data: {
      //       email,
      //       messages: { createMany: { data: [messages] } }
      //     },
  
      //   });
      //   return { success: true, contacts };
      // } 
      // else {
      //   const {id} = emailActivo
      //   const message = await prisma.message.create({
      //     data: {...messages, contactId:id}
      //   })
      //   return { success: true, message };

      // }
      return { success: true, email };
      
    } catch (error) {
      console.log({ error });
      return { sucess: false, mensaje: 'Hubo un error', error };
    }
  }



  // public static async getAll() {
  //   try {
  //     const contact = await prisma.contact.findMany({
  //       include: {
  //         messages: {
  //           select: {
  //             id: true,
  //             subject: true,
  //             message: true
  //           }
  //         }
  //       },

  //     });

  //     return { success: true, contact };
  //   } catch (error) {
  //     console.log({ error });
  //     return { sucess: false, error: 'Hubo un error' };
  //   }
  // }




}