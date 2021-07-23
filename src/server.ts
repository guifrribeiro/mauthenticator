import express from "express";
import "reflect-metadata";
import "./database";
import cors from "cors";

const app = express();
app.use(cors());

app.listen(3000, () => console.log("Maria Authenticator is running"));