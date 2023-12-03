const stream = require('./utils/ffmpeg')
const {checkLocalCapture} = require('./utils/func.js')
const express = require('express')
const app = express();
app.use(express.json());



app.post('/stream', async (req, res) => {
    try {
            let input = req.body
            let inputURL = input.stream_url
            let lc = input.local_capture
            let rtmp = input.rtmp_key
            let local_name = input.local_name
            let ingestSrv = await checkLocalCapture(lc,local_name, rtmp)
            stream(inputURL, ingestSrv);
        return res.status(200).send("Success");
      }
    catch (e) {
        return res.status(500).send({ errorMessage: `Internal Server Error ${e.message}` })
    }
    })

const port = '3000'

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })