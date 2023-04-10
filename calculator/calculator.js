//jshint esversion:6

// console.log("hay");

// node js area

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
	// res.send("hay");
	// console.log(__dirname);
	res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){

	// res.send("Thanks for posting that"); 
	/*console.log(req.body);
	console.log(req.body.num1);*/

	let num1 = Number(req.body.num1);
	let num2 f= Number(req.body.num2);  
	let result = num1+num2;
	res.send("Your result is " + result);

});	

app.get("/bmicalculator",function(req,res){
	res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
	let weight = parseFloat(req.body.weight);
	let height = parseFloat(req.body.height);
	let getBMI = (weight / (height * height));

	res.send("Your BMI is " + getBMI);
});

app.listen(3000,function(){
	console.log("Server is running on port 3000.");
});
