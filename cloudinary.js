const cloudinary = require('cloudinary');
const upload = require("./multer").upload;
const dotenv = require('dotenv');

dotenv.config();
cloudinary.config({
    cloud_name:process.env.cloudinary_name,
    api_key:process.env.cloudinary_api,
    api_secret:process.env.cloudinary_secret
});

exports.upload = (file, folder)=>{
    return new Promise(reslove =>{
        cloudinary.uploader.upload(file, (result)=>{
            reslove({
                url:result.url,
                id:result.public_id
            })
        },{
            resource_type:"auto",
            folder:folder
        })
    })
}