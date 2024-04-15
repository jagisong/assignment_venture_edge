const { config } = require("dotenv");
const mongoose = require("mongoose");
config();
const URI = process.env.URI;

const mongoDB = () => {
    mongoose
        .connect(URI)
        .then(async () => {
            console.log("connected");
        })
        .catch((err) => {
            console.log("err", err.message);
        });
};

module.exports = mongoDB;