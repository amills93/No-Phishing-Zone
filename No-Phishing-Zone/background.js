/* Variables for the Function below */
function doStuffWithDOM(domContent) {
/* This was what was causing the double load.
    chrome.extension.getBackgroundPage().domContent = domContent;
*/

    /* Waits for the domContent page to fully load the DOM
    before executing the code below */
      // console.log("test");
      // console.log('I received the following DOM content:\n' + domContent);
      /* Finds all divs with class="nH aHU" class and outputs the
       inner text to the console. This outputs the body of a gMail email */
//      console.log($(domContent).find("div.nH.aHU")[0]);
//       emailBody = $(domContent).find("div.nH.aHU").text();
//
//       /* Grabs the Senders Contact Name and saves it
//       span class gD contains the Senders Contact Name */
       // senderName = $(domContent).find("span.gD");
       // console.log(senderName);
       // senderName.first().css( "background-color", "yellow" );
       //       console.log(senderName).first().css();
//       console.log(senderName).first().css();
//
//       /* Grabs the Senders Email Address and saves it
//       span class go contains the senders email printed as <email> */
// //      console.log($(domContent).find("span.go").text());
//
//       /* Saves email as a variable */
//       senderEmail = $(domContent).find("span.go").text();
//
//       /* Strips off the < and > from the string */
//       senderEmail = senderEmail.replace(/[><]/g, '');

      // Test to ensure variable has content
//      console.log(senderEmail);

//      console.log($(domContent).find(":contains('@')").not(":contains('font-face')").text())
}

// Check for onloaded lister or something other than 'Updated' or set global flag
chrome.tabs.onUpdated.addListener(function(id,changeInfo,tab){
    if(changeInfo.status=='complete' && tab.status=='complete'){ //To send message after the webpage has loaded
        chrome.tabs.sendMessage(tab.id, { text: "report_back" },function(response){
           doStuffWithDOM(response);
        });
    }
})
