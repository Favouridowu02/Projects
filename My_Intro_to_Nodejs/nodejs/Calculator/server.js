const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res)
{
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post('/', function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send(`This is the answer ${result}`);
})

app.listen("3000", function () {
    console.log("You are currently working at port")
})