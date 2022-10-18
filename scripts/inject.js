console.log("PlasmaBounce Injected - like a steroid for Shanmao Homework System");
Wrapper();

var IntervalList = [];
function Wrapper() {
    nativeHijack();
    GUIInit();
}
class StateManager {
    constructor() {
        this.states = {};
        this.states["GUI"] = {
            "enabled": false
        };
        this.states["Timer"] = {
                "enabled": false,
                "boost": 1
        };
        this.states["MultiChoiceESP"] = {
            "enabled": false
        };
        this.states["NoAntiCheat"] = {
            "enabled": true
        };
        this.states["IntervalList"] = [];
        if (this.accessor("NoAntiCheat").enabled) {
            for(const element of document.body.attributes) {
                var attrList = ["onselectstart", "onselect", "onbeforecopy", "oncopy", "oncontextmenu", "onkeydown", "onmouseup"];
                for(const name in attrList) {
                    document.body.removeAttribute(attrList[name]);
                }
            }
        }
    }
    mutator(key, value) {
        this.states[key] = value;
    }
    pusher(key, value){
        this.states[key].push(value);
    }
    accessor(key) {
        return this.states[key];
    }
}
var stateManager = new StateManager();

function GUIInit() {
    let opGUI = document.createElement("div");
    opGUI.id = "plasmabounce-gui-op";
    document.documentElement.appendChild(opGUI);

    let GUIContainer = document.createElement("div");
    GUIContainer.id = "plasmabounce-gui";
    GUIContainer.zIndex = 20221018;
    document.documentElement.appendChild(GUIContainer);
    let author = document.createElement("span");
    author.id = "plasmabounce-author";
    author.innerHTML = "Hacked by WinslowEric";
    GUIContainer.appendChild(author);
    let arrayList = document.createElement("div");
    arrayList.id = "plasmabounce-gui-arraylist";
    GUIContainer.appendChild(arrayList);
    let title = document.createElement("span");
    title.innerHTML = "PlasmaBounce";
    title.id = "plasmabounce-gui-title";
    GUIContainer.appendChild(title);
    let subtitle = document.createElement("span");
    subtitle.innerHTML = "x1";
    subtitle.id = "plasmabounce-gui-subtitle";
    GUIContainer.appendChild(subtitle);

    let realGUI = document.createElement("div");
    realGUI.id = "plasmabounce-gui-real";
    document.documentElement.appendChild(realGUI);
    realGUI.innerHTML += '<div class="plasmabounce-arraye"><span class="plasmabounce-arraye-st">Timer</span><input type="text" id="pb-timer-b" placeholder="倍速" value="1"/><label class="mdui-switch"><input type="checkbox" id="pb-timer"/><i class="mdui-switch-icon"></i></label></div>';
    realGUI.innerHTML += '<div class="plasmabounce-arraye"><span class="plasmabounce-arraye-st">MultiChoiceESP</span><label class="mdui-switch"><input type="checkbox" id="pb-mcesp"/><i class="mdui-switch-icon"></i></label></div>';
    realGUI.innerHTML += '<div class="plasmabounce-arraye"><span class="plasmabounce-arraye-st">PositionESP</span><label class="mdui-switch"><input type="checkbox" id="pb-poesp"/><i class="mdui-switch-icon"></i></label></div>';
    realGUI.innerHTML += '<div class="plasmabounce-arraye"><span class="plasmabounce-arraye-st">WordESP</span><label class="mdui-switch"><input type="checkbox" id="pb-wesp"/><i class="mdui-switch-icon"></i></label></div>';
    realGUI.innerHTML += '<div class="plasmabounce-arraye"><span class="plasmabounce-arraye-st">NoAntiCheat</span><label class="mdui-switch"><input type="checkbox" id="pb-nac" checked/><i class="mdui-switch-icon"></i></label></div>';
    realGUI.innerHTML += '<div class="plasmabounce-arraye"><span class="plasmabounce-arraye-st">AnswerAura</span><label class="mdui-switch"><input type="checkbox" id="pb-aura"/><i class="mdui-switch-icon"></i></label></div>';
    realGUI.innerHTML += '<div class="plasmabounce-arraye"><span class="plasmabounce-arraye-st">Disabler</span><label class="mdui-switch"><input type="checkbox" id="pb-disabler"/><i class="mdui-switch-icon"></i></label></div>';
    realGUI.innerHTML += '<div class="plasmabounce-arraye"><span class="plasmabounce-arraye-st">GrammarHint</span><label class="mdui-switch"><input type="checkbox" id="pb-gh"/><i class="mdui-switch-icon"></i></label></div>';
    document.getElementById("pb-timer").addEventListener("click", function () {
        stateManager.mutator("Timer", {
            "enabled": document.getElementById("pb-timer").checked,
            "boost": document.getElementById("pb-timer-b").value
        });
    });
    document.getElementById("pb-mcesp").addEventListener("click", function () {
        stateManager.mutator("MultiChoiceESP", {
            "enabled": document.getElementById("pb-mcesp").checked
        });
    })
    document.getElementById("pb-nac").addEventListener("click", function () {
        stateManager.mutator("NoAntiCheat", {
            "enabled": document.getElementById("pb-nac").checked
        });
        if (stateManager.accessor("NoAntiCheat").enabled) {
            for(const element of document.body.attributes) {
                var attrList = ["onselectstart", "onselect", "onbeforecopy", "oncopy", "oncontextmenu", "onkeydown", "onmouseup"];
                for(const name in attrList) {
                    document.body.removeAttribute(attrList[name]);
                }
            }
        }else{
            document.body.setAttribute("oncontextmenu","return false;");
            document.body.setAttribute("onselect","return false;");
            document.body.setAttribute("onselectstart","return false;");
            document.body.setAttribute("onselect","document.selection.empty();");
            document.body.setAttribute("onbeforecopy","return false;");
            document.body.setAttribute("oncopy","document.selection.empty();");
            document.body.setAttribute("onmouseup","return false;");
            document.body.setAttribute("onkeydown","return event.keyCode!=122");
        }
    })
}

