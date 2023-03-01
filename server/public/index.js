"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const contact_router_1 = __importDefault(require("./routes/contact.router"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const server = (0, express_1.default)();
const port = process.env.PORT;
const publicPath = path_1.default.join(__dirname, '..', './react');
server.use(express_1.default.static(publicPath));
server.use(express_1.default.static("*/"));
server.use(express_1.default.json());
server.use((0, cors_1.default)());
exports.prisma = new client_1.PrismaClient();
server.use('/contact', contact_router_1.default);
server.get('*', (req, res) => {
    res.sendFile(path_1.default.join(publicPath, 'index.html')), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    };
});
server.listen(port, () => {
    console.log(`Running in port: ${port}`);
});
