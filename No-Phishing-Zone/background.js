function doStuffWithDOM(domContent) {
    chrome.extension.getBackgroundPage().domContent = domContent;

    /* Waits for the domContent page to fully load the DOM
    before executing the code below */
    $(domContent).ready(function() {
      /* Finds all divs with class="nH aHU" class and outputs the
       inner text to the console. This outputs the body of a gMail email */
      console.log($(domContent).find("div.nH.aHU").text());
    }
  );

}

chrome.tabs.onUpdated.addListener(function(id,changeInfo,tab){
    if(changeInfo.status=='complete'){ //To send message after the webpage has loaded
        chrome.tabs.sendMessage(tab.id, { text: "report_back" },function(response){
           doStuffWithDOM(response);
        });
    }
})
