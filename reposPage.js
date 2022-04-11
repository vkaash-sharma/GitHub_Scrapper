const request = require("request");
const cheerio = require("cheerio");

function getReposePageHtml(url) {

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

  function getReposeLink(html){

      cheerio.load(html);

  }




}







module.exports = getReposePageHtml;