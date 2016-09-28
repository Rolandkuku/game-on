import express from "express";
import path from "path";

const GameOnApp = express();

const rootDir = __dirname.split("/");
rootDir.pop();
console.log(rootDir.join("/"));


GameOnApp.use('/static', express.static(rootDir.join("/") + '/public'));
console.log(rootDir.join("/") + "/plublic");
GameOnApp.set("view engine", "ejs");

GameOnApp.get("/", (req, res) => {
    res.render("index", {"title": "Moto"});
});

GameOnApp.listen(3000, () => {
    console.log("App listening at 3000 !");
});
