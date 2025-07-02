
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
import Item from '@/models/Item';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      /**
       * @swagger
       * /api/items:
       *   get:
       *     summary: Retrieve a list of items
       *     description: Retrieve a list of items from the database.
       *     tags: [Items]
       *     responses:
       *       200:
       *         description: A list of items.
       *         content:
       *           application/json:
       *             schema:
       *               type: array
       *               items:
       *                 $ref: '#/components/schemas/Item'
       */
      try {
        const items = await Item.find({});
        res.status(200).json({ success: true, data: items });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      /**
       * @swagger
       * /api/items:
       *   post:
       *     summary: Create a new item
       *     description: Create a new item in the database.
       *     tags: [Items]
       *     requestBody:
       *       required: true
       *       content:
       *         application/json:
       *           schema:
       *             $ref: '#/components/schemas/Item'
       *     responses:
       *       201:
       *         description: The created item.
       *         content:
       *           application/json:
       *             schema:
       *               $ref: '#/components/schemas/Item'
       *       400:
       *         description: Bad request
       */
      try {
        const item = await Item.create(req.body);
        res.status(201).json({ success: true, data: item });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
