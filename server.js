const path = require('path')
const express = require('express')
const multer = require('multer')

const app = express()

const PORT = process.env.PORT || 5000

let count = 1;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'upload'))
    },
    filename: function (req, file, cb) {
        cb(null, (count++) + file.originalname)
    }
})

const upload = multer({
    storage
})

app.use(express.json())

app.use('/image', express.static('./upload'));

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'pug')

app.get('/form', (req, res) => {
    res.render('form')
})

app.post('/upload', upload.single('userfile'), (req, res) => {
    res.send('Uploaded! : ' + req.file); // object를 리턴함
    console.log(req.file); // 콘솔(터미널)을 통해서 req.file Object 내용 확인 가능.
})

app.post('/post', upload.single('image'), (req, res) => {

    console.log(req.file)
    console.log(req.body)

    res.send('OK')
})

app.use(express.static(path.join(__dirname, 'build')))


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))