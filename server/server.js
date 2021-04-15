import jsonServer from "json-server";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import session from 'express-session';

const app = express();

// MIDDLEWARES
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// OG
server.use(middlewares);
server.use(router);

// NEW
app.use(express.json());
app.use(express.urlencoded({extended: true}));
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

// Server start
server.listen(3001, () => {
    console.log("JSON server is running");
});