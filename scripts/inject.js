console.log("PlasmaBounce Injected");
Wrapper();

function Wrapper(){
    nativeHijack();
    GUIInit()
    queryMaster("TesT");
}

function GUIInit(){
    let GUIContainer = document.createElement("div");
    GUIContainer.id = "plasmabounce-gui";
    GUIContainer.zIndex = 128;
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
}

function nativeHijack(){
    let nativeSetInterval = window.setInterval;
    let nativeSetTimeout = window.setTimeout;
    window.setInterval = function(func, delay){
        let originalFunc = func;
        func = function(){
            console.log("called");
            originalFunc();
        }
        //nativeSetInterval(func, delay);
    }
}

function queryMaster(info){
    window.postMessage({
        "target": "plasmabounce",
        "data": info
    });
}