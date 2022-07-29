import 'dotenv/config';
import express from "express";
import path from "path";
import fetch from 'node-fetch';

const __dirname = path.resolve();
const app = express();
const apiKey = process.env.API_KEY;
const apiKeyM = process.env.API_KEY_M;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.raw());
app.use(express.static(__dirname + "/public"));


app.get("/:film", async function(req, res){
    let film = req.params.film;
    const url = await fetch(`http://www.omdbapi.com/?s=${film}&apikey=${apiKeyM}`);
    const data = await url.json();
    res.send(data);
});


app.post("/", async function (req, res) {
    let searchBar = JSON.stringify(req.body.search);
    const url = await fetch(`http://www.omdbapi.com/?s=${searchBar}&apikey=${apiKeyM}`);
    const data = await url.json();
    res.send(data);
    console.log(data);
});

app.listen(8000, () => {
    console.log(`Listening on port 8000...`);
});
