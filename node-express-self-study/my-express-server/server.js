//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function (_request, response) {
    response.send("<h1>h1</h1>");
});

app.get("/contact", function (req, res) {
    res.send("contact me at kyawsan84yay@gmail.com");
});

app.get("/about", function (req, res) {
    res.send("I am Kyaw San I love chocolate and code.");
});

app.get("/hobbies", function (req, res) {
    res.send("<ul><li>sleep</li><li>eat</li><li>code</li></ul>");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});