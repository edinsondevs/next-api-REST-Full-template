
import { NextApiRequest, NextApiResponse } from 'next';
import swaggerJsdoc from '../../swagger.js';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(swaggerJsdoc);
}
