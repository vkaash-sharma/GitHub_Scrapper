const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path =  require("path");

function getIssuesPageHtml(url , topic , repoName) {

    request(url , cb);

  function cb (err , response , html){
      if(err){
          console.log(err);
      }
      else if(response.statusCode == 404){
          console.log("Page Not Found");
      }
      else{
          getIssues(html);
        // console.log(html);
      }
  }

  function getIssues(html){
      let $ = cheerio.load(html);

      let issuesElemArr = $(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
    //   console.log(issuesElemArr.length);
      let arr = [];
      for(let i = 0 ; i <issuesElemArr.length ; i++ ){
          let link = $(issuesElemArr).attr("href");
        //   console.log(link);
          arr.push(link);
      }
      let folderPath = path.join(__dirname , topic);
      dirCreater(folderPath);

      let filePath = path.join(folderPath , repoName+".json");
      fs.writeFileSync(filePath , JSON.stringify(arr));

  }




}
module.exports = getIssuesPageHtml;

function dirCreater(folderPath){

    if(fs.existsSync(folderPath) == false){
        fs.mkdirSync(folderPath);
    }
}







