var express = require("express")

//Create our app
var app = express();
const PORT = process.env.PORT || 80

// This is for heroku and the open maps thing
app.use(function(req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  }
  else {
    next();
  };
});

app.use(express.static("public"));

app.listen(PORT, function(){
  console.log("express server is up on port " + PORT)
});
