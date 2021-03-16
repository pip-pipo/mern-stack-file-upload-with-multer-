/** @format */
"use strict"
import uploadSingle from "../models/singleFile.js"
import multipleFileUploadModel from '../models/multipalFileUpload.js'

// singleFile upload
export const singleFileUpload = async (req, res, next) => {
 try {
  const file = new uploadSingle({
   fileName: req.file.originalname,
   filePath: req.file.path,
   fileType: req.file.mimetype,
   fileSize: fileSizeFormater(req.file.size, 2)
  })
  await file.save()
  res.status(201).send("file uploaded successfully")
  next()
 } catch (error) {
  res.status(400).send(error.message)
 }
}

// multipleFileUpload
export const multipleFileUpload =async (req, res, next) => {
 try {
  let filesArray = []
  req.files.forEach((element) => {
   const file = {
    fileName: element.originalname,
    filePath: element.path,
    fileType: element.mimetype,
    fileSize: fileSizeFormater(element.size, 2)
   }
   filesArray.push(file);
  });
  const upload = new multipleFileUploadModel({
      titel:req.body.title,
      files: filesArray,
  });

  await upload.save();

  res.status(201).send("File Uploaded successfully")
 } catch (err) {
  res.status(400).send(err.message)
 }
}



export const getAllSingleFile =async (req, res)=>{
    try {
        const allsingleFile = await uploadSingle.find();
        res.status(200).json(allsingleFile);
    } catch (error) {
        return status(400).json(error.message)
    }
}



export const getAllMultipalFile =async (req, res)=>{
    try {
        const allsingleFile = await multipleFileUploadModel.find();
        res.status(200).json(allsingleFile);
    } catch (error) {
        return status(400).json(error.message)
    }
}


// file formater

const fileSizeFormater = (bytes, decimal) => {
 if (bytes === 0) {
  return "0 Bytes"
 }
 const dm = decimal || 2
 const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"]
 const index = Math.floor(Math.log(bytes) / Math.log(1000))
 return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
}
