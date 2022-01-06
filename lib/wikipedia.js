const Wikipedia = require("wikifox");

const wiki = new Wikipedia("en");

function GetWikiInfo(query, callback) {

    wiki.searchArticles(query).then((data) => {

        try {
            var Obj = {};

            var data = data.data.results;
            var firstElementKey = Object.keys(data)[0];

            var result = data[firstElementKey];
            result.snippet = result.snippet.replace(/<\/?[^>]+(>|$)/g, "");

            delete result.words
            result.status = "success";

            Obj = result;

            wiki.getThumbnail(result.title).then((data) => {
                Obj.image = data.data.image;

                if (typeof callback === 'function') {
                    callback(Obj);
                }
            })
        } catch (error) {
            callback({
                status: "error",
                message: "No results found"
            })
        }


    })
}

module.exports = GetWikiInfo;