var senderEmail;
var emailBody;
var myNodeList;
/* Listens for when the active history entry changes while the user navigates within
mail.google.com/* This will cause the extension to execute whenever a user loads a new email*/
window.addEventListener('popstate', function () {
  /* Time used to ensure the full page has loaded */
  setTimeout(() => {
        /* Grabs the Senders Email based on the 'go' class
          Note: This is only valid for Google Mail in Google Chrome*/
        senderEmail = document.getElementsByClassName("go").item(0);
//            console.log(senderEmail);
        /* Calls the ValidateEmail function
           Checks to ensure that an email address has been grabbed */
        if (senderEmail != null) {
          ValidateEmail(senderEmail);
        } else {
          console.log("No email address in the 'go' class.")
        }

        /* Email Body for Google Mail has an id=:2h
          Note: This is only valid for Google Mail in Google Chrome */
        emailBody = document.getElementById(":2h");
//            console.log(emailBody);
        /* Calls the ValidateURLS Function */
        if (emailBody == null) {
          /* This was custom coded because when you navigate through the Google email
          web client the 'id=":2h"' changed randomly the only common denominator was the class `a3s aiL` */
            emailBody = document.getElementsByClassName("a3s aiL").item(0)
            if (emailBody != null) {
              ValidateURLS(emailBody);
            } else {
              console.log("Could not grab email body based on class or ID.")
            }
        } else {
            ValidateURLS(emailBody);
        }
    }, 400);
})

/* Listens for a window load event (i.e. Will execute whenever the user
  refreshes the page since popstate does not work on refresh events.) */
window.addEventListener('load', function () {
      /* Time used to ensure the full page has loaded */
      setTimeout(() => {
            /* Grabs the Senders Email based on the 'go' class
              Note: This is only valid for Google Mail in Google Chrome*/
            senderEmail = document.getElementsByClassName("go").item(0);
//            console.log(senderEmail);
            /* Calls the ValidateEmail function
               Checks to ensure that an email address has been grabbed */
            if (senderEmail != null) {
              ValidateEmail(senderEmail);
            } else {
              console.log("No email address in the 'go' class.")
            }

            /* Email Body for Google Mail has an id=:2h
              Note: This is only valid for Google Mail in Google Chrome */
            emailBody = document.getElementById(":2h");

//            console.log(emailBody);
            /* Calls the ValidateURLS Function */
            if (emailBody != null) {
              ValidateURLS(emailBody);
            } else {
              console.log("No email body in the ':2h' ID.")
            }
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

}

/* Function will validate a URL in an email based on the documentation at
https://www.ipqualityscore.com/documentation/malicious-url-scanner-api/overview
If an email URL is Invalid it will change the CSS color to red
If an email URL is Valid it will change the CSS color to green.
*/
function ValidateURLS(url)
{
  var listOfURLS = [];
  /* Creates a NodeList of all the 'a' tags in the URL Object */
  myNodeList = url.querySelectorAll("a");
  console.log(myNodeList);
  /* Loops through each a tag in the NodeList and
    attempts to validate it */
  for (let i = 0; i < myNodeList.length; i++) {
    /* Sends the emailToValidate as a message to background.js to
    execute an API call. Note: API calls are not allowed in content.js files*/
    url = String(myNodeList[i]).replace(/^https?:\/\//, 'https%3A%2F%2F');
    url = url.split("/")[0];
    listOfURLS.push(url);
    console.log(url);
  }
  chrome.runtime.sendMessage({"type": "URL", "urlToValidate": listOfURLS}, function(response) {
      console.log("contentscript sending URL");
    });
}

/* Waits for a response from the background.js to apply the CSS to the
senders email based on validity */
chrome.runtime.onMessage.addListener(
  function(request, sender) {
    if (request.type == "email") {
        console.log("Contentscript has received an email message from from background script: " + request.message);
        if (request.message) {
          console.log("Valid Email " + request.risk_rating)
          senderEmail.textContent += " [" + request.risk_rating + "]/[4]";
          senderEmail.style.color = "green";
        } else {
          console.log("Invalid Email " + request.risk_rating)
          senderEmail.textContent += " [" + request.risk_rating + "]/[4]";
          senderEmail.style.color = "red";
        }
    }
    else if (request.type == "URL") {
      console.log("Contentscript has received a URL message from from background script: " + request.message);
      console.log(request.message);
      console.log(request.risk_rating);
      console.log(request.position)
        if (request.message) {
          console.log("Valid URL " + request.risk_rating)
        /* Adding Risk Rating for URLs breaks some of the embeded image URLs
        currently we are scoping it out */
          myNodeList[request.position].textContent += " [" + request.risk_rating + "] ";
          myNodeList[request.position].style.color = "green";
        } else {
          console.log("Invalid URL " + request.risk_rating)
          myNodeList[request.position].textContent += " [" + request.risk_rating + "]";
          myNodeList[request.position].style.color = "red";
        }
    }
  });
