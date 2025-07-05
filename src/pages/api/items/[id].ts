import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import Item from "@/schemas/Item";

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
			 *         description: Bad request. User ID must be an integer and larger than 0.
			 *         content:
			 *           application/json:
			 *             schema:
			 *               $ref: '#/components/schemas/Error400'
			 *       404:
			 *         description: A user with the specified ID was not found.
			 *         content:
			 *           application/json:
			 *            schema:
       *              $ref: '#/components/schemas/Error404'
			 *       5XX:
			 *         description: Unexpected error.
			 */
			try {
				const item = await Item.findById(id);

				if (!item) {
					return res.status(404).json({ success: false });
				}
				res.status(200).json({ success: true, data: item });
			} catch (error) {
				// res.status(400).json({ success: false });
				res.status(404).json({
					success: false,
					error: "Data Not Found",
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
			 *       404:
			 *         description: Item not found
			 */
			try {
				const item = await Item.findByIdAndUpdate(id, req.body, {
					new: true,
					runValidators: true,
				});
				if (!item) {
					return res.status(404).json({ success: false });
				}
				res.status(200).json({ success: true, data: item });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;

		case "DELETE":
			/**
			 * @swagger
			 * /api/items/{id}:
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
			 *       204:
			 *         description: Item deleted successfully
			 *       404:
			 *         description: Item not found
			 */
			try {
				const deletedItem = await Item.deleteOne({ _id: id });
				console.log(deletedItem);
				if (deletedItem.deletedCount === 0) {
					return res.status(404).json({ success: false });
				}
				res.status(204).json({ success: true, data: {} });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;

		default:
			res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
			res.status(405).end(`Method ${method} Not Allowed`);
			break;
	}
}
