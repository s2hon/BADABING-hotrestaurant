var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservation = [];
const waitlist = []

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
    console.log('hello');
  res.sendFile(path.join(__dirname, "/reserve.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  

app.get("/api/tables", function(req, res) {
  return res.json(reservation);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});


app.post("/api/tables", function(req, res){
    const newTable = req.body;
    if (reservation.length <5){
      reservation.push(newTable)
    }
    else {
      waitlist.push(newTable)
    }
});

app.get("/api/clear", function(req, res){
   reservation.length=0;
   waitlist.length=0;
   return res.json(reservation);
})

  app.listen(PORT, function(){
      console.log("Listening on PORT " + PORT)
  })








