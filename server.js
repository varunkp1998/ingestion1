const express = require('express');
const mysql = require('mysql');

//server instantiation
const app = express();

const SELECT_ALL = 'SELECT * FROM bs_file_upld';

//make connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'questkar_ingestion'
});

connection.connect(err => {
  if (err) {
    return err;
  }
});

// app.use(bodyParser.json());
app.use(express.json());

//api to read all the data
app.get('/persons', (req, res) => {
  connection.query(SELECT_ALL, (err, results) => {
    if(err) {
      return res.send(err);
    }
    else {
      return res.json(results);
    }
  });
});

//api to create new data
app.post('/persons/add', (req,res)=>{
  const { myname, myFile, myDescription } = req.body;
  const INSERT = `INSERT INTO bs_file_upld (FILE_UPLD_NM, FILE_UPLD_DESC, FILE_LOC) VALUES (${Date.now()}, '${myname}', '${myFile}', ${myDescription})`;
  connection.query(INSERT, (err) => {
    if(err) {
      return res.send(err);
    } else {
      return res.json('added psuccessfully');
    }
  });

});


app.listen(4000, ()=> {
  /*eslint-disable no-console*/
  console.log('Server listening on port 4000');
});
