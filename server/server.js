import jsonServer from "json-server";
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import session from 'express-session';

import User from './user';

const app = express();

// MIDDLEWARES
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// OG
server.use(middlewares);
server.use(router);

// NEW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:3001",
    credentials: true
}))

app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}));

app.use(cookieParser("secretcode"))

// ROUTES
app.post("/login", (req, res) => {
    console.log(reg.body);
});

app.post("/register", (req, res) => {
    User.findOne({username: req.body.username}, (err,doc) => {
        if (err) throw err;
        if (doc) res.send("User already exists.");
        if (!doc) {
            res.send("User created.");
        }
    });
    // console.log(reg.body);
});

app.get("/user", (req, res) => {});

// Server start
server.listen(3001, () => {
    console.log("JSON server is running");
});