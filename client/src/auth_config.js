require("dotenv").config();

const config = {
  domain: process.env.AUTH0DOMAIN,
  clientId: process.env.AUTH0ID
}

module.exports = config;