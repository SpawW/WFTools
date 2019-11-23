gmMS.newStorageJSON = function (name) {
  //gmMS.toConsole(`newStorageJSON ${name}`,debugConfig.functionName);
  gmMS.FastOPRData[name] = localStorage.getItem(name);
  gmMS.FastOPRData[name] = (gmMS.FastOPRData[name] === null ? [] : JSON.parse(gmMS.FastOPRData[name]));
  gmMS.toConsole(`Number of records in ${name} cache - ${gmMS.FastOPRData[name].length}`,true,'background: #222; color: #bada55');
};

gmMS.saveStorageJSON = function (name) {
  //gmMS.toConsole(`saveStorageJSON ${name}/${gmMS.FastOPRData[name].length}`,debugConfig.functionName);
  localStorage.setItem(name, JSON.stringify(gmMS.FastOPRData[name]));
  //console.log([`Debug ${name}`,gmMS.FastOPRData[name]]);
}

gmMS.saveDB = function () {
  gmMS.localDBTables.forEach(gmMS.saveStorageJSON);
  gmMS.toConsole(`DB Saved.`,true,'background: #220; color: #bada55');
}

gmMS.initStatistic = function (date) {
    // Edits in resume[7]
    gmMS.FastOPRData.statistics.push ({'date': date, 'voteInvalid': 0, 'voteDuplicate': 0, 'voteValid': 0, 'voteEdit': 0, 'resume': [0,0,0,0,0,0,0,0]});
//    console.log(['debug statistics',gmMS.FastOPRData.statistics,gmMS.FastOPRData.statistics[gmMS.date]]);
}

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
}

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
                console.log(tmp.tmp);
                console.log(['userid',gmMS.FastOPRData.statistics]);

                // filter vote statistics
//                const regex = ;
                //m = (/(?:\<div id="col-contain">)((?:.*\r?\n?)*)/gm).exec(data);
                //console.log(m);
                /*
                while (m !== null) {
                    // This is necessary to avoid infinite loops with zero-width matches
                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }

                    // The result can be accessed through the `m`-variable.
                    m.forEach((match, groupIndex) => {
                        console.log(`Found match, group ${groupIndex}: ${match}`);
                    });
                }*/
                //               console.log([ "Profile data",data]);
            });
            break;
    }
}
