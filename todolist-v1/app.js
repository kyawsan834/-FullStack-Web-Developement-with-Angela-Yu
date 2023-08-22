//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const getDate = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

var items = [];
let workItems = [];

app.get("/", function (req, res) {

	let day = getDate.getDate();

	// if(currentDay === 0 || currentDay === 6){
	// 	day = "Weekend";
	// }else{
	// 	day = "Weekday";
	// }

	// switch(currentDay){

	// 	case 1:
	// 	day = "Monday";
	// 	break;

	// 	case 2:
	// 	day = "Tuesday";
	// 	break;

	// 	case 3:
	// 	day = "Wednesday";
	// 	break;

	// 	case 4:
	// 	day = "Thursday";
	// 	break;

	// 	case 5:
	// 	day = "Friday";
	// 	break;

	// 	case 6:
	// 	day = "Saturday";
	// 	break;

	// 	case 0:
	// 	day = "Sunday";
	// 	break;  

	// 	default:
	// 	console.log("Error : current day is equal to:" + currentDay);
	// 	break;
	// }

	console.log(day);

	res.render("list", { listtitle: day, listitem: items });
	// res.send();
});

app.post("/", function (req, res) {

	let item = req.body.newItem;
	console.log(item);
	if (!item == "" || !item == null) {
		if (req.body.list === "Work") {
			workItems.push(item);
			res.redirect("/work");
		} else {

			items.push(item);
			res.redirect("/");
			console.log(item);

		}
	} else {
		// res.write("list must be write");
		res.send("<div class='heading'>Error. <a href='/'>Back to home</a> <a href='/work'>go to work list</a></div>");
	}
});

app.get("/work", function (req, res) {
	res.render("list", { listtitle: "Work List", listitem: workItems });
});


app.listen(3000, function () {
	console.log("Server is running on port 3000");
});