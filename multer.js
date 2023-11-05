const multer= require('multer');


const storage = multer.diskStorage({
    destination: function (req, file ,callback)
    {
        callback(null, './uploads/');
    },
    filename: function(req, file ,callback)
    {
        callback(null,Date.now() + '-' + file.originalname);
    }
})

// File validation

const fileFilter = (req, file, callback)=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' )
    {
        callback(null, true);
    }
    else
    {
        callback({message: "Unsupported file format"}, false)
    }
}

const upload = multer({
    storage:storage,
    limits:{fileSize:1024*1024*10},
    // fileFilter:{fileFilter}
})

// module.exports = upload;
exports.upload = upload;