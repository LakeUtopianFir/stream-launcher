var ffmpeg = require('fluent-ffmpeg');
var command = ffmpeg();

function captureStreams(srcUrl,ingestSrv) {
        ffmpeg(srcUrl)
               .inputOptions(
                   '-re',
                   '-headers', "User-Agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36"
               )
               .outputOptions(
                   '-bufsize', '6000k',
                   '-c:', 'copy'
               )
               .autopad()
               //.flvmeta()
               .format('flv')
               .on('start', function () {
                   console.log("ffmpeg Started!");
               })
               .on('error', function (err) {
                   console.log("ffmpeg Error!", err);
               })
               .on('end', function () {
                   started = false;
                   console.log("ffmpeg Finished!");
               })
               .output(ingestSrv)
               .run()
           }

module.exports = captureStreams