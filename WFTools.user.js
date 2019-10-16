// ==UserScript==
// @id           WFTools@everyz.com
// @name         WFTools
// @author       rRuleZ | rRuleZ@everyz.org
// @version      0.0.2.20191014.004
// @description  WFTools: One Script for aprove All VALID portals
// @include      https://wayfarer.nianticlabs.com/*
// @match        https://wayfarer.nianticlabs.com/*
// @include      https://wayfarer.nianticlabs.com/captcha
// @match        https://wayfarer.nianticlabs.com/captcha/*
// @ include      https://wayfarer.nianticlabs.com
// @ match        https://wayfarer.nianticlabs.com/*
// @downloadURL     https://github.com/SpawW/WFTools/raw/master/WFTools.user.js
// @updateURL       https://github.com/SpawW/WFTools/raw/master/WFTools.user.js
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceURL
// @grant        unsafeWindow
// @require      https://cdn.bootcss.com/zepto/1.2.0/zepto.min.js
// @require      https://cdn.bootcss.com/exif-js/2.3.0/exif.min.js
// @require      https://code.jquery.com/jquery-1.11.1.min.js
// @require      https://raw.githubusercontent.com/SpawW/WFTools/master/functions2.js?ver=21
// ==/UserScript==

/*
 MIT License

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */


/* ------------------- Local Storage         -------------------------------- */



/* ------------------- Integration Functions -------------------------------- */


gmMS.selectElements = function () {
    gmMS.moveObjects = {};

    if (window.location.href.indexOf ("https://wayfarer.nianticlabs.com/captcha") != 0) {
        gmMS.moveObjects['profile'] = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.header.ng-scope div.inner-container');
        gmMS.moveObjects['logo'] = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.header.ng-scope div.inner-container');
        gmMS.moveObjects['topBar'] = gmMS.moveObjects['logo'].parentElement;
        gmMS.moveObjects['leftBar'] = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.main-container div.sidebar.ng-scope.hide-mobile');
        gmMS.moveObjects.errorBox = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-pristine.ng-valid.ng-submitted div div.error-message.error-message--submission');
    };

    if (window.location.href.indexOf ("https://wayfarer.nianticlabs.com/review") == 0) {
            gmMS.moveObjects['duplicateList'] = document.getElementById('map-filmstrip');
            gmMS.moveObjects['duplicateMap'] = document.getElementById('map');
            gmMS.moveObjects['votePhoto'] = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-pristine.ng-valid div div.card-area div.card-row-container div#photo-card.card.card--expand div.card__footer div.five-stars');
            gmMS.moveObjects['voteDescription'] = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-pristine.ng-valid div div.card-area div.card-row-container div#descriptionDiv.card.card--expand div.card__footer div.five-stars');
            gmMS.moveObjects['voteHistCult'] = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-pristine.ng-valid div div.card-area div.card-row-container div#three-card-container.three-card-parent div#histcult-card.card.small-card div.card__footer div.five-stars');
            gmMS.moveObjects['voteUniqueness'] = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-pristine.ng-valid div div.card-area div.card-row-container div#three-card-container.three-card-parent div#uniqueness-card.card.small-card.middle-card div.card__footer div.five-stars');
            gmMS.moveObjects['voteSafety'] = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-pristine.ng-valid div div.card-area div.card-row-container div#three-card-container.three-card-parent div#safety-card.card.small-card div.card__footer div.five-stars');
            gmMS.moveObjects['voteLocation'] = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-pristine.ng-valid div div.card-area div.card-row-container div#map-card.card.card--double-width div.card__footer div.five-stars');
            gmMS.moveObjects.descriptionVote = document.getElementsByClassName('card-header__description');
            gmMS.moveObjects.stars = document.getElementsByClassName('five-stars');
            gmMS.moveObjects.titles = document.getElementsByClassName('card-header__title');
            gmMS.moveObjects.cardRow = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-pristine.ng-valid div div.card-area div.card-row-container');
            gmMS.moveObjects.divSubmit = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-pristine.ng-valid div div.answer-header div.answer-btn-container.top-btns');
            gmMS.moveObjects.divReview = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-pristine.ng-valid div div.answer-header');
            gmMS.moveObjects.divPhoto = document.getElementById('photo-card');
            gmMS.moveObjects.divStreetView = document.getElementById('map-card');
            gmMS.moveObjects.divAdditionalComments = document.getElementById('additional-comments-card');
            gmMS.moveObjects.divWhatIs = document.getElementById('what-is-it-card');
            gmMS.moveObjects.divDescription = document.getElementById('descriptionDiv');
            gmMS.moveObjects.eleTitle = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-pristine.ng-valid div div.card-area div.card-row-container div#descriptionDiv.card.card--expand div.card__body div.flexbox-grow.supporting-central-field a');
            gmMS.moveObjects.eleDescription = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-pristine.ng-valid div div.card-area div.card-row-container div#descriptionDiv.card.card--expand div.card__body div.flexbox-grow.supporting-central-field h4.title-description.ng-binding');
            gmMS.moveObjects.nextReview = document.querySelector('html.ng-scope.hydrated body.is-authenticated.modal-open div.modal.fade.ng-isolate-scope.in div.modal-dialog.modal-med');
    };

    gmMS.changeScreen();
};

