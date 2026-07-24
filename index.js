const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(
  "/api-docs",
  (req, res, next) => {
    // #swagger.ignore = true
    next();
  },
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument),
);

app.use("/patients", require("./routes/patients"));
app.use("/doctors", require("./routes/doctors"));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(
        `Server running on port ${PORT}\nAPI Docs: http://localhost:${PORT}/api-docs`,
      ),
    );
  })
  .catch((err) => console.error("Database connection failed:", err));
