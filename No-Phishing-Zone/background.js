function doStuffWithDOM(domContent) {
    console.log("I received the following DOM content:\n" + domContent);
    alert("I received the following DOM content:\n" + domContent);
    chrome.extension.getBackgroundPage().domContent = domContent;
}

chrome.tabs.onUpdated.addListener(function(id,changeInfo,tab){
    if(changeInfo.status=='complete'){ //To send message after the webpage has loaded
        chrome.tabs.sendMessage(tab.id, { text: "report_back" },function(response){
           doStuffWithDOM(response);
        });
    }
})
