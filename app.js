const express = require(express);
const app = express();
const PORT = 5090
app.listen(port ,(req , res) => {
	res.send(console.log(`server start in ${port}`));
});

app.get('/', (req ,res) =>{
	res.send('<h1>Servidor is : Start</h1>');
})