//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express(); 

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){

	// res.send("hello");
	res.sendFile(__dirname + "/signup.html");

});

app.post("/",function(req,res){
	// console.log("post request accepted");
	const firstname = req.body.firstname;
	const lastname = req.body.lastname;
	const email = req.body.email;
	// console.log(firstname, lastname, email);

	const data = {
		members : [
			{
				email_address: email,
				status : "subscribed",
				merge_fields : {
					FNAME : firstname,
					LNAME : lastname, 
				}
			}
		]
	}

	const jsonData = JSON.stringify(data); 

	// url from mailchimp browser //https://mailchimp.com/developer/marketing/docs/fundamentals/#Code_examples
	const url = "https://us13.api.mailchimp.com/3.0/lists/700d2a6bb2";

	const options = {
		method : "POST",
		auth : "kyawsan1:e820e56a3ff2d6f39ce061433b1ef2a8-us13",
	}

	const request = https.request(url,options,function(response){

		if(response.statusCode === 200){
			res.sendFile(__dirname + "/success.html");
		}else{
			res.sendFile(__dirname + "/failure.html");
		}


		response.on("data",function(data){
			console.log(JSON.parse(data));
		});
	});

	request.write(jsonData);
	request.end();
});

app.post("/failure",function(req,res){	
	res.redirect("/");
});



app.listen(3000,function(){
	console.log("Server is running on port 3000");
});

// mailchimp API Key
// e820e56a3ff2d6f39ce061433b1ef2a8-us13

// list id or audience id
// 700d2a6bb2