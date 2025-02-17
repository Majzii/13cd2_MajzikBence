const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { error } = require("console");
app.use(cors())
app.use(bodyParser.json());

const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        port: 3307,
        password: "",
        database: "teliolimpia",
    }
    //a server futasanak ellenorzese
);

app.get("/", (req, res) => {
    res.send("Szia üdvözzöllek! Ügyes vagy fut a backend!");
})

app.get("/v",(req, res) => {
    const sql = "SELECT * FROM `versenyzok`";
    db.query(sql, (err, result) => {
        if(err) return res.json(err);
        return res.json(result)
    })
})

app.get("/v6",(req, res) => {
    const sql = "SELECT * FROM `versenyzok` WHERE ID = 6;";
    db.query(sql, (err, result) => {
        if(err) return res.json(err);
        return res.json(result)
    })
})

app.post("/vuj",(req, res) => {
    const sql = "INSERT INTO `versenyzok` (`ID`, `versenyzo`) VALUES ('13','Majzik Bence')" ;
    const values = [req.body.ID, req.body.versenyzo];
    db.query(sql, (err, result) => {
        if(err) return res.status(500).json({error: "Hibas adatbazis muvelet"});
        return res.json(result)
    })
})

app.listen(3000, () => {
    console.log("A server a 3000-es porton fut!");
});