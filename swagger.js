require("dotenv").config();
const swaggerAutogen = require("swagger-autogen")();
const os = require("os");

const isProduction = os.platform() === "linux";

const doc = {
  info: {
    title: "Clinic Management API",
    description: "API Authentication Hub",
  },

  externalDocs: {
    description: `
    [Login with GitHub](http://localhost:3000/auth/github)

    [Logout](http://localhost:3000/auth/logout)
        `,
        url: "http://localhost:3000",
  },

  host: isProduction
    ? "cse341finalproject-mn1w.onrender.com"
    : "localhost:3000",
  schemes: isProduction ? ["https"] : ["http"],
  securityDefinitions: {
    githubOAuth: {
      type: "oauth2",
      authorizationUrl: isProduction
        ? "https://onrender.com"
        : "http://localhost:3000/auth/github",
      flow: "implicit",
      description:
        "Log in via GitHub OAuth to access protected POST and PUT endpoints.",
    },
  },
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