gmMS.changeScreen = function () {
    if (window.location.href.indexOf ("https://wayfarer.nianticlabs.com/captcha") != 0) {
        // Hide original left bar
        gmMS.moveObjects['leftBar'].classList.add('ng-hide');
        // Add Options to topBar
        let topBarOptions = [];
        topBarOptions['/logout'] = ['power-off','Logout'];
        topBarOptions['/help'] = ['question-circle','Help'];
        topBarOptions['/settings'] = ['cog','settings'];
        topBarOptions['/nominations'] = ['camera-retro','Nominations'];
        topBarOptions['/review'] = ['picture-o','Review'];
        topBarOptions['/'] = ['home','Showcase'];
        for (var key in topBarOptions) {
            gmMS.moveObjects['topBar'].insertAdjacentHTML("afterbegin", `<button onclick="window.location='${key}'" id="twMenu${topBarOptions[key][0]}" class="btn btn-outline-dark btn-lg fa fa-${topBarOptions[key][0]} black"  data-tooltip="${topBarOptions[key][1]}" title="${topBarOptions[key][1]}">&nbsp;</button>`);
        }
        gmMS.moveObjects['topBar'].appendChild(gmMS.moveObjects['profile']);
        switch (window.location.href) {
            case "https://wayfarer.nianticlabs.com/review":
            case "https://wayfarer.nianticlabs.com/review#":
                gmMS.changeScreenVote();
                break;
        }
    }
}

gmMS.externalSites = function (ele) {
    var coordenates = `${w.ansController.lat},${w.ansController.lng}`;
    var urls = {
        intel: `https://www.ingress.com/intel?ll=${coordenates}&z=22&pls=${coordenates},${coordenates}`,
        //'https://www.ingress.com/intel?ll=' + coordenates + '&z=22'+ coordenates + "&pls="+coordenates+","+coordenates ,
        osm: `https://www.openstreetmap.org/?mlat=${w.ansController.lat}&mlon=${w.ansController.lng}&zoom=16` ,
        grid: `https://s2.sidewalklabs.com/regioncoverer/?center=${coordenates}&zoom=19`,
        bing: `https://bing.com/maps/default.aspx?cp=${w.ansController.lat}~${w.ansController.lng}&lvl=16`,
        google: `https://www.google.com/maps?q=loc:${coordenates}&zoom=23&basemap=satellite`
    };
    window.open(urls[ele.id], '_blank');
}

