const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({exended:true}));

app.get("/",function(req,res){

	res.sendFile(__dirname +  "/index.html");

	// res.send("Server is up and running ");

});

app.post("/",function(req,res){
	console.log();
	const query = req.body.cityName;
	const apiKey = "6c485b722822a98c1a22e3bf91cdbefc";
	const unit = "metric";

	const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query +"&appid=" + apiKey + "&units=" + unit;

	https.get(url,function(response){
		console.log(response.statusCode);

		response.on("data",function(data){
		const weatherData = JSON.parse(data);
		const temp = weatherData.main.temp;
		const weatherDescription = weatherData.weather[0].description;
		const icon = weatherData.weather[0].icon;
		const imageURL = " https://openweathermap.org/img/wn/" + icon + "@2x.png";
		res.write("<p>The weather is currently " + weatherDescription + "</p>");
		res.write("<h1>The temperature in " + query +" is " + temp + " degrees Celcius.</h1>");
		res.write("<img src=" + imageURL +">");
		res.send();


		});
	});
	console.log("Post request received");
});









app.listen(3000,function(){
	console.log("Server is running on port 3000.");
});