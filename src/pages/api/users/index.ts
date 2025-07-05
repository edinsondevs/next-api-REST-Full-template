import dbConnect from "@/lib/dbConnect";
import Users from "@/schemas/Users";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const URI_URL = process.env.URI_URL || "";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case "GET":
			/**
			 * @swagger
			 * /users:
			 *   get:
			 *     summary: Recupera lista de usuarios
			 *     description: Recuperar una lista de usuarios de la base de datos.
			 *     tags: [Userss GET]
			 *     responses:
			 *       200:
			 *         description: Una lista de usuarios.
			 *         content:
			 *           application/json:
			 *             schema:
			 *               type: array
			 *               items:
			 *                 $ref: '#/components/schemas/User'
			 */
			try {
				const { data, status, statusText } = await axios.get(
					`${URI_URL}user`
				);
				if (status !== 200) {
					return res.status(status).json({
						success: false,
						message: "Failed to fetch users",
					});
				}
				res.status(status).json({
					success: true,
					data: data,
					status: statusText,
				});
			} catch (error) {
				res.status(400).json({
					success: false,
					error:
						error instanceof Error
							? error.message
							: "Unknown error",
				});
			}
			break;
		case "POST":
			/**
			 * @swagger
			 * /api/users:
			 *   post:
			 *     summary: Crea un nuevo usuario
			 *     description: Crea un nuevo usuario en la base de datos.
			 *     tags: [Userss]
			 *     requestBody:
			 *       required: true
			 *       content:
			 *         application/json:
			 *           schema:
			 *             $ref: '#/components/schemas/User'
			 *     responses:
			 *       201:
			 *         description: El usuario creado.
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
			res.setHeader("Allow", ["GET", "POST"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
