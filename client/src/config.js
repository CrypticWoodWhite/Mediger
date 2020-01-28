// general config goes here
const configGlob = {};
// production specific config goes here
const configProd = {
  API_URI: "https://dev-d3hshq97.auth0.com/api/v2/"
};
// development specific config goes here
const configDev = {
  API_URI: "http://localhost:3010"
};

// merged config
const config = { ...configProd };
export default config;