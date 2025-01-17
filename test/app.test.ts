import request from "supertest";
import { Response } from "supertest";
import app from "../src/app";

describe("GET /", () => {
	it("should return Simple Express app", async () => {
		const response: Response = await request(app).get("/");
		expect(response.status).toBe(200);
		expect(response.text).toBe("Simple Express app");
	});
});

