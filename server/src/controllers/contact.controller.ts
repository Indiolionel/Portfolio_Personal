import { Request, Response } from 'express';
import { ContactService } from '../services/contact.service';
import { MailerService } from '../services/mailer.service';


export class ContactControllers {
    constructor() { }

    public static async create(req: Request, res: Response) {
        
        const created = await ContactService.create(req.body);
        
        res.status(created.success ? 201 : 400).send(created);
    }

   

}