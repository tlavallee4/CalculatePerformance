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

// The route endpoint
/**
 * @openapi
 * /tasks:
 *   get:
 *     summary: Retrieve a list of tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: A list of tasks for the simple express app
 */
app.get("/tasks", (req, res) => {
	res.send("Simple express app task route");
});

// create a health check route
app.get("/api/v1/health", (req, res) => {
	res.json({
		status: "OK",
		uptime: process.uptime(),
		timestamp: new Date().toISOString(),
		version: "1.0.0",
	});
});

export default app;