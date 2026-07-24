const swaggerAutogen = require("swagger-autogen")();
const dotenv = require("dotenv");
dotenv.config();

const isProduction =
  process.env.NODE_ENV === "production" || process.env.RENDER === "true";

const doc = {
  info: {
    title: "Clinic Management API",
    description:
      "API documentation for managing patients, doctors, and appointments.",
  },
  host: isProduction ? "://onrender.com" : "localhost:3000",

  schemes: isProduction ? ["https"] : ["http"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./index.js"];

swaggerAutogen(outputFile, endpointsFiles);
