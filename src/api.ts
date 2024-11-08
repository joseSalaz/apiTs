import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    const firstApiUrl = 'https://apipyton-0805.onrender.com/api/python'; // API de Python
    const response1 = await axios.get(firstApiUrl);
    const firstApiData = response1.data;

    const secondApiUrl = 'https://railway-production-ab84.up.railway.app/Railway'; // API de texto
    const response2 = await axios.get(secondApiUrl);
    const secondApiData = response2.data;

    const combinedData = {
      TypeScripDice: 'Este mensaje es enviado desde VERCEL',
      jsonResponse: firstApiData,
      textResponse: secondApiData,
    };

    res.json(combinedData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error interno en el servidor' });
  }
};
