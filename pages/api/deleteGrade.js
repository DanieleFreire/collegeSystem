export default function deleteGrade(req, res) {

    console.log("login api page called...");
   
      
    const gradeid = req.body.gradeid;
    

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
    "DELETE FROM wse.grades WHERE gradesid=('"+gradeid+"');",
    function(err, results, fields) {
   
        // return back the records
        res.status(200).json(results);
            
           
                    
     
    }
  );
}  







