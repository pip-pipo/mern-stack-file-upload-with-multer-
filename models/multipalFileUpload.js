import mongoose from 'mongoose';

const multipleFileSchema = mongoose.Schema({
    title:{ type:String,required:true},
    files:[Object],
},{timestamps:true});


const multipalFileUploadModel = mongoose.model('multipalFileUploadModel',multipleFileSchema)

export default multipalFileUploadModel;