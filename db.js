const mongoose = require("mongoose");

const connection = async (url) => {
    try {
        await mongoose.connect(url);
        console.log("MongoDB Connected.");
    } catch (err) {
        console.error("Error while connecting with MongoDB:", err);
    }
};

module.exports = { connection };
