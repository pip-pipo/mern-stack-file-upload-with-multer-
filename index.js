/** @format */

import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { db } from "./db.js"
import path from "path"
import Router from "./router/UploadRoutes.js"
import process from "process"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")))
app.use("/api", Router)


const port = process.env.PORT || 5000

db()

app.listen(port, () => console.log(`app is runing on ${port}`))
