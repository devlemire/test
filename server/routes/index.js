const Router = require("express").Router();
const controller = require("../controllers/index");

Router.get("/v1/health", controller.getHealth);
Router.get("/v1/message", controller.getMessage);

module.exports = Router;
