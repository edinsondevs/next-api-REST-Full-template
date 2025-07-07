import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import Item from "@/schemas/Item";
import mongoose from "mongoose";
import { itemSchema } from "@/schemas/itemValidation";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method } = req;
	const { id } = req.query;

	await dbConnect();

	switch (method) {
		case "GET":
			/**
			 * @swagger
			 * /items/{id}:
			 *   get:
			 *     summary: Get a single item by ID
			 *     description: Returns a single item
			 *     tags: [Items]
			 *     parameters:
			 *       - in: path
			 *         name: id
			 *         required: true
			 *         schema:
			 *           type: string
			 *     responses:
			 *       200:
			 *         description: A single item
			 *         content:
			 *           application/json:
			 *             schema:
			 *               $ref: '#/components/schemas/Item'
			 *       400:
			 *         description: Bad request.
			 *         content:
			 *           application/json:
			 *             schema:
			 *               $ref: '#/components/schemas/Error400'
			 *       404:
			 *         description: A item was not found.
			 *         content:
			 *           application/json:
			 *            schema:
			 *              $ref: '#/components/schemas/Error404'
			 */
			try {
				if (!mongoose.Types.ObjectId.isValid(id as string)) {
					return res.status(400).json({
						success: false,
						error: "Bad Request",
					});
				}
				const item = await Item.findById(id);
				if (!item) {
					return res.status(404).json({
						success: false,
						error: "Data not Found",
					});
				}
				res.status(200).json({ success: true, data: item });
			} catch (error) {
				res.status(500).json({
					success: false,
					error: "Internal Server Error",
				});
			}
			break;

		case "PUT":
			/**
			 * @swagger
			 * /items/{id}:
			 *   put:
			 *     summary: Update an item
			 *     description: Updates an item in the database
			 *     tags: [Items]
			 *     parameters:
			 *       - in: path
			 *         name: id
			 *         required: true
			 *         schema:
			 *           type: string
			 *     requestBody:
			 *       required: true
			 *       content:
			 *         application/json:
			 *           schema:
			 *             $ref: '#/components/schemas/Item'
			 *     responses:
			 *       200:
			 *         description: The updated item
			 *         content:
			 *           application/json:
			 *             schema:
			 *               $ref: '#/components/schemas/Item'
			 *       400:
			 *         description: A item was not found.
			 *         content:
			 *           application/json:
			 *            schema:
			 *              $ref: '#/components/schemas/Error400'
			 *       500:
			 *         description: Internal Server Error
			 *         content:
			 *           application/json:
			 *            schema:
			 *              $ref: '#/components/schemas/Error500'
			 */
			try {
				if (!mongoose.Types.ObjectId.isValid(id as string)) {
					return res.status(400).json({
						success: false,
						error: "Bad Request",
					});
				}

				const result = itemSchema.safeParse(req.body);

				if (!result.success) {
					return res
						.status(400)
						.json({ success: false, error: result.error.format() });
				}
				const item = await Item.findByIdAndUpdate(id, req.body, {
					new: true,
					runValidators: true,
				});
				if (!item) {
					return res.status(404).json({
						success: false,
						error: "Data not Found",
					});
				}
				res.status(200).json({ success: true, data: item });
			} catch (error) {
				res.status(400).json({
					success: false,
					error: "Bad Request",
				});
			}
			break;

		case "DELETE":
			/**
			 * @swagger
			 * /items/{id}:
			 *   delete:
			 *     summary: Delete an item
			 *     description: Deletes an item from the database
			 *     tags: [Items]
			 *     parameters:
			 *       - in: path
			 *         name: id
			 *         required: true
			 *         schema:
			 *           type: string
			 *     responses:
			 *       200:
			 *         description: Item deleted successfully
			 *         content:
			 *           application/json:
			 *             schema:
			 *               $ref: '#/components/schemas/Success200'
			 *       400:
			 *         description: A item was not found.
			 *         content:
			 *           application/json:
			 *            schema:
			 *              $ref: '#/components/schemas/Error400'
			 *       500:
			 *         description: Internal Server Error
			 *         content:
			 *           application/json:
			 *            schema:
			 *              $ref: '#/components/schemas/Error500'
			 */
			try {
				if (!mongoose.Types.ObjectId.isValid(id as string)) {
					return res.status(400).json({
						success: false,
						error: "Bad Request",
					});
				}
				const deletedItem = await Item.deleteOne({ _id: id });
				console.log({ deletedItem });
				if (!deletedItem || deletedItem.deletedCount === 0) {
					return res.status(404).json({
						success: false,
						error: "Data not Found",
					});
				}

				res.status(200).json({
					success: true,
					data: { info: "Item deleted successfully" },
				});
			} catch (error) {
				res.status(400).json({
					success: false,
					error: "Bad Request",
				});
			}
			break;

		default:
			res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
			res.status(405).end(`Method ${method} Not Allowed`);
			break;
	}
}
