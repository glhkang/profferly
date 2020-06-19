require("dotenv").config();
const express = require("express");
const router = express.Router();
const PHOTO = require("../../models/Photo");
const multer = require("multer");
let AWS = require("aws-sdk");

let storage = multer.memoryStorage();
let upload = multer({ storage: storage });

// INDEX ROUTE
router.route("/").get((req, res, next) => {
    PHOTO.find(
        {},
        null,
        {
            sort: { createdAt: 1 },
        },
        (err, docs) => {
            if (err) {
                    return next(err);
            }
            res.status(200).send(docs);
        }
    );
});

router.route("/:id").get((req, res, next) => {
    PHOTO.findById(req.params.id, (err, go) => {
        if (err) {
        return next(err);
        }
        res.json(go);
    });
});

//POST TEST WORKS WITH IN POSTMAN
router.post("/upload", upload.single("file"), function (req, res) {
    const file = req.file;
    const s3FileURL = process.env.AWS_Uploaded_File_URL_LINK;

    let s3bucket = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
    });

    let params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read",
    };

    s3bucket.upload(params, function (err, data) {
        if (err) {
        res.status(500).json({ error: true, Message: err });
        } else {
        res.send({ data });
        
        let newFileUploaded = {
                post_id: req.body.post_id,
                description: req.body.description,
                fileLink: s3FileURL + file.originalname,
                s3_key: params.Key,
        };
        
        let photo = new PHOTO(newFileUploaded);
            photo.save(function (error, newFile) {
                    if (error) {
                        throw error;
                    }
            });
        }
    });
});


router.route("/:id").delete((req, res, next) => {
    PHOTO.findByIdAndRemove(req.params.id, (err, result) => {
        if (err) {
        return next(err);
        }

        let s3bucket = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
        });

        let params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: result.s3_key,
        };

        s3bucket.deleteObject(params, (err, data) => {
            if (err) {
                    console.log(err);
            } else {
                    res.send({
                        status: "200",
                        responseType: "string",
                        response: "success",
                    });
            }
        });
    });

});

//posts-photo get req

router.get("/post/:post_id", (req, res) => {
//debugger
    PHOTO
        .find({ post: req.params.post_id })
        .sort({ date: -1 })
        .then((photos) => res.json(photos))
        .catch((err) => res.status(400).json(err));
});


module.exports = router;
