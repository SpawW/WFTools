// ==UserScript==
// @id           WFTools@everyz.com
// @name         WFTools
// @author       rRuleZ | rRuleZ@everyz.org
// @version      0.0.4.20191123.010
// @description  WFTools: One Script for aprove All VALID portals
// @include      https://wayfarer.nianticlabs.com/*
// @match        https://wayfarer.nianticlabs.com/*
// @include      https://wayfarer.nianticlabs.com/captcha
// @match        https://wayfarer.nianticlabs.com/captcha/*
// @downloadURL     https://github.com/SpawW/WFTools/raw/master/WFTools.user.js
// @updateURL       https://github.com/SpawW/WFTools/raw/master/WFTools.user.js
// @supportURL      https://github.com/SpawW/WFTools/issues
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceURL
// @grant        unsafeWindow
// @require      https://cdn.bootcss.com/zepto/1.2.0/zepto.min.js
// @require      https://cdn.bootcss.com/exif-js/2.3.0/exif.min.js
// @require      https://code.jquery.com/jquery-1.12.4.js
// @require      https://code.jquery.com/ui/1.12.1/jquery-ui.js
// @require      https://raw.githubusercontent.com/SpawW/WFTools/master/functions3.js?ver=71
// @require      https://raw.githubusercontent.com/SpawW/WFTools/master/database3.js?ver=2
// @require      https://raw.githubusercontent.com/SpawW/WFTools/master/interface3.js?ver=2
// ==/UserScript==
//https://code.jquery.com/jquery-1.11.1.min.js

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
/* ------------------- Only Cosmetic to avoid warnings ----------------------- */
var gmMS = (typeof gmMS == 'undefined' ? {} : gmMS);
gmMS.FastOPRData = (typeof gmMS.FastOPRData == 'undefined' ? {} : gmMS.FastOPRData);
var debugConfig = (typeof debugConfig == 'undefined' ? {} : debugConfig);

/* ------------------- Generic functions     -------------------------------- */
// Imported to functions.js

/* ------------------- Local Storage         -------------------------------- */
// Imported to database.js

/* ------------------- Interface Functions -------------------------------- */
// Imported to interface.js

gmMS.selectEditElements = function () {
    gmMS.toConsole('selectEditElements',debugConfig.functionName);
    gmMS.moveObjects.editDivSubmit = document.querySelector('div#AnswersController.ng-scope form.ng-pristine.ng-valid div div.answer-btn-container.bottom-btns');
    gmMS.moveObjects.editDivMapSelected = document.querySelector('div#AnswersController.ng-scope form.ng-valid.ng-dirty div div.card-area div.edit-container div.known-information-card-container div.known-information-card.card.card--information.card--expand div.card__body div.known-information-group div.known-information.known-information__map');
    gmMS.moveObjects.editDivDescriptionSelected = document.querySelector('div#AnswersController.ng-scope form.ng-valid.ng-dirty div div.card-area div.edit-container div.known-information-card-container div.known-information-card.card.card--information.card--expand div.card__body div.known-information-group div.known-information.known-information__description');
    gmMS.moveObjects.editDivDescription = document.querySelector('div#AnswersController.ng-scope form.ng-valid.ng-dirty div div.card-area div.edit-container div.card-row-container div.card.card--expand');
    gmMS.moveObjects.editDivLocation = document.querySelector('div#AnswersController.ng-scope form.ng-valid.ng-dirty div div.card-area div.edit-container div.card-row-container div.card.card--expand.map-card.map-edit-card');
    gmMS.moveObjects.editDivTitle = document.querySelector('div#AnswersController.ng-scope form.ng-pristine.ng-valid div div.card-area div.edit-container div.card-row-container div.card.card--expand');
    gmMS.moveObjects.editDivComments = document.querySelector('div#AnswersController.ng-scope form.ng-pristine.ng-valid div div.card-area div.edit-container div.card-row-container div.card.card--expand.comments-card');
    gmMS.moveObjects.editDivWhatIs = document.querySelector('div#AnswersController.ng-scope form.ng-pristine.ng-valid div div.card-area div.edit-container div.card-row-container div.card.card--expand.what-is-it-card');
    // Move elements
    gmMS.moveObjects.editDivWhatIs.children[0].appendChild (gmMS.moveObjects.editDivComments.children[0].children[0]);
    gmMS.moveObjects.editDivWhatIs.children[0].appendChild (gmMS.moveObjects.editDivComments.children[1]);
    gmMS.hideObject(gmMS.moveObjects.editDivComments);
    // Set Map Options
    gmMS.setMapOptions('location-edit-map');

}

