


export default function getEnrolledStudents(req, res) {

    // get tge ID for the query
    console.log("get enrolled page ID for query: " + req.query.studentid);
   
    let currentID = req.query.studentid;

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
    "select * from students where enrolledin = '"+currentID+"';",
    function(err, results, fields) {
   

                
        console.log("sending back the results");  
        console.log(results); // results contains rows returned by server
               
           
        console.log("API results is TRUE. Should send an res.");
        res.status(200).json(results);

      
              
     
    }
  );
}  