gmMS.standardButtons = function () {
    gmMS.toConsole('standardButtons',debugConfig.functionName);
    $('#tw-buttons').append($('<table style="height: 10px; width: 100%"><tr><td id="tw-buttons-function" style="vertical-align: top;"></td></tr></table>'));
    $('#tw-buttons').append($('<table style="height: 200px; width: 100%;"><tr><td id="tw-buttons-vote" style="vertical-align: bottom;"></td></tr></table>'));
    let btnList = [
        {'id': 'vote5', 'caption': '5', 'class': 'btn-success', 'onclick': 'gmMS.setVote([5,5,5,5,5,5]);','whatis': ''}
        ,{'id': 'vote4', 'caption': '4', 'class': 'btn-primary', 'onclick': 'gmMS.setVote([4,4,4,4,4,4]);','whatis': ''}
        ,{'id': 'vote3', 'caption': '3', 'class': 'btn-default', 'onclick': 'gmMS.setVote([3,4,3,3,2,3]);','whatis': ''}
        ,{'id': 'vote3.1', 'caption': '3.1', 'class': 'btn-outline-default', 'onclick': 'gmMS.setVote([3,4,3,3,2,1]);','whatis': ''}
        ,{'id': 'vote2', 'caption': '2', 'class': 'btn-warning', 'onclick': 'gmMS.setVote([2,2,1,1,1,2]);','whatis': ''}
        ,{'id': 'vote2.5', 'caption': '2.5', 'class': 'btn-outline-warning', 'onclick': 'gmMS.setVote([2,2,1,1,1,5]);','whatis': ''}
    ];

    for(let i = 0; i < btnList.length; i++){
        //console.log(gmMS.button(btnList[i].id,btnList[i].caption,btnList[i].class,btnList[i].onclick,'',btnList[i].whatis));
        $('#tw-buttons-vote').append(gmMS.button(btnList[i].id,btnList[i].caption,btnList[i].class,btnList[i].onclick,'',btnList[i].whatis));
    }
    let btnListIcons = [
        {'id': '<br>'}
        , {'id': 'church', 'title': 'Church', 'class': 'btn-success fa fa-podcast', 'onclick': 'gmMS.setVote([5,5,5,5,5,5],this);','whatis': 'church'}
        , {'id': 'church-bad', 'title': 'Church low', 'class': 'btn-warning fa fa-podcast', 'onclick': 'gmMS.setVote([3,5,2,2,4,5],this);','whatis': 'church'}
        , {'id': 'shopping', 'title': 'Shopping', 'class': 'btn-success fa fa-shopping-cart', 'onclick': 'gmMS.setVote([5,5,5,5,5,5],this);','whatis': 'shopping'}
        , {'id': 'playground', 'title': 'Playground / Sport machines', 'class': 'btn-success fa fa-youtube-play', 'onclick': 'gmMS.setVote([5,5,5,5,5,5],this);','whatis': 'playground'}
        , {'id': 'sport', 'title': 'Sport', 'class': 'btn-success fa fa-trophy', 'onclick': 'gmMS.setVote([5,5,5,5,5,5],this);','whatis': 'sports'}
        , {'id': 'graffitti', 'title': 'Graffiti', 'class': 'btn-success fa fa-magic', 'onclick': 'gmMS.setVote([5,5,5,5,5,5],this);','whatis': 'graffitti'}

    ];
    for(let i = 0; i < btnListIcons.length; i++){
        if (btnListIcons[i].id == '<br>') {
            $('#tw-buttons-vote').append($('<br>'));
        } else {
            $('#tw-buttons-vote').append(gmMS.iconButton(btnListIcons[i].id,btnListIcons[i].title,btnListIcons[i].class,btnListIcons[i].onclick,'',btnListIcons[i].whatis));
        }

    }
    $('#tw-buttons-vote').append(gmMS.button('debug','Debug','','gmMS.debugFormData();'));

    let shortcutList = [
        {'id': 'intel', 'title': 'Show in Ingress/Intel', 'class': 'fa fa-crosshairs', 'onclick': 'gmMS.externalSites(this);'},
        {'id': 'google', 'title': 'Google Maps', 'class': 'fa fa-google', 'onclick': 'gmMS.externalSites(this);'},
        {'id': 'bing', 'title': 'Show in Bing', 'class': 'fa fa-microchip', 'onclick': 'gmMS.externalSites(this);'},
        {'id': 'osm', 'title': 'Show in OSM', 'class': 'fa fa-map', 'onclick': 'gmMS.externalSites(this);'},
        {'id': '<br>'},
        {'id': 'question', 'title': 'Ask help', 'class': 'fa fa-question-circle-o blue', 'onclick': 'gmMS.copy(this);'},
        {'id': 'askAprove', 'title': 'Ask to approve', 'class': 'fa fa-calendar-check-o green', 'onclick': 'gmMS.copy(this);'},
        {'id': 'askReject', 'title': 'Ask to reject', 'class': 'fa fa-times red', 'onclick': 'gmMS.copy(this);'}
//        {'id': 'duvida', gmMS.image('ask-help'), 'gmMS.askHelp()', 'Ask Help')
//      , gmMS.button('pedidook', gmMS.image('ask-approve'), 'gmMS.askApprove()', 'Ask to approve')
//      , gmMS.button('rejected', gmMS.image('ask-reject'), 'gmMS.askReject()', 'Ask to reject')

    ];
    for(let i = 0; i < shortcutList.length; i++){
        if (shortcutList[i].id == '<br>') {
            $('#tw-buttons-function').append($('<br>'));
        } else {
            $('#tw-buttons-function').append(gmMS.iconButton(shortcutList[i].id,shortcutList[i].title,shortcutList[i].class,shortcutList[i].onclick));
        }
    }
}

