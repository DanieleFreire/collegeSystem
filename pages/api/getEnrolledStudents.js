


export default function getEnrolledStudents(req, res) {

    console.log("login api page called...");
   
      
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
    "SELECT * FROM wse.courses;",
    function(err, results, fields) {
   
        // loop over all the records 

                
          console.log(results); // results contains rows returned by server
    
          console.log(results.length);
        
            
           
        // return back the records
        if(results.length >= 1){

          console.log("API results is TRUE. Should send an res.");
          res.status(200).json(results);

        } else {
         
          console.log("API results is FALSE.");
          res.status(200).json("fail");
    
        }

              
     
    }
  );
}  