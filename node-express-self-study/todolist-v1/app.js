//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

var listitemjs = ["hay"];
let works = ["hello"];


app.get("/", function (req, res) {

	let today = new Date();
	let year = today.getUTCFullYear();
	let options = {
		weekday: "long",
		day: "numeric",
		month: "long",
	}
	let day = today.toLocaleDateString("en-US", options);

	// res.send("hay");

	res.render("list", { kindOfDay: day, listitem: listitemjs });


});

app.post("/", function (req, res) {
	// console.log("server is posted.");

	let item = req.body.listitem;

	if (req.body.button === "Work") {

		works.push(item);
		res.redirect("/work");
		console.log(item + "work");

	} else {
		listitemjs.push(item);
		console.log(item);
		console.log(req.body);
		res.redirect("/");
	}



});

app.get("/work", function (req, res) {

	res.render("list", { kindOfDay: "Work List", listitem: works });

});







app.listen(3000, function () {
	console.log("Server is running on port 3000");
});  