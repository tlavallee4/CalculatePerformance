import express, { Express } from "express";

import setupSwagger from "../config/swagger";

// Initialize Express application
const app: Express = express();

// setup swagger for api documentation
setupSwagger(app);

// Define a route
app.get("/", (req, res) => {
	res.send("Simple Express app");
});

// The route
/**
 * @openapi
 * /tasks:
 *   get:
 *     summary: Retrieve a list of tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: A list of tasks
 */
app.get("/tasks", (req, res) => {
	res.send("Retrieve tasks");
});

export default app;