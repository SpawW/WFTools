var debugConfig = {
  "xsr": false, "xsrURL": true, "functionName": true
  , "clearConsole": true  , "scriptLoad": false, "exif": false
  , "edit": false, "events": false
};

var localDBTables = ['statistics','history','candidates','customExtra','editCache'];

var FastOPRData = (typeof FastOPRData == 'undefined' ? {} : FastOPRData);
var inSync = [];
var cacheKey = "pqp";
//let player = document.querySelector('.navbar-form > div:nth-child(2) > span:nth-child(2)').innerText;
//var inputWhatIs = w.document.querySelector("#WhatIsItController > div > div > input");
var w = typeof unsafeWindow == "undefined" ? window : unsafeWindow;
var gmMS = (typeof gmMS == 'undefined' ? {} : gmMS);
document.gmMS = gmMS;
gmMS.ScriptName = 'WFTools';
gmMS.baseURL = "http://www.everyz.org/FasT/";
gmMS.angularReady = false;
gmMS.debugInfo = "";
//gmMS.tickerInterval = 2000;
gmMS.options = {'autoNext': true, 'sleepAutoNext': 523,
                'tickerInterval': 5000, 'autoBackHome': 8 ,
                'autoSubmit': true, 'voteTimeout': 10, 'alertVote': false
               };


/* ------------------- Generic functions -------------------------------- */

gmMS.randomStar = function (vote) {
  let random = Math.random();
  vote = parseInt (vote);
  if (vote > 0) {
    vote = vote + parseInt( (vote == 5 ? (random < 0.4 ? -1 : 0) : (random < 0.4 ? -1 : (random < 0.6 ? 0 : 1))));
    return (vote < 1 ? 1 : vote).toString();
  }
  return vote;
};

gmMS.forceEvent = function (element, event) {
    gmMS.toConsole(`Force event ${event} on element ${element}`,debugInfo.events);
    if ("createEvent" in w.document) {
        gmMS.toConsole("Force Event 1",true);
        let evt = w.document.createEvent("HTMLEvents");
        evt.initEvent(event, false, true);
        element.dispatchEvent(evt);
    }
    else {
        element.fireEvent("onchange");
    }
};

gmMS.notifyMe = function (title,msg, icon) {
  msg = `---=trustedOPR=--- [${gmMS.player}]\n${msg}`;
  icon = icon || 'trusted.png';
  icon = 'https://www.everyz.org/FasT/images/'+icon;
  if (!("Notification" in window)) {
    alert("This browser does not support system notifications");
  } else if (Notification.permission === "granted") {
    var notification = new Notification(title, {
      icon: icon,
      body: msg
    });
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        var notification = new Notification(title, {
          icon: icon,
          body: msg
        });
      }
    });
  }
};

gmMS.hideObject = function (ele) {
    ele.classList.add('ng-hide');
};

gmMS.button = function (btnId, caption, btnClass, onClick, onDblClick, whatIs) {
    //console.log(`<button class="btn ${btnClass}" id="${btnId}" onclick="${onClick}" onclick="${onClick}" ondblclick="${onDblClick}">${caption}</button>`);
    let tmp = $(`<button class="btn ${btnClass}" id="${btnId}" onclick="${onClick}" whatis="${whatIs}" ondblclick="${onDblClick}">${caption}</button>`);
    return tmp;
};

gmMS.iconButton = function (btnId, title, btnClass, onClick, onDblClick, whatIs) {
    let tmp = $(`<button onclick="${onClick}" id="${btnId}" class="btn btn-default ${btnClass}" whatis="${whatIs}"  data-tooltip="${title}" title="${title}">&nbsp;</button>`);
    return tmp;
};

gmMS.copy = function (ele) {
    let messages = {
        'question': `I need help. Please confirm if the portal candidate **${w.subController.pageData.title}** really exists?`,
        'askAprove': `Guys , I know the area and I am confirming that the portal candidate **${w.subController.pageData.title}** EXISTS and request to you **VOTE 5 stars on it** ok?`,
        'askReject': `Guys, the portal candidate **${w.subController.pageData.title}** is **INVALID** and request to you REFUSE with 1 star`
    };
    // standard way of copying
    let textArea = document.createElement('textarea');
    textArea.setAttribute('style', 'width:1px;border:0;opacity:0;');
    document.body.appendChild(textArea);
    textArea.value = messages[ele.id]
        + `\nURL: ${w.subController.pageData.imageUrl}`
        + `\nIntel: https://www.ingress.com/intel?ll=${w.ansController.lat},${w.ansController.lng}&z=17`
        + `\nGoogle Maps: https://www.google.com/maps?q=@${w.ansController.lat},${w.ansController.lng}`
        + ``
    ;
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Help text copied! Paste where you need it.');
};

gmMS.toConsole = function (obj, show) {
  show = ((typeof show !== 'undefined') ? show : false);
  if (show == true) {
    var out = '';
    if (obj !== null && typeof obj === 'object') {
      for (var i in obj) {
        out += i + ": " + obj[i] + "\n";
      }
    } else {
      out = obj;
    }
    window.console.log(gmMS.ScriptName + " - " + out);
  }
};

gmMS.loadCSS = function (cssId, url) {
    gmMS.toConsole('getAngular',debugConfig.functionName);
  console.log('aqui');
    gmMS.toConsole(`Loading ${cssId} from ${url}`,debugConfig.scriptLoad);
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        link.media = 'all';
        head.appendChild(link);
    }
};

gmMS.debugVar = function (name, value) {
  var vAngDebug = true;
  value = (typeof value == "undefined" ? "undefined" : value);
  gmMS.toConsole(name + " - " + value, vAngDebug);
};
