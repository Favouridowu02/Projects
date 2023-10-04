const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res)
{
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post('/', function (req, res) {
    var num1 = parseFloat(req.body.num1);
    var num2 = parseFloat(req.body.num2);
    var result = num1 + num2;
    res.send(`This is the answer ${result}`);
})

app.get("/bmicalculator", function (req, res) {
    //res.send("<h1>Hello World</h1>")
    res.sendFile(__dirname + "/index.html");
});

app.post("/bmicalculator", function (req, res) {
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);
    var result = num1 + num2;

    res.send("The reult of the calculation is " + result)
})

app.listen("3000", function () {
    console.log("server is up at port 3000");
})