const request = require("request");
const cheerio = require("cheerio");

function getIssuesPageHtml(url , topic) {

    request(url , cb);

  function cb (err , response , html){
      if(err){
          console.log(err);
      }
      else{
          getReposeLink(html);
        // console.log(html);
      }
  }
}




module.exports = getIssuesPageHtml;