const express = require("express");
const axios = require("axios");
const cors = require("cors");
require('dotenv').config();

console.log(process.env)
const app = express();
const PORT = process.env.PORT || 6060;

app.get("/products", cors(), (req, res) => {
  axios
    .get(process.env.CELES_API, {
      headers: {
        "X-Shopify-Access-Token": process.env.API_KEY,
      },
    })
    .then((resp) => res.send(resp.data))
    .catch(() => res.status(400).send("Error"));
});

app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  })
);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
