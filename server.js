const express = require("express"); // Server
const bodyParser = require("body-parser"); // Required for Pst requests
const app = express();

app.use(bodyParser.json({ limit: "10mb" }));

// Home
app.get("/", (req, res) => {
	res.status(200).json({ message: "Home" });
});

// Test route
app.get("/test", (req, res) => {
	res.status(200).json({ message: "Test" });
});

// Other routes
const AUTH_ROUTES = require("./routes/auth");
app.use(AUTH_ROUTES);

// Démarrage du serveur
if (process.env.NODE_ENV !== "test") {
	app.listen(3000, () => console.log("Server has started"));
}

module.exports = app;
