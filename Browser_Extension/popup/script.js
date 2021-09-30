function sendAction(action) {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {action: action});
    });
}

document.getElementById("sepia-toggle").onclick = () => sendAction("sepia-toggle");

document.getElementById("grayscale-toggle").onclick = () => sendAction("grayscale-toggle");

document.getElementById("invert-toggle").onclick = () => sendAction("invert-toggle");
