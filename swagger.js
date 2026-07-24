const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Clinic Management API",
    description:
      "API documentation for managing patients, doctors, and appointments.",
  },
  host: "localhost:3000",
  schemes: ["http", "https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./index.js"];

swaggerAutogen(outputFile, endpointsFiles);
