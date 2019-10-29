const request = require("supertest");
const server = require("../server");

describe("Sample Test", () => {
	test("should test that true === true", () => {
		expect(true).toBe(true);
	});
});

describe("Home route", () => {
	test("should test status code is 200", async () => {
		const res = await request(server).get("/test");
		expect(res.statusCode).toEqual(200);
	});
});

describe("Test route", () => {
	test("should test status code is 200", async () => {
		const res = await request(server).get("/test");
		expect(res.statusCode).toEqual(200);
	});
});
