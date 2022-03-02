function wait(ms) {
    var defer = $.Deferred();
    setTimeout(function() { defer.resolve(); }, ms);
    return defer;
};
function doStuffWithDOM(domContent) {
//    console.log("I received the following DOM content:\n" + domContent);
//    console.log(jQuery);
  // $ - Tell jQuery to filter out only p tags. Selector syntax

      // Filters text for a keyword
//    console.log($(domContent).filter(":contains('redfin')"))  //Insert JQuery Selector
      // Search for class="nH aHU" which shows the header
      console.log($(domContent).filter("div.aHU"));

//    alert("I received the following DOM content:\n" + domContent);
    chrome.extension.getBackgroundPage().domContent = domContent;
}

chrome.tabs.onUpdated.addListener(function(id,changeInfo,tab){
    if(changeInfo.status=='complete'){ //To send message after the webpage has loaded
        chrome.tabs.sendMessage(tab.id, { text: "report_back" },function(response){
           doStuffWithDOM(response);
        });
    }
})
