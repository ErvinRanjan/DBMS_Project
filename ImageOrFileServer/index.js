import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
import mime from 'mime';

const absoluteDirectoryPath = import.meta.dirname.replaceAll('\\', '/');
const app = express();
const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${absoluteDirectoryPath}/images`);
    },
    filename: function (req, file, cb) {
        cb(null, `image-${Date.now()}.${mime.getExtension(file.mimetype)}`);
    }
});
const fileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${absoluteDirectoryPath}/files`);
    },
    filename: function (req, file, cb) {
        cb(null, `file-${Date.now()}.${mime.getExtension(file.mimetype)}`);
    }
});
const images = multer({ storage: imageStorage });
const files = multer({ storage: fileStorage });
const PORT = 4000;
app.use(cors());
app.use(bodyParser.json());

app.get('/images/:originalname', (req, res) => {
    try {
        fs.readFile(`${absoluteDirectoryPath}/images.json`, (err, data) => {
            if (err) {
                throw err;
            }
            const mapping = JSON.parse(data);
            const filename = mapping[req.params.originalname];
            res.status(200).sendFile(`${absoluteDirectoryPath}/images/${filename}`);
        });
    } catch (err) {
        res.status(400).send('Error while retrieveing image: ' + err);
    }
});

app.get('/files/:originalname', (req, res) => {
    try {
        fs.readFile(`${absoluteDirectoryPath}/files.json`, (err, data) => {
            if (err) {
                throw err;
            }
            const mapping = JSON.parse(data);
            const filename = mapping[req.params.originalname];
            res.status(200).sendFile(`${absoluteDirectoryPath}/files/${filename}`);
        })
    } catch (err) {
        res.status(400).send('Error while retrieveing files: ' + err);
    }
});

app.post('/images/', images.single('image'), (req, res) => {
    try {
        fs.readFile(`${absoluteDirectoryPath}/images.json`, 'utf-8', (err, data) => {
            if (err) {
                throw err;
            }
            const mapping = JSON.parse(data);
            mapping[req.file.originalname] = req.file.filename;
            fs.writeFile(`${absoluteDirectoryPath}/images.json`, JSON.stringify(mapping), err => {
                if (err) {
                    throw err;
                }
            });
        })
        res.status(200).send('image posted successfully');
    } catch (err) {
        res.status(400).send('error while posting image: ' + err);
    }
});

app.post('/files/', files.single('file'), (req, res) => {
    try {
        fs.readFile(`${absoluteDirectoryPath}/files.json`, 'utf-8', (err, data) => {
            if (err) {
                throw err;
            }
            const mapping = JSON.parse(data);
            mapping[req.file.originalname] = req.file.filename;
            fs.writeFile(`${absoluteDirectoryPath}/files.json`, JSON.stringify(mapping), err => {
                if (err) {
                    throw err;
                }
            });
        })
        res.status(200).send('file posted successfully');
    } catch (err) {
        res.status(400).send('error while posting file: ' + err);
    }
});

app.listen(PORT, () => {
    console.log("listening on " + PORT);
})