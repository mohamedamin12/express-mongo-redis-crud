const mongoose = require("mongoose");

const db = () =>
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("DB connected....");
    })
    .catch((err) => {
      console.log("Error on DB connection", err);
    });

module.exports = db;