let target = 'https://wings.msn.to';
let frame = document.querySelector("#frame");
let message = document.querySelector("#message");

document.querySelector('#btn').addEventListener('click', function() {
    console.log(`putting message into frame: "${message.value}" into ${target}`);
    frame.contentWindow.postMessage(message.value, target); // This statement doesn't work!
}, false);

window.addEventListener('message', function(e) {
    if (e.origin !== target) { return; }
    console.log(e.data);
}, false);
