const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require("body-parser"); 
const { MongoClient, ServerApiVersion } = require('mongodb');
const reader = new FileReader();
const user = reader.readAsText("etc/secrets/MONGO_DB_USERNAME");
const pass = reader.readAsText("etc/secrets/MONGO_DB_PASSWORD");
const uri = `mongodb+srv://${user}:${pass}@cluster0.5x6o3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const databaseAndCollection = {db: reader.readAsText("etc/secrets/MONGO_DB_NAME"),
                               collection: reader.readAsText("etc/secrets/MONGO_COLLECTION")
                              };

app.set("views", path.resolve(__dirname, "/"));
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render('index'));
app.use(bodyParser.urlencoded({extended:false}));


const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
