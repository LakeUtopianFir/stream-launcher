# STREAM-LAUNCHER
### Simple streaming app to capture .m3u8 streams to file or to rtmp endpoint with ffmpeg encoding

## TLDR
1. ```Install Docker & Docker compose```
    
    **Windows:** **https://docs.docker.com/desktop/install/windows-install/**

    **Linux** **https://docs.docker.com/desktop/install/linux-install/**

    **Mac:** **https://docs.docker.com/desktop/install/mac-install/**
2. ```clone repo```
3. ```docker compose up -d```
4. ```POST to localhost:3000/stream```

**JSON PAYLOAD**
```
{
"stream_url": "{M3U8_URL}",                 // stream link you wush to capture
"local_capture": true,                      // Enable to stream to local file 
"rtmp_key": "{RTMP_URL}",                   // RTMP integtion server endpoint
"local_name": "{FILENAME}"                  // local filename if "local_capture" is set to true
}
```