export default function deleteStudent(req, res) {

    console.log("login api page called...");
   
      
    var id = req.body.id;
    

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
    "DELETE FROM wse.courses WHERE id=('"+id+"');",
    function(err, results, fields) {
   
        // return back the records
        res.status(200).json(results);
            
           
                    
     
    }
  );
}  





