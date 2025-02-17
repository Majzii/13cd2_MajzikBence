const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
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

app.listen(3000, () => {
    console.log("A server a 3000-es porton fut!");
});