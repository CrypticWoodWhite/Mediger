require("dotenv").config();

module.exports = {
  domain: process.env.AUTH0DOMAIN,
  clientId: process.env.AUTH0ID
}