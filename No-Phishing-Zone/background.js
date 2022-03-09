/* Variables for the Function below */
var senderName = '';
var senderEmail = '';
var emailBody = '';

function doStuffWithDOM(domContent) {
/* This was what was causing the double load.
    chrome.extension.getBackgroundPage().domContent = domContent;
*/

    /* Waits for the domContent page to fully load the DOM
    before executing the code below */
    $(domContent).ready(function() {
      /* Finds all divs with class="nH aHU" class and outputs the
       inner text to the console. This outputs the body of a gMail email */
      console.log($(domContent).find("div.nH.aHU").text() + "\n");
      emailBody = $(domContent).find("div.nH.aHU").text();

      /* Grabs the Senders Contact Name and saves it
      span class gD contains the Senders Contact Name */
      console.log($(domContent).find("span.gD").text());
      senderName = $(domContent).find("span.gD").text();

      /* Grabs the Senders Email Address and saves it
      span class go contains the senders email printed as <email> */
      console.log($(domContent).find("span.go").text());

      /* Saves email as a variable */
      senderEmail = $(domContent).find("span.go").text();

      /* Strips off the < and > from the string */
      senderEmail = senderEmail.replace(/[><]/g, '');

      // Test to ensure variable has content
      console.log(senderEmail);

//      console.log($(domContent).find(":contains('@')").not(":contains('font-face')").text())
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
