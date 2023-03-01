import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import contactRouter from './routes/contact.router'
import dotenv from 'dotenv';
import path from "path"

dotenv.config();


const server = express();
const port = process.env.PORT;
const publicPath = path.join(__dirname, '..', './react');

server.use(express.static(publicPath));
server.use(express.static("*/"));



server.use(express.json());
server.use(cors());


export const prisma = new PrismaClient();

server.use('/contact', contactRouter);




server.get('*', (req, res) => {    
	res.sendFile(path.join(publicPath, 'index.html')), function(err: any) {             
	if (err) {                 
		 res.status(500).send(err) 
		 }        
	};
});


server.listen(port, () => {
	console.log(`Running in port: ${port}`);
});