/* ------------------- Integration Functions -------------------------------- */

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
        //console.log(ele);
        gmMS.moveObjects.whatIsInput.value = ele.getAttribute('whatis').replace("+", "").replace("-", "").replace("_", " ");
        gmMS.moveObjects.whatIsInput.focus();
        gmMS.forceEvent(gmMS.moveObjects.whatIsInput,"change");
        var firstWhatIs = document.querySelector('div#WhatIsItController.ng-scope div.card__body div.categories-display div.categories-display-container ul.ng-scope li.category div.category__display-name.ng-binding');
                                             //
        gmMS.forceEvent(firstWhatIs,"click");

        //console.log(firstWhatIs.childNodes);
        //w.whatCtrl = w.$scope(firstWhatIs).whatCtrl;
        //w.whatCtrl.setWhatAutocompleteNode(firstWhatIs.childNodes[0]);
        //html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-valid.ng-dirty.ng-valid-parse.ng-submitted div div.card-area div.card-row-container div#what-is-it-card.card.card--expand.what-is-it-card div#WhatIsItController.ng-scope div.card__body div.categories-display div.categories-display-container ul.ng-scope li.whatCategory div.categories-display-name.ng-binding
    }
    w.ansController.readyToSubmit();
    gmMS.localCache('vote');
};

gmMS.limitToSubmit = function () {
    let date = new Date(w.subController.pageData.expires - (new Date().getTime())-60000);
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
        w.subController.resetStreetView();
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
    if (gmMS.options && gmMS.options.autoNext) {
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
            if (w.subController.map !== undefined) {
                console.log(['controlers',w.ansController,w.subController]);
                //gmMS.initDB();
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
                    gmMS.saveVote();
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
                        let btnRefuse = document.querySelector('div#low-quality-modal.low-quality-modal.ng-scope div.modal-body.modal-body-accordion div.button-container button.button-primary');
                                                             //'html.ng-scope.hydrated body.is-authenticated.modal-open div.modal.fade.ng-isolate-scope.in div.modal-dialog.modal-custom1 div.modal-content div#low-quality-modal.ng-scope div.modal-body.modal-body-accordion div.button-container button.button-primary');
                        w.$scope(btnRefuse).answerCtrl2.openSubmissionCompleteModal = w.ansController.openSubmissionCompleteModal;
                        // Hook for detect lowQuality submission
                        console.log(`One Star Dialog submission hook`);
                        w.$scope(btnRefuse).answerCtrl2.twConfirmLowQuality = w.$scope(btnRefuse).answerCtrl2.confirmLowQuality;
                        w.$scope(btnRefuse).answerCtrl2.confirmLowQuality = function () {
                            console.log([`Form Submission low quality`]);
                           // gmMS.saveVote();
                            w.$scope(btnRefuse).answerCtrl2.twConfirmLowQuality();
                        }
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
                    console.log([`Form Submission`,compat]);
                    //gmMS.saveVote();
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
                gmMS.addPopUp();
                console.log(['edit',w.subController.pageData]);
                if (w.subController.reviewType == "EDIT") {
                    setTimeout(function () {
                        gmMS.selectEditElements();
                    }, 500);
                }
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
                case 39:
                    if (w.ansController.readyToSubmit()) {
                        w.ansController.submitForm();
                    }
                    break;
            }
            gmMS.moveObjects.whatIsInput.focus();
            gmMS.moveObjects.whatIsInput.click();
            var submitButton = document.querySelector('#submitDiv.submit-btn-container button.button-primary');
            submitButton.focus();
            console.log(`Key number ${e.which}`);
        }
    };
};

