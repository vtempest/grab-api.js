import {log} from "../src/log"

log("Downloading...", {
    startSpinner: true,
    color: "magenta"
})

setTimeout(()=>
    
    log("complete", {
        stopSpinner: true
    })
    
,2000)