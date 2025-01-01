require('dotenv').config()

const express = require("express");
const app = express();


let port = process.env.PORT || 2000
app.get("/", (request, response) => {
  response.send("HELLO WORLD")
});

app.listen(port, () => {
    console.log('hello')
})

app.listen(3000);

