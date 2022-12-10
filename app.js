const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.listen(PORT);

app.get('/',function (req ,res) {
	let options ={
		root: path.join(__dirname)
	};
	let fileName = './public/index.html';
	res.sendFile(fileName, options, function(err) {
		if (err){
			next(err);
		}else{
			console.log(fileName);
		}
	});
});