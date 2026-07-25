const swaggerAutogen = require("swagger-autogen")();
const os = require("os");

const isProduction = os.platform() === "linux";

const doc = {
  info: {
    title: "Clinic Management API",
    description:
      "API documentation for managing patients, doctors, and appointments.",
  },
  host: isProduction
    ? "cse341finalproject-mn1w.onrender.com"
    : "localhost:3000",
  schemes: isProduction ? ["https"] : ["http"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
