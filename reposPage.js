const request = require("request");
const cheerio = require("cheerio");
const getIssuesHtml = require("./issues");

function getReposePageHtml(url , topic) {

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

      let $ = cheerio.load(html);
      let headingsArr = $(".f3.color-fg-muted.text-normal.lh-condensed");
     
      console.log(topic);
      for(let i = 0 ; i < 8 ; i++){
   
         let twoAnchors = $(headingsArr[i]).find("a");
          
           let link = $(twoAnchors[0]).attr("href");
          
           let fullLink  =  `https://github.com${link}/issues`;

           getIssuesHtml(fullLink , topic);
          

      }

      console.log("------------------------------------------------------");

  }




}







module.exports = getReposePageHtml;