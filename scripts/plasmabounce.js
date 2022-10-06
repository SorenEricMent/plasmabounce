console.log("PLASMABOUNCE HACKER EXTENSION BY WinslowEric");
Wrapper();

function Wrapper() {

}

class StateManager {
    constructor() {
        this.states = {};
        this.states["AntiTimer"] = "disabled";
    }
    mutator(key, value) {
        this.states[key] = value;
    }
    accessor(key) {
        return this.states[key];
    }
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
});

window.addEventListener("message", function (event) {
    if(event.data.target == "plasmabounce"){
        console.log("PlasmaBounce Message Received: " + event.data.data);
    }
});