import { withIronSessionApiRoute } from "iron-session/next";



export default withIronSessionApiRoute(

  async function handler(req, res) {

    console.log("login api page called...");
   
  
  
    // Get just the username and password and put them into variables.
    const rawusername = req.body.username;
    const rawpass = req.body.password;
  
          
    // get the client
    const mysql = require('mysql2');
  
    // create the connection to database
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'example',
      port: 3306,
      database: 'wse'
    });
  
  // validating username and pass usging jsesc
  var jsesc = require('jsesc');
  var username = jsesc(rawusername);
  var pass = jsesc(rawpass);


  console.log("username is: "+ username);
  console.log("password  is: "+ pass);
  
    // simple query
  connection.query(
    "SELECT * FROM adminlogin WHERE username = '"+username+"' and pass = '"+pass+"' LIMIT 1;",
    function(err, results, fields) {

      console.log(results.length);
   
      if(results.length == 1) {

        res.status(200).json("ok");

      } else {

        res.status(200).json("fail");
      }
     
     
    }
  );
},
{
  cookieName: "myapp_cookiename",
  password: "complex_password_at_least_32_characters_long",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
},
); 