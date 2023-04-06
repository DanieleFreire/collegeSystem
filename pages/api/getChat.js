import { MongoClient } from 'mongodb'


export default function getChat(req, res) {

// Replace the url string w/ the MongoDB deployment's connection string.
const uri = "mongodb://root:example@0.0.0.0:6666";
const client = new MongoClient(uri);



async function run() {

    try{
        const database = client.db("courses");
        const movies = database.collection("chats");
        //query for movies that have a runtime less than 15 minutes
        const query = { };
        const options = {

        };
        const cursor = movies.find(query, options);

       let buffer = '';

        //loop over documents
        cursor.forEach(element => {
            console.log(element);
            buffer = buffer + element;

            //async call
            res.status(200).json(element);    
        });

       
    } finally{


    }


};

run().catch(console.dir);

    //return back the records

}