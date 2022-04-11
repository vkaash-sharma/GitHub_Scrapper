let url = "https://github.com/topics";
const request = require("request");
const cheerio = require("cheerio");
const getReposePageHtml = require("./reposPage");

request(url , cb);

function cb(err , response , html){
    if(err){
        console.log(err);
    }
    else if(response.statusCode == 404){
        console.log("Page Not Found");
    }
    else{
        // console.log(html);
        getTopicsLinks(html);
    }

}

function getTopicsLinks(html){
    let $ =cheerio.load(html);
    let linkElemArr = $(".no-underline.d-flex.flex-column.flex-justify-center")

    for(let i = 0 ; i < linkElemArr.length ; i++){
          let href =  $(linkElemArr[i]).attr("href");
        //   console.log(href);
      
        let topic  = href.split("/").pop()
        let fullLink = `https://github.com${href}`;

        getReposePageHtml(fullLink , topic);
    }

}
