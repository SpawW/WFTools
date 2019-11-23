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

gmMS.newStorageJSON = function (name) {
  gmMS.FastOPRData[name] = localStorage.getItem(name);
  gmMS.FastOPRData[name] = (gmMS.FastOPRData[name] === null ? [] : JSON.parse(gmMS.FastOPRData[name]));
  gmMS.toConsole(`Number of records in ${name} cache - ${gmMS.FastOPRData[name].length}`,true,'background: #222; color: #bada55');
};

gmMS.saveStorageJSON = function (name) {
  localStorage.setItem(name, JSON.stringify(gmMS.FastOPRData[name]));
};

gmMS.saveDB = function () {
  gmMS.localDBTables.forEach(gmMS.saveStorageJSON);
  gmMS.toConsole(`DB Saved.`,true,'background: #220; color: #bada55');
};

gmMS.initStatistic = function (date) {
    // Edits in resume[7]
    gmMS.FastOPRData.statistics.push ({'date': date, 'voteInvalid': 0, 'voteDuplicate': 0, 'voteValid': 0, 'voteEdit': 0, 'resume': [0,0,0,0,0,0,0,0]});
};

gmMS.initDB = function (){
    gmMS.toConsole(`initDB ${name}`,debugConfig.functionName);
    gmMS.localDBTables = [ 'statistics', 'history', 'candidates', 'customExtra', 'editCache'];
    gmMS.localDBTables.forEach(gmMS.newStorageJSON);
    let statisticCount = gmMS.FastOPRData.statistics.length;
    gmMS.today = new Date();
    gmMS.date = gmMS.today.getFullYear()+'-'+(gmMS.today.getMonth()+1)+'-'+gmMS.today.getDate();
    if (statisticCount == 0 || gmMS.FastOPRData.statistics[statisticCount-1] == undefined) {
        gmMS.toConsole ('Init statistic database',true);
        gmMS.initStatistic(gmMS.date);
        gmMS.saveDB();
    } else {
        if (gmMS.FastOPRData.statistics[statisticCount-1].date != gmMS.date) {
            gmMS.toConsole (`Init statistic for ${gmMS.date} - Total days in history: ${statisticCount}`,true);
            gmMS.initStatistic(gmMS.date);
            gmMS.saveDB();
        } else {
            gmMS.toConsole ('Statistic day already initialized',true);
        }
    }
};

gmMS.localCache = function (method) {
    switch (method) {
        case 'vote':
            gmMS.tmpProfile = '';
            console.log(w.subController.pageData);
            $.get( "/profile", function( data ) {
                // filter user id
                let tmp = {};
                tmp.userId = (/(?:\<img src=")(.*?)(?:" id)/gm).exec(data)[0];
                tmp.userStatus = (/(?:<div class=")(.*?)(?:" id)/gm).exec(data)[0];
                tmp.tmp = (/(?:<span class="stats-right">)(.*?)(?:<\/span>)/gm).exec(data);
            });
            break;
    }
};

gmMS.saveVote = function() {
    gmMS.toConsole('saveVote',debugConfig.functionName);
    let fullVote = w.subController.pageData;
    let wftVote = {
        'reviewType': w.subController.reviewType,
        'description': fullVote.description,
        'imageUrl': fullVote.imageUrl,
        'supportingImageUrl': fullVote.supportingImageUrl,
        'lat': fullVote.lat,
        'lng': fullVote.lng,
        'statement': fullVote.statement,
        'title': fullVote.title,
        'edit': {
            'descriptions': fullVote.descriptionEdits,
            'locations': fullVote.locationEdits,
        },
        'vote': {
            'quality': w.ansController.formData.quality,
            'description': w.ansController.formData.description,
            'cultural': w.ansController.formData.cultural,
            'uniqueness': w.ansController.formData.uniqueness,
            'safety': w.ansController.formData.safety,
            'location': w.ansController.formData.location,
        }
    };
    gmMS.FastOPRData.candidates.push(wftVote);
    gmMS.saveStatistics(wftVote);
    gmMS.saveDB();
};

gmMS.saveStatistics = function (wftVote) {
    gmMS.toConsole('saveStatistics',debugConfig.functionName);
    let lastRecord = gmMS.FastOPRData.statistics.length-1;
    if (wftVote.reviewType == "NEW") {
        gmMS.FastOPRData.statistics[lastRecord].resume[(wftVote.vote.quality == "" ? 0 : wftVote.vote.quality)] += 1;
        console.log(['new vote',wftVote.vote,gmMS.FastOPRData.statistics[lastRecord]]);
    } else {
        gmMS.FastOPRData.statistics[lastRecord].resume[7] += 1;
        console.log(['edit',wftVote.vote,gmMS.FastOPRData.statistics[lastRecord]]);
    }
};
