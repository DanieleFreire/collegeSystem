

export default function handler(req, res) {

    console.log("login api page called...");
   
  
  
    // Get just the username and password and put them into variables.
    const username = req.body.username;
    const pass = req.body.password;
  
    console.log("username is: "+ username);
    console.log("password  is: "+ pass);
  
  
      
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
  
  
    // simple query
  connection.query(
    "SELECT * FROM adminlogin WHERE username = '"+username+"' and pass = '"+pass+"' LIMIT 1;",
    function(err, results, fields) {
   
      if(results.length == 1) {

        res.status(200).json("ok");

      } else {

        res.status(200).json("fail");
      }
     
     
    }
  );
}  