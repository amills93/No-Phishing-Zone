var senderEmail;
var senderName;
var emailBody;

window.addEventListener('load', function () {
      /* Time used to ensure the full page has loaded */
      setTimeout(() => {
            /* Grabs the Senders Email based on the 'go' class
              Note: This is only valid for Google Mail in Google Chrome*/
            senderEmail = document.getElementsByClassName("go").item(0);
//            console.log(senderEmail);
            /* Calls the ValidateEmail function */
            ValidateEmail(senderEmail);

            // senderName = document.getElementsByClassName("gD");
            // console.log(senderName.item(0));

            /* Email Body for Google Mail has an id=:2h
              Note: This is only valid for Google Mail in Google Chrome */
            emailBody = document.getElementById(":2h");
//            console.log(emailBody);
            /* Calls the ValidateURLS Function */
            ValidateURLS(emailBody);
        }, 400);
})

/* Function will validate an email based on the documentation at
https://www.ipqualityscore.com/documentation/email-validation/overview
If an email is Invalid it will change the CSS color to red
If an email is Valid it will change the CSS color to green.
*/
function ValidateEmail(mail)
{
  /* Takes the innerText of the mail object */
  emailToValidate = mail.innerText;
/* Strips off the < and > from the string */
  emailToValidate = emailToValidate.replace(/[><]/g, '');
  console.log(emailToValidate);

  /* Sends the emailToValidate as a message to background.js to
  execute an API call. Note: API calls are not allowed in content.js files*/
  chrome.runtime.sendMessage({"type": "email", "emailToValidate": emailToValidate}, function(response) {
      console.log("contentscript sending email");
    });

/* Waits for a response from the backgroun.js to apply the CSS to the
senders email based on validity */
  chrome.runtime.onMessage.addListener(
    function(request, sender) {
    console.log("Contentscript has received an email message from from background script: " + request.message);
        if (request.message) {
          console.log("Valid Email")
          senderEmail.style.color = "green";
        } else {
          console.log("Invalid Email")
          senderEmail.style.color = "red";
        }
    });
}

/* Function will validate a URL in an email based on the documentation at
https://www.ipqualityscore.com/documentation/malicious-url-scanner-api/overview
If an email URL is Invalid it will change the CSS color to red
If an email URL is Valid it will change the CSS color to green.
*/
function ValidateURLS(url)
{
  /* Creates a NodeList of all the 'a' tags in the URL Object */
  const myNodeList = url.querySelectorAll("a");
//  console.log(myNodeList);

  /* Loops through each a tag in the NodeList and
    attempts to validate it */
  for (let i = 0; i < myNodeList.length; i++) {
    /* Sends the emailToValidate as a message to background.js to
    execute an API call. Note: API calls are not allowed in content.js files*/
    url = String(myNodeList[i]).replace(/^https?:\/\//, 'https%3A%2F%2F');
    url = url.split("/")[0];
    console.log(url);
    chrome.runtime.sendMessage({"type": "URL", "urlToValidate": url}, function(response) {
        console.log("contentscript sending URL");
      });
  /* Waits for a response from the backgroun.js to apply the CSS to the
  senders email based on validity */
    chrome.runtime.onMessage.addListener(
      function(request, sender) {
      console.log("Contentscript has received a URL message from from background script: " + request.message);
          if (request.message) {
            console.log("Valid URL")
            myNodeList[i].style.color = "green";
          } else {
            console.log("Invalid URL")
            myNodeList[i].style.color = "red";
          }
      });
  }
}