gmMS.changeScreenVote = function () {
    gmMS.toConsole('changeScreenVote',debugConfig.functionName);
    gmMS.moveObjects.duplicateList.parentElement.appendChild(gmMS.moveObjects.duplicateMap);
    try {
        gmMS.moveObjects.cardRow.insertAdjacentHTML('afterbegin','<div id="tw-vote-card" class="card card--expand">'
                                                    +'<table width="100%" height="100%"><tr><td id="tw-stars" style="width: 150px;"></td><td id="tw-buttons"></td></tr>'
                                                    +'<tr><td id="tw-info" style="text-align: right; " colspan="2">&nbsp;</td></tr>'
                                                    +'<tr><td id="tw-submit" colspan="2"></td></tr>'
                                                    +'</table></div>');
        gmMS.voteCard = document.getElementById('tw-stars');
        gmMS.twCard = document.getElementById('tw-vote-card');
        gmMS.twSubmit = document.getElementById('tw-submit');
        gmMS.twButtons = document.getElementById('tw-buttons');
        gmMS.standardButtons();

        for (let i = 0; i < gmMS.moveObjects.descriptionVote.length; i++) {
            gmMS.hideObject(gmMS.moveObjects.descriptionVote[i]);
        }
        // Move votes
        let usefullTitles = [0, 1, 4, 5, 6, 7];
        for (let i = 0; i < gmMS.moveObjects.stars.length; i++) {
//            console.log(['titles',gmMS.moveObjects.titles.length,gmMS.moveObjects.titles[usefullTitles[i]].innerText]);
            gmMS.voteCard.appendChild(gmMS.moveObjects.titles[usefullTitles[i]]);
            gmMS.voteCard.appendChild(gmMS.moveObjects.stars[i]);
        }
        for (let i = 0; i < gmMS.moveObjects.titles.length; i++) {
            gmMS.moveObjects.titles[i].classList.add('h6');
        }
        document.getElementById('three-card-container').classList.add('ng-hide');
        // Move buttons
        gmMS.twSubmit.append(' ');
        gmMS.twSubmit.appendChild(gmMS.moveObjects.divSubmit);
        // Hide review div
        gmMS.hideObject(gmMS.moveObjects.divReview);
        // Change streetview position
        //        gmMS.moveObjects.cardRow.appendChild(gmMS.moveObjects.divStreetView);
        // Join whatis and additional comments
        gmMS.moveObjects.divWhatIs.children[0].appendChild (gmMS.moveObjects.divAdditionalComments.children[0].children[0]);
        gmMS.moveObjects.divWhatIs.children[0].appendChild (gmMS.moveObjects.divAdditionalComments.children[1]);
        gmMS.hideObject(gmMS.moveObjects.divAdditionalComments);
        // Join title + description with portal picture
        gmMS.moveObjects.divPhoto.appendChild(gmMS.moveObjects.eleTitle);
        gmMS.moveObjects.divPhoto.appendChild(gmMS.moveObjects.eleDescription);
        gmMS.moveObjects.eleTitle,gmMS.moveObjects.eleTitle.children[0].classList.add('h4');
        gmMS.moveObjects.eleTitle,gmMS.moveObjects.eleTitle.children[0].classList.add('font-weight-bold');
        gmMS.moveObjects.eleTitle,gmMS.moveObjects.eleDescription.classList.add('h5');
        gmMS.hideObject(gmMS.moveObjects.divDescription);
        //gmMS.moveObjects.eleTitle.outerHTML = gmMS.moveObjects.eleTitle.outerHTML.replace('h1','h5');
        //gmMS.moveObjects.eleDescription.outerHTML = "<h5>" + gmMS.moveObjects.eleDescription.innerHTML+ "</h4>";
    }
    catch(err) {
        gmMS.toConsole(err.message,true);
    }
};

