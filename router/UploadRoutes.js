/** @format */

import express from "express"
import upload from "../middlewares/multerFileUpload.js"
import {
 singleFileUpload,
 multipleFileUpload,
 getAllSingleFile,
 getAllMultipalFile
} from "../controllers/UploadController.js"

const Router = express.Router()

Router.post("/singleFile", upload.single("file"), singleFileUpload)
Router.post("/multipleFileUpload", upload.array("files"), multipleFileUpload)
Router.get("/singleFile", getAllSingleFile);
Router.get("/multipalFile", getAllMultipalFile);

export default Router