function intervalWrapper(func, delay, nativeSetTimeout) {
    this.timer = 0;
    var curDelay = delay;
    if (stateManager.accessor("Timer").enabled) {
        curDelay = delay * stateManager.accessor("Timer").boost;
    }
    this.realInterval = nativeSetTimeout(function () {
        console.log("intervalWrapper");
        this.timer++;
        func(this, timer);
        intervalWrapper(func, delay, nativeSetTimeout);
    }, curDelay);
}


function createNativeContext(){
    let element = document.createElement("iframe");
    element.href = "https://www.example.com";
    element.style.display = "none";
    document.documentElement.appendChild(element);
    return element.contentWindow;
}

function intervalConsWrapper(){

}



function nativeHijack() {
    let originalFS = fullScreen;
    fullScreen = function () {
        if (stateManager.accessor("NoAntiCheat").enabled) {
            return;
        }else{
            originalFS();
        }
    }
    setInterval(function () {
        if (stateManager.accessor("MultiChoiceESP").enabled) {
            var z = document.getElementById("NEXT_BTN"); 
            var l = document.getElementsByClassName("items");
                let answer = document.getElementsByClassName("answer-sax")[0].childNodes[3].value.split("")[22];
                switch (answer) {
                    case "A": l[0].childNodes[1].childNodes[1].style.backgroundColor = "#b93fb9"; break;
                    case "B": l[1].childNodes[1].childNodes[1].style.backgroundColor = "#b93fb9"; break;
                    case "C": l[2].childNodes[1].childNodes[1].style.backgroundColor = "#b93fb9"; break;
                    case "D": l[3].childNodes[1].childNodes[1].style.backgroundColor = "#b93fb9"; break;
                }
        }
    }, 100);
    var nativeContext = createNativeContext();
    function InvContainer(func, delay){
        this.timer = 0;
        var curDelay = delay;
        if (stateManager.accessor("Timer").enabled) {
            curDelay = delay * stateManager.accessor("Timer").boost;
        }
        stateManager.pusher("IntervalList", nativeContext.setTimeout(() => {
            this.timer++;
            func(this, timer);
            InvContainer(func, delay);
        }, curDelay));
    }
    setInterval = (func, delay) => {
        InvContainer(func, delay);
    }
}

function queryMaster(info) {
    window.postMessage({
        "target": "plasmabounce",
        "data": info
    });
}

document.addEventListener("keyup", function (e) {
    if (e.code == "ShiftRight") {
        let GUIState = stateManager.accessor("GUI");
        GUIState.enabled = !GUIState.enabled;
        stateManager.mutator("GUI", GUIState);
        if (GUIState.enabled) {
            document.getElementById("plasmabounce-gui-op").style.display = "block";
            document.getElementById("plasmabounce-gui-real").style.display = "flex";
        } else {
            document.getElementById("plasmabounce-gui-op").style.display = "none";
            document.getElementById("plasmabounce-gui-real").style.display = "none";
        }
    }
})

