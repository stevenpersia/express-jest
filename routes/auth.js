const express = require("express");
const app = express();

app.post("/login", (req, res) => {
	if (
		req.body.professional_id === "123456789" &&
		req.body.password === "Reacteur75"
	) {
		res.status(200).json({
			professional_id: req.body.professional_id,
			password: req.body.password
		});
	} else {
		res.status(400).json({
			message: "Wrong professional_id or password !"
		});
	}
});

module.exports = app;
