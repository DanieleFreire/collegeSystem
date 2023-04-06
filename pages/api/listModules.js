export default function ListAllModulesQuery(req, res) {

    console.log("login api page called...");

    let currentID = req.query.moduleid;
         
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
    "select * from modules where id = '"+currentID+"';",
    function(err, results, fields) {
   
        console.log("sending back the results");  
        console.log(results); // results contains rows returned by server
               
           
        console.log("API results is TRUE. Should send an res.");
        res.status(200).json(results);

              
     
    }
  );
}  