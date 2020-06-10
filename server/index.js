require("dotenv").config({ path: `${__dirname}/.env` });
const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");

const { SERVER_PORT } = process.env;
const app = express();

// Middleware
app.use(morgan("dev"));

// Routes
app.use("/api", routes);

// Server the client
app.use(express.static(`${__dirname}/../client/build`));
app.get("*", (req, res, next) => {
  res.sendFile(`${__dirname}/../client/build/index.html`);
});

app.listen(SERVER_PORT, () =>
  console.log(`I am listening on port ${SERVER_PORT}`)
);
