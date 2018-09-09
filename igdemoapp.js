



 /*
   if(err){
    res.send(err)
   } else{
     console.log(" your access token is" + result.access_token );
     res.redirect("/");

   }
*/


 /*
// This is where you would initially send users to authorize
app.get('/authorize_user',  function(req, res) {
  res.redirect(ig.get_authorization_url("https://api.instagram.com/oauth/authorize/?client_id=e427718cbcf74fe2958bb8ca51215113&redirect_uri=http://localhost:3000&response_type=code")(redirect_uri, { scope: ['likes'], state: 'a state' }));
});

// This is your redirect URI
app.get('/handleauth', function(req, res) {
  ig.authorize_user(req.query.code, redirect_uri, function(err, result) {
    if (err) {
      console.log(err.body);
      res.send("Didn't work");
    } else {
      console.log('Yay! Access token is ' + result.access_token);
      res.send('You made it!!');
    }
  });
});
 
*/