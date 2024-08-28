"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Environment variables
const dotenv_1 = __importDefault(require("dotenv"));
// Security variables
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
//HTTPS TODO
// Root Router
const routes_1 = __importDefault(require("../routes"));
// Configuration the .env file
dotenv_1.default.config();
// Create Express APP
const server = (0, express_1.default)();
// Define SERVER to /api and use root router from index.ts in routes
// From this point onover https://localhost:8000/api/...
server.use('/api', routes_1.default);
// Mongoose coneection TODO
// Security config
server.use((0, helmet_1.default)());
server.use((0, cors_1.default)());
// Content type
server.use(express_1.default.urlencoded({ extended: true, limit: '50mb' }));
server.use(express_1.default.json({ limit: '50mb' }));
// Redirection config -> localhost:8000/ to localhost:8000/api/
server.get('/', (req, res) => {
    res.redirect('/api');
});
exports.default = server;
//# sourceMappingURL=index.js.map