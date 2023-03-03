const humanNames = require('human-names');
const mysql = require('mysql')
const express = require('express')

const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const connection = mysql.createConnection(config)

app.get('/',  (req, res) => {
  insertNameDB(humanNames.allRandom())
  printAllNamesDB(res)
})

function insertNameDB(name) {
  const query = `INSERT INTO people(name) values('${name}')`
  connection.query(query)
}

function printAllNamesDB(res) {
  const query = `SELECT name FROM people`
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.send(createHTMLWithNames(result))
  })
}

function createHTMLWithNames(dbRows) {
  var nameListHTML = '<h1>Full Cycle Rocks!</h1>'
  dbRows.forEach(r => {
    nameListHTML += `<h2>${r.name}<h2/>`
  });
  return nameListHTML
}

app.get('/delete',  (req, res) => {
  deleteDB()
  res.send(`<h2>Linhas deletadas<h2/>`)
})

function deleteDB() {
  const query = `DELETE FROM people WHERE 1=1`
  connection.query(query)
}

app.listen(port, () => {
  console.log('Rodando na porta ' + port)
})