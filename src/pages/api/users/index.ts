import dbConnect from "@/lib/dbConnect";
import Users from "@/models/Users";
import { NextApiRequest, NextApiResponse } from "next";

const URI_URL = process.env.URI_URL || "";

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
       * /api/users:
       *   get:
       *     summary: Retrieve a list of users
       *     description: Retrieve a list of users from the database.
       *     tags: [Users]
       *     responses:
       *       200:
       *         description: A list of users.
       *         content:
       *           application/json:
       *             schema:
       *               type: array
       *               items:
       *                 $ref: '#/components/schemas/User'
       */
      try {
        const users = await fetch(`${URI_URL}users`)
        // const users = await fetch(`https://jsonplaceholder.typicode.com/users`)
			.then((response) => response.json())
			.then((data) => data);
          res.status(200).json({ success: true, data: users });
      } catch (error) {
        // res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      /**
       * @swagger
       * /api/users:
       *   post:
       *     summary: Create a new user
       *     description: Create a new user in the database.
       *     tags: [Users]
       *     requestBody:
       *       required: true
       *       content:
       *         application/json:
       *           schema:
       *             $ref: '#/components/schemas/User'
       *     responses:
       *       201:
       *         description: The created user.
       *         content:
       *           application/json:
       *             schema:
       *               $ref: '#/components/schemas/User'
       */
      try {
        const user = await Users.create(req.body);
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}