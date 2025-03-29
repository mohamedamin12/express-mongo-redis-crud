require("dotenv").config();
const express = require('express');
const db = require("./config/db");
const app = express();
const productRoute = require("./routes/productRoute");
// Middleware to parse JSON
app.use(express.json());

// connect to database
db()

app.use("/products", productRoute);


// Start the server
const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});