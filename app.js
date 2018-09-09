var express = require("express"),

      ig = require("instagram-node").instagram();

var app = express();

var request = require("request");
 var bodyParser = require("body-parser");

 app.use(bodyParser.urlencoded({extended : true}));

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
ig.use({
  client_id: "e427718cbcf74fe2958bb8ca51215113",
  client_secret : "4db7210245a64eb0a669f17eff263f9d"
});

//The URL we set when registering our application.

var redirect_uri = "http://localhost:3000/handleauth"


//ROUTES

// This is where you send users to authorize

app.get("/authorize_user", function(req, res){

      // set the scope of our application to be able to access likes and public content

  res.redirect(ig.get_authorization_url(
    redirect_uri, { 
                    scope: ["public_content", "likes"],
                    state: "a state"
                  }) 
                );
});



/*


*/

// This is your redirect URI

app.get('/handleauth', function(req, res) {
  ig.authorize_user(req.query.code, redirect_uri, function(err, result) {
    if (err) {
      console.log(err.body);
      res.send("Didn't work");
    } else {
      accessToken = result.access_token;

      console.log('Yay! Access token is ' + accessToken);
     //res.send('workeddddddd');
     // accessToken = result.access_token;
 res.redirect("/instagram");
   //res.redirect("/location");

    }

  });
});


app.get("/", function(req, res){

  res.render("pages/home");
})
 
app.get('/instagram', function(req, res){
  // create a new instance of the use method which contains the access token gotten

   ig.use({
    access_token : accessToken
   });

   myaccessToken = accessToken.split(".")[0];

ig.user_media_recent(myaccessToken, function(err, result, pagination, remaining, limit) {
       if(err) res.send(err);
    // pass the json file gotten to our ejs template
       res.render('pages/index', { result : result });
   });
});


 

app.listen(3000, function(){
  console.log("Instagram API server has started");
});