gmMS.setVote = function (vote, ele) {
    gmMS.toConsole('setVote',debugConfig.functionName);

    //quality, description, cultural, uniqueness, safety,  location, photo: "3"
    gmMS.toConsole(vote,debugConfig.events);
    //w.ansController.formData.cultural = vote[0];
    w.ansController.formData.quality     = vote[0].toString();
    w.ansController.formData.description = gmMS.randomStar(vote[1].toString());
    w.ansController.formData.cultural    = gmMS.randomStar(vote[2].toString());
    w.ansController.formData.uniqueness  = vote[3].toString();
    w.ansController.formData.safety      = gmMS.randomStar(vote[4].toString());
    w.ansController.formData.location    = vote[5].toString();
    if (ele !== undefined) {
        console.log(ele);
        gmMS.moveObjects.whatIsInput.value = ele.getAttribute('whatis').replace("+", "").replace("-", "").replace("_", " ");
        gmMS.moveObjects.whatIsInput.focus();
        gmMS.forceEvent(gmMS.moveObjects.whatIsInput,"change");
        var firstWhatIs = document.querySelector('#WhatIsItController.ng-scope div.card__body div.categories-display div.categories-display-container ul.ng-scope li.whatCategory div.categories-display-name.ng-binding');
        gmMS.forceEvent(firstWhatIs,"click");

        //console.log(firstWhatIs.childNodes);
        //w.whatCtrl = w.$scope(firstWhatIs).whatCtrl;
        //w.whatCtrl.setWhatAutocompleteNode(firstWhatIs.childNodes[0]);
        //html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-valid.ng-dirty.ng-valid-parse.ng-submitted div div.card-area div.card-row-container div#what-is-it-card.card.card--expand.what-is-it-card div#WhatIsItController.ng-scope div.card__body div.categories-display div.categories-display-container ul.ng-scope li.whatCategory div.categories-display-name.ng-binding
    }
    w.ansController.readyToSubmit();
};

gmMS.limitToSubmit = function () {
    let date = new Date(w.subController.countdownDate - (new Date().getTime())-60000);
    //let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    return minutes.substr(-2) + ':' + seconds.substr(-2);
}

gmMS.setMapOptions = function (map) {
    gmMS.toConsole('setMapOptions'+ (map === undefined ? '' : ` - ${map}`),debugConfig.functionName);
    const mapOptions = {center:new google.maps.LatLng(w.ansController.lat,w.ansController.lng), scrollwheel: true, gestureHandling: "greedy", zoom:20,mapTypeId: google.maps.MapTypeId.HYBRID};
    if (map === undefined || map == 'duplicated') {
        w.subController.map.setOptions(cloneInto(mapOptions, w));
    }
    if (map === undefined || map == 'streetview') {
        w.subController.map2.setOptions(cloneInto(mapOptions, w));
    }
}

gmMS.submitPreset = function () {
    if (w.ansController.readyToSubmit()) {
        w.ansController.submitForm();
    }
};

gmMS.setLimitInfo = function () {
    //console.log([gmMS.limitToSubmit(),$('#tw-info')]);
    gmMS.tickerLimitInfo = setInterval(function() {
        let limit = gmMS.limitToSubmit();
        let minutes = parseInt(limit[0] + limit[1]);
        let color = (minutes < 10 ? 'text-danger' : (minutes >= 20 ? 'text-success' : 'purple-text'));
        $('#tw-info').html (`<span class="${color}">Limit to vote: ${limit}</span>${gmMS.debugInfo}`);
        if (minutes <= gmMS.options.voteTimeout && gmMS.options.autoSubmit) {
            if (!gmMS.options.alertVote &&w.ansController.readyToSubmit()) {
                gmMS.options.alertVote = true;
                gmMS.notifyMe("Avoid Timeout","We will automatically submit YOUR defined vote in 10 seconds!");
                setTimeout(function () {
                    gmMS.submitPreset();
                }, 10000);
            }
        }
        if (minutes == 0 || minutes == gmMS.options.autoBackHome) {
            gmMS.notifyMe("Avoid Timeout","Timeout! AutoBack to home in 10 seconds!");
            console.log('Auto back home');
            setTimeout(function () {
               window.location = '/';
            }, 10000);
        }
        //console.log([minutes,minutes == 0,minutes == gmMS.options.autoBackHome,gmMS.options.autoBackHome]);
    }, gmMS.options.tickerInterval);
}

