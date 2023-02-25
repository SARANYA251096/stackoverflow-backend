const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to db...");
  } catch (error) {
    console.log("Error: ", error);
  }
};

module.exports = db;
