/*

=== Part of WFTools === 

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
 
gmMS.selectElements = function () {
    gmMS.moveObjects = {};

    if (window.location.href.indexOf ("https://wayfarer.nianticlabs.com/captcha") != 0) {
        gmMS.moveObjects.profile = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.header.ng-scope div.inner-container');
        gmMS.moveObjects.logo = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.header.ng-scope div.inner-container');
        gmMS.moveObjects.topBar = gmMS.moveObjects.logo.parentElement;
        gmMS.moveObjects.leftBar = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.main-container div.sidebar.ng-scope.hide-mobile');
        gmMS.moveObjects.errorBox = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-pristine.ng-valid.ng-submitted div div.error-message.error-message--submission');
    };

    if (window.location.href.indexOf ("https://wayfarer.nianticlabs.com/review") == 0) {
            gmMS.moveObjects.duplicateList = document.getElementById('map-filmstrip');
            gmMS.moveObjects.duplicateMap = document.getElementById('map');
            gmMS.moveObjects.votePhoto = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-pristine.ng-valid div div.card-area div.card-row-container div#photo-card.card.card--expand div.card__footer div.five-stars');
            gmMS.moveObjects.voteDescription = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-pristine.ng-valid div div.card-area div.card-row-container div#descriptionDiv.card.card--expand div.card__footer div.five-stars');
            gmMS.moveObjects.voteHistCult = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-pristine.ng-valid div div.card-area div.card-row-container div#three-card-container.three-card-parent div#histcult-card.card.small-card div.card__footer div.five-stars');
            gmMS.moveObjects.voteUniqueness = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-pristine.ng-valid div div.card-area div.card-row-container div#three-card-container.three-card-parent div#uniqueness-card.card.small-card.middle-card div.card__footer div.five-stars');
            gmMS.moveObjects.voteSafety = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-pristine.ng-valid div div.card-area div.card-row-container div#three-card-container.three-card-parent div#safety-card.card.small-card div.card__footer div.five-stars');
            gmMS.moveObjects.voteLocation = document.querySelector('html.ng-scope.hydrated body.is-authenticated div.main-container div#content-container.container section div#NewSubmissionController.ng-scope div div div#AnswersController.ng-scope form.ng-pristine.ng-valid div div.card-area div.card-row-container div#map-card.card.card--double-width div.card__footer div.five-stars');
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
        // Statistcs
        gmMS.moveObjects.topBar.insertAdjacentHTML("afterbegin", `<div id="twStatistics" width="100px"></div>`);
        let badges = ["success","primary","info","warning","danger","outline-danger"]; //,"dark","secondary"
        //let hints =  ["5* vote","secondary","success","danger","warning","info","light","dark"];
        let stars = [5,4,3,2,1,0];
        console.log(['aqui',gmMS.FastOPRData,gmMS.FastOPRData.statistics.length]);
        let lastRecord = gmMS.FastOPRData.statistics.length-1;
        for (var id in stars ) {
            $('#twStatistics' ).html ($('#twStatistics' ).html()+`<span class="rounded-circle btn btn-${badges[id]} " title="Total votes with ${stars[id]}*">${gmMS.FastOPRData.statistics[lastRecord].resume[stars[id]]}</span>`);
        }
        // Hide original left bar
        gmMS.moveObjects.leftBar.classList.add('ng-hide');
        // Add Options to topBar
        let topBarOptions = [];
        topBarOptions['/logout'] = ['power-off','Logout'];
        topBarOptions['/help'] = ['question-circle','Help'];
        topBarOptions['/settings'] = ['cog','settings'];
        topBarOptions['/nominations'] = ['camera-retro','Nominations'];
        topBarOptions['/review'] = ['picture-o','Review'];
        topBarOptions['/'] = ['home','Showcase'];
        for (var key in topBarOptions) {
            gmMS.moveObjects.topBar.insertAdjacentHTML("afterbegin", `<button onclick="window.location='${key}'" id="twMenu${topBarOptions[key][0]}" class="btn btn-outline-dark btn-lg fa fa-${topBarOptions[key][0]} black"  data-tooltip="${topBarOptions[key][1]}" title="${topBarOptions[key][1]}">&nbsp;</button>`);
        }
        gmMS.moveObjects.topBar.appendChild(gmMS.moveObjects.profile);
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
        ,{'id': 'vote3', 'caption': '3', 'class': 'btn-default', 'onclick': 'gmMS.setVote([3,4,3,3,3,3]);','whatis': ''}
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
