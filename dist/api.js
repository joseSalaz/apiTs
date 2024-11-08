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
const axios_1 = __importDefault(require("axios"));
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const firstApiUrl = 'https://apipyton-0805.onrender.com/api/python'; // API de Python
        const response1 = yield axios_1.default.get(firstApiUrl);
        const firstApiData = response1.data;
        const secondApiUrl = 'https://railway-production-ab84.up.railway.app/Railway'; // API de texto
        const response2 = yield axios_1.default.get(secondApiUrl);
        const secondApiData = response2.data;
        const combinedData = {
            TypeScripDice: 'Este mensaje es enviado desde VERCEL',
            jsonResponse: firstApiData,
            textResponse: secondApiData,
        };
        res.json(combinedData);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error interno en el servidor' });
    }
});
