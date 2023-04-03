export default function handler(req, res) {

    console.log("register api page called...");
   
    console.log("looking at the variables we got from the browser..");
    console.log(req.body);
  
    // Get just the username and password and put them into variables.
    const fname = req.body.fname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const address = req.body.address;
    const telephone = req.body.telephone;
    const enrolledin = req.body.enrolledin;
    
    
  
    console.log("fname is: "+ fname);
    console.log("lastname  is: "+ lastname);
    console.log("email  is: "+ email);
    console.log("address  is: "+ address);
    console.log("telephone  is: "+ telephone);
    console.log("enrolledin  is: "+ enrolledin);

    
  
  
    // db
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
    "INSERT INTO wse.students (fname,lastname,email,address,telephone,enrolledin) VALUES ('"+fname+"','"+lastname+"','"+email+"','"+address+"','"+telephone+"','"+enrolledin+"');",
    function(err, results, fields) {
        
        if(err) {
            console.log(err);
            res.status(200).json("fail" + err.sqlMessage);
        return    
        }

        console.log(results); // results contains rows returned by server
  
        console.log(results.length);
            
        res.status(200).json("ok"); //inside the function: being sure to get this response back to the brownser 
          
        //sending back the result.
        if(results.length == 1){
      
            res.status(200).json("ok");
          } else {
           
            res.status(200).json("fail");
      
          }    
                  
     
    }
  );
  
    
}