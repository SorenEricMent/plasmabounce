console.log("PLASMABOUNCE HACKER EXTENSION BY WinslowEric");
Wrapper();

function Wrapper() {

}

function LateInjector(injectScript) {
    document.head.appendChild(document.createElement('script')).innerHTML = injectScript;
}

document.addEventListener("DOMContentLoaded", function () {
    fetch(chrome.runtime.getURL('scripts/inject.js'))
        .then(function (response) {
            return response.text();
        }).then(function (data) {
            LateInjector(data);
        });
    fetch(chrome.runtime.getURL('scripts/mdui.js'))
        .then(function (response) {
            return response.text();
        }).then(function (data) {
            LateInjector(data);
        });
});

window.addEventListener("message", function (event) {
    if(event.data.target == "plasmabounce"){

    }
});