gmMS.autoNext = function () {
    if (gmMS.options) {
        setTimeout(function () {
            console.log('AutoNext!');
            window.location.reload(true);
        }, gmMS.options.sleepAutoNext);
    }
};

gmMS.openFirstCheck = function () {
    try {
        const e = w.document.querySelector("#map-filmstrip > ul > li:nth-child(1) > img");
        if (e !== null) {
            setTimeout(function () {
                e.click();
            }, 500);
        }
        gmMS.moveObjects.whatIsInput = (typeof gmMS.moveObjects.whatIsInput == "undefined" ? $("#category-input")[0] : gmMS.moveObjects.whatIsInput);
        setTimeout(function () {
            gmMS.moveObjects.whatIsInput.focus();
            gmMS.moveObjects.whatIsInput.click();
        }, 500);
    } catch (err) {
    }
};

gmMS.getAngular = function (retry) {
    gmMS.toConsole('getAngular',debugConfig.functionName);
    if (!gmMS.angularReady) {
        try {
            gmMS.toConsole('Get angularJS data', true);
            var el = w.document.querySelector("[ng-app='portalApp']");
            w.$app = w.angular.element(el);
            w.$injector = w.$app.injector();
            w.$rootScope = w.$app.scope();
            w.$scope = function (element) {
                return w.angular.element(element).scope();
            };
            var descriptionDiv = (typeof descriptionDiv == "undefined" ? w.document.getElementById("descriptionDiv") : descriptionDiv);
            w.ansController = w.$scope(descriptionDiv).answerCtrl;
            w.subController = w.$scope(descriptionDiv).subCtrl;
            //console.log([w.ansController,w.subController]);
            if (w.subController.map !== undefined) {
                gmMS.openFirstCheck();
                // Hooks
                w.subController.twCreateStreetView = w.subController.createStreetView;
                w.subController.createStreetView = function () {
                    //console.log('Create StreetView');
                    w.subController.twCreateStreetView();
                    setTimeout(function () {
                        gmMS.setMapOptions('streetView');
                    }, 500);
                }
                w.subController.twresetMap = w.subController.resetMap;
                w.subController.resetMap = function () {
                    //console.log('Reset duplicated map');
                    w.subController.twresetMap();
                    setTimeout(function () {
                        gmMS.setMapOptions('duplicated');
                    }, 500);
                }
                // Hook for autoNext
                w.ansController.twOpenSubmissionCompleteModal = w.ansController.openSubmissionCompleteModal;
                w.ansController.openSubmissionCompleteModal = function () {
                    console.log('Next Portal Dialog');
                    w.ansController.twOpenSubmissionCompleteModal();
                    gmMS.autoNext();
                }
                // Hook for duplicated
                w.twMarkDuplicatePressed = w.markDuplicatePressed;
                w.markDuplicatePressed = function (guid) {
                    console.log(`Duplicated Dialog - ${guid}`);
                    setTimeout(function () {
                        let btnRefuse = document.querySelector('html.ng-scope.hydrated body.is-authenticated.modal-open div.modal.fade.ng-isolate-scope.in div.modal-dialog.modal-med div.modal-content div.ng-scope div.modal-body div.text-center button.button-primary');
                        w.$scope(btnRefuse).answerCtrl2.openSubmissionCompleteModal = w.ansController.openSubmissionCompleteModal;
                        console.log(w.$scope(btnRefuse));
                    }, 500);
                    w.twMarkDuplicatePressed(guid);
                }
                // Hook for one Star
                w.ansController.twShowLowQualityModal = w.ansController.showLowQualityModal;
                w.ansController.showLowQualityModal = function () {
                    console.log(`One Star Dialog`);
                    setTimeout(function () {
                        //let btnRefuse = document.querySelector('html.ng-scope.hydrated body.is-authenticated.modal-open div.modal.fade.ng-isolate-scope.in div.modal-dialog.modal-custom1 div.modal-content div#low-quality-modal.ng-scope div.modal-body.modal-body-accordion div.button-container button.button-primary');
                        //w.$scope(btnRefuse).answerCtrl2.openSubmissionCompleteModal = w.ansController.openSubmissionCompleteModal;
                        $('#sub-group-2').click();
                        setTimeout(function () {$('#MISMATCH').click();},200);
                        //gmMS.forceEvent(mismatchOption,'click');
                        //console.log(w.$scope(btnRefuse));
                    }, 500);
                    w.ansController.twShowLowQualityModal();
                }
                // Hook for detect submission
                w.ansController.twSubmitForm = w.ansController.submitForm;
                w.ansController.submitForm = function (compat) {
                    console.log(`Form Submission`);
                    w.ansController.twSubmitForm(compat);
                }
                //console.log([w.ansController,w.subController]);
                gmMS.setMapOptions();
                gmMS.setLimitInfo();
                gmMS.angularReady = true;
                gmMS.toConsole('getAngular - Ready',debugConfig.functionName);
                // Start observing the target node for configured mutations
//                var targetNode = document.querySelector('html.ng-scope.hydrated body.is-authenticated.modal-open div.modal.fade.ng-isolate-scope.in div.modal-dialog.modal-med');
//                console.log(targetNode);
                //gmMS.observer.observe(targetNode[0], config);

            } else {
                gmMS.toConsole("Angular not ready", true);
                setTimeout(function () {
                    gmMS.getAngular(true);
                }, 1000);
            }
        } catch (err) {
            gmMS.toConsole("Fail to get angular data [" + err + "]", true);
            setTimeout(function () {
                gmMS.getAngular(true);
            }, 1000);
            gmMS.debugVar("w", w);
            gmMS.debugVar("el", el);
            gmMS.debugVar("descriptionDiv", descriptionDiv);
            gmMS.debugVar("ansController", w.ansController);
            gmMS.debugVar("subController", w.subController);
            gmMS.debugVar("subController.pageData", w.subController.pageData);
        }
    }
};

