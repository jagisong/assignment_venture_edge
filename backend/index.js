const { config } = require("dotenv");
const express = require("express");
const mongoDB = require("./db/connection");
const cors = require('cors');
const appRoutes = require("./routes");
config();

const app = express();
const PORT = process.env.PORT;
mongoDB();

app.use(express.json());
app.use(cors());

app.use('/api/', appRoutes)

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})