gmMS.init = function () {
    gmMS.toConsole('Start script...');
    gmMS.loadCSS('fontawesome','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
    //gmMS.loadCSS('bootstrap','https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css');
    gmMS.loadCSS('jqueryui','https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css');
    gmMS.loadCSS(gmMS.ScriptName,`${gmMS.baseURL}${gmMS.ScriptName}.css?a=${GM_info.script.version}8`);
    gmMS.initDB();
    gmMS.selectElements();
    if (gmMS.FastOPRData.options !== []) {
        gmMS.options = gmMS.FastOPRData.options;
    }
};

gmMS.addPopUp = function () {
    gmMS.toConsole('addPopUp',debugConfig.functionName);
    let body = document.getElementsByTagName("BODY")[0];

    body.insertAdjacentHTML("beforeend", `<div id="twDialog" title="WFTools options">
  <div class="twDialogInfo">
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="twAutoNext">
  <label class="form-check-label" for="twAutoNext">
    Automatic go to next candidate
  </label>
</div>
<div class="form-check">
  <input type="number" value="10" min="5" max="18" step="1" data-suffix="s" id="twVoteTimeout" style="width: 80px;"/>
  <label class="form-check-label" for="twVoteTimeout">
    Timeout to submit vote
  </label>
</div>
  <div id="twProgress" style="width: 100%; color: green;" ></div>
  </div>
</div>`);
    /*
<div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 100%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" id="twProgress"></div>
</div>
*/
    $( "#twDialog" ).on( "dialogopen", function( event, ui ) {
        console.log(['inicio',gmMS.options]);
        $('#twAutoNext')[0].checked = gmMS.options.autoNext;
        $('#twVoteTimeout')[0].value = parseInt(gmMS.options.voteTimeout);
        let statistic = gmMS.FastOPRData.statistics[gmMS.FastOPRData.statistics.length-1].resume;
        console.log(statistic);
        let totalVotes = (statistic[0]+statistic[1]+statistic[2]+statistic[3]+statistic[4]+statistic[5]);
        console.log(['votos',totalVotes,(totalVotes < 20 ? 'danger' : (totalVotes < 50 ? 'warning' : (totalVotes < 80 ? 'info' : 'success')))]);
        //$('#twProgress').attr('aria-valuenow',totalVotes);
        $( "#twProgress" ).progressbar({
            value: totalVotes,
            //classes: 'bg-'+(totalVotes < 20 ? 'danger' : (totalVotes < 50 ? 'warning' : (totalVotes < 80 ? 'info' : 'success')))
        });
        $( "#twProgress > div").css({ 'background': (totalVotes < 20 ? 'red' : (totalVotes < 50 ? 'orange' : (totalVotes < 80 ? 'cyan' : 'green'))) })
        //$('#twProgress').addClass('bg-'+(totalVotes < 20 ? 'danger' : (totalVotes < 50 ? 'warning' : (totalVotes < 80 ? 'info' : 'success'))));
        $('#twProgress')[0].title = `Vote count for today: ${totalVotes}`;
        console.log(['fim',gmMS.options]);
    });
    document.getElementsByClassName('niantic-wayfarer-logo')[0].onclick = function() {
        $( "#twDialog" ).dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
                "Save configuration": function() {
                    gmMS.options.autoNext = $('#twAutoNext')[0].checked;
                    gmMS.options.voteTimeout = parseInt($('#twVoteTimeout')[0].value);
                    gmMS.FastOPRData.options = gmMS.options;
                    gmMS.saveDB();
                    console.log([gmMS.options,gmMS.FastOPRData.options]);
                    $( this ).dialog( "close" );
                }/*,
                Cancel: function() {
                    $( this ).dialog( "close" );
                }*/
            }
        });
        return false;
    };
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
    // Temporary disable autoNext
    //gmMS.options.autoNext = false;
})();
/*



 */