gmMS.debugFormData = function () {
    console.log(['time 1',document.querySelector('#WhatIsItController.ng-scope div.card__body div.categories-display.ng-hide div.categories-display-container')]);
    //html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-valid.ng-submitted.ng-dirty.ng-valid-parse div div.card-area div.card-row-container div#what-is-it-card.card.card--expand.what-is-it-card div
//    console.log([w.angular,angular]);
  //  console.log(['ansController',w.ansController]);
    //console.log(['subController',w.subController]);
    //gmMS.setMapOptions();
    //console.log(['modalWindow',document.querySelector('html.ng-scope.hydrated body.is-authenticated.modal-open div.modal.fade.ng-isolate-scope.in div.modal-dialog.modal-med')]);
};

gmMS.shortCuts = function () {
    document.onkeyup = function(e) {
        if (e.ctrlKey) {
            switch (e.which) {
                case 50:
                    $("#vote2")[0].onclick();
                    break;
                case 51:
                    $("#vote3")[0].onclick();
                    break;
                case 52:
                    $("#vote4")[0].onclick();
                    break;
                case 53:
                    $("#vote5")[0].onclick();
                    break;
                case 13:
                    if (w.ansController.readyToSubmit()) {
                        w.ansController.submitForm();
                    }
                    break;
            }
            //console.log(`Key number ${e.which}`);
        }
    };
};

gmMS.init = function () {
    gmMS.toConsole('Start script...');
    gmMS.loadCSS('fontawesome','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
    gmMS.loadCSS(gmMS.ScriptName,`${gmMS.baseURL}${gmMS.ScriptName}.css?a=${GM_info.script.version}`);
    gmMS.selectElements();
};


(function () {
    if (debugConfig.clearConsole) {
        console.clear();
    }
    gmMS.shortCuts();
    gmMS.portalPhoto = document.getElementsByClassName('clickable flexbox-grow')[0].children[0];
    //console.log(gmMS.portalPhoto);
    function loaded() {
        gmMS.getAngular(true);
    }

    if (gmMS.portalPhoto.complete) {
        loaded()
    } else {
        gmMS.portalPhoto.addEventListener('load', loaded)
        gmMS.portalPhoto.addEventListener('error', function() {
            alert('error')
        })
    }
    var arkCookie = document.getElementsByTagName('ark-cookiebar');
    //console.log(arkCookie);
    if (arkCookie !== undefined) {
        gmMS.hideObject(arkCookie[0]);
    }
    gmMS.init ();
})();
/*



 */
