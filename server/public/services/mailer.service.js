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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerService = void 0;
const nodemailer_1 = require("nodemailer");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class MailerService {
    constructor() { }
    static send(to, subject) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = "Gracias por contactarte, a la brevedad tendra una respuesta";
            try {
                const transporter = (0, nodemailer_1.createTransport)({
                    host: process.env.HOST_NODEMAILER,
                    port: 465,
                    secure: true,
                    auth: {
                        user: process.env.USER_NODEMAILER,
                        pass: process.env.PASS_NODEMAILER
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                });
                const mail = yield transporter.sendMail({
                    to,
                    subject,
                    text: message
                });
                return mail;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.MailerService = MailerService;
