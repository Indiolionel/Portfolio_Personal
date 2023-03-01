"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const mailer_service_1 = require("./mailer.service");
class ContactService {
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
    static create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, messages } = data;
            console.log(data);
            // const emailActivo = await prisma.contact.findUnique({
            //   where:{email}
            // })
            // console.log(emailActivo)
            try {
                yield mailer_service_1.MailerService.send(email, messages.subject).then(() => console.log("Correo enviado a", email)).catch(err => console.log(err));
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
            }
            catch (error) {
                console.log({ error });
                return { sucess: false, mensaje: 'Hubo un error', error };
            }
        });
    }
}
exports.ContactService = ContactService;
