const express = require("express");
const cors = require("cors");
require("dotenv").config();

const studentQueryRoutes = require("./routes/StudentQueryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTE
app.use("/api", studentQueryRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
