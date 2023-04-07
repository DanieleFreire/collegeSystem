

export default function saveGrade(req, res) {

    console.log("login api page called...");
   
    const cid = req.body.cid;
    const studentid = req.body.studentid;
    const grade = req.body.grade;

    
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
  
    // validating grade as alpha character only
    var validator = require('validator');
    var gradeAlpha = validator.isAlpha(grade);

    console.log("is grade alpha? " + gradeAlpha);

    // simple query
  connection.query(
    "INSERT INTO wse.grades (grade,id,studentid) VALUES ('"+grade+"','"+cid+"','"+studentid+"');",
    function(err, results, fields) {
   

            
           
        // return back the records
        res.status(200).json(results);

       

              
     
    }
  );
}  