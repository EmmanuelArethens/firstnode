function db(){
let mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "datadoggo"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

let queryString = 'SELECT * FROM doggo';
 
con.query(queryString, function(err, rows, fields) {
    if (err) throw err;
 
    for (let i in rows) {
        console.log('Doggo Name: ', rows[i].name, rows[i].race);
    }
});
}

module.exports = db;