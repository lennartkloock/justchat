window.onmessage = (msg) => {
    console.log(msg);
    msg.ports[0]?.postMessage("init back");
};
