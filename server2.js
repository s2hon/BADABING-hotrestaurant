var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservation = [];
const waitlist = []

app.get('/:endpoint?', function(req, res){
    switch (req.params.endpoint) {
        case '/':
            sendFile(res, 'home.html')
            break
        case 'reserve':
            sendFile(res, 'reserve.html')
            break
        case 'tables':
            sendFile(res, 'tables.html')
            break
        default:
            sendFile(res, '404.html')
            break
    }
});

app.get('api/:endpoint?', function (req,res){
    switch (req.params.endpoint) {
        case 'tables':
            res.json(reservation)
            break
        case 'waitlist':
            res.json(waitlist)
            break
        case 'clear':
            reservation.length=0
            waitlist.length=0
            res.json(reservation)
            break
    }
});

app.post("/api/tables", function(req, res){
    const newReservation = req.body;
    if (reservation.length <5){
      reservation.push(newReservation)
    }
    else if (!isValid(newReservation)) {
        res.status(400).json({error: 'mmmmm too early to be hangry. try again.'})
    }
    else {
      waitlist.push(newReservation)
    }
});

app.listen(PORT, function(){
    console.log("Listening on PORT " + PORT)
});
