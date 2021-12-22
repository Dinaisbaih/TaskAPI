const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.listen(8000);
const adRouter = require("./routes/ads");
const db = require("./db/models");
app.use("/ads", adRouter);
db.sequelize.sync({ alter: true });

app.listen(8080);
