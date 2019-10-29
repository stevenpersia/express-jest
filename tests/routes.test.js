const request = require("supertest");
const app = require("../server");

describe("Auth route", () => {
	it("should login to website", async () => {
		const res = await request(app)
			.post("/login")
			.send({
				professional_id: "123456789",
				password: "Reacteur75"
			});
		expect(res.statusCode).toEqual(200);
	});

	it("should return error message", async () => {
		const res = await request(app)
			.post("/login")
			.send({
				professional_id: "WRONGID",
				password: "WRONGPASSWORD"
			});
		expect(res.statusCode).toEqual(400);
	});
});
