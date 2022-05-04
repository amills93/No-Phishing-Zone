/* Set to true in order to log console output */
var DEBUG = false;
/* Variable for the sender of an a given email */
var senderEmail;
/* Variable for the email body */
var emailBody;
/* Global Array of URL Nodes to store where the div tag is */
var myNodeList;

/* Listens for when the active history entry changes while the user navigates within
mail.google.com/* This will cause the extension to execute whenever a user loads a new email*/
window.addEventListener('popstate', function () {
  /* Time used to ensure the full page has loaded */
  setTimeout(() => {
        /* Grabs the Senders Email based on the 'go' class
          Note: This is only valid for Google Mail in Google Chrome*/
        senderEmail = document.getElementsByClassName("go").item(0);
        if (DEBUG) {
          console.log(senderEmail);
        }
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
        if (DEBUG) {
          console.log(emailBody);
        }
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
            if (DEBUG) {
              console.log(senderEmail);
            }
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
            if (DEBUG) {
              console.log(emailBody);
            }
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
  if (DEBUG) {
    console.log(emailToValidate);
  }

  /* Sends the emailToValidate as a message to background.js to
  execute an API call. Note: API calls are not allowed in content.js files*/
  chrome.runtime.sendMessage({"type": "email", "emailToValidate": emailToValidate}, function(response) {
      if (DEBUG) {
        console.log("contentscript sending email");
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
  /* Creates an empty array that will be populated by URLs that need to be validated */
  var listOfURLS = [];
  /* Creates a NodeList of all the 'a' tags in the URL Object */
  myNodeList = url.querySelectorAll("a");

  if (DEBUG) {
    console.log(myNodeList);
  }
  /* Loops through each a tag in the NodeList and
    attempts to validate it */
  for (let i = 0; i < myNodeList.length; i++) {
    /* Sends the emailToValidate as a message to background.js to
    execute an API call. Note: API calls are not allowed in content.js files*/
    url = String(myNodeList[i]).replace(/^https?:\/\//, 'https%3A%2F%2F');
    /* Strips the subdirectories off the URL */
    url = url.split("/")[0];
    /* Adds URL to array */
    listOfURLS.push(url);
    if (DEBUG) {
      console.log(url);
    }
  }
  chrome.runtime.sendMessage({"type": "URL", "urlToValidate": listOfURLS}, function(response) {
      if (DEBUG) {
        console.log("contentscript sending URL");
      }
    });
}

/* Waits for a response from the background.js to apply the CSS to the
senders email or URLs based on validity and risk score per IPQualityScore API. */
chrome.runtime.onMessage.addListener(
  function(request, sender) {
    if (request.type == "email") {
        if (DEBUG) {
          console.log("Contentscript has received an email message from from background script: " + request.message);
        }
        /* Checks if the Email is Valid (true) and that the Risk Rating is >= 3 */
        if (request.message && request.risk_rating >= 3) {
          if (DEBUG) {
            console.log("Valid Email " + request.risk_rating)
          }
          senderEmail.textContent += " [" + request.risk_rating + "]/[4]";
          senderEmail.style.color = "green";
        }
        /* If Risk Rating is 2 the email is suspicious */
        else if (request.risk_rating == 2) {
          if (DEBUG) {
            console.log("dns valid, temporary mail rejection error")
          }
          senderEmail.textContent += " [" + request.risk_rating + "]/[4]";
          senderEmail.style.color = "orange";
        }
        /* If risk rating returns empty the Max API limit for the day has been reached */
        else if (request.risk_rating == null) {
          if (DEBUG) {
            console.log("No more API Calls for the day")
          }
          senderEmail.style.color = "purple";
        }
        /* If non of the above match the email is Malicious and marked red */
        else {
          if (DEBUG) {
            console.log("Invalid Email " + request.risk_rating)
          }
          senderEmail.textContent += " [" + request.risk_rating + "]/[4]";
          senderEmail.style.color = "red";
        }
    }
    else if (request.type == "URL") {
      if (DEBUG) {
        console.log("Contentscript has received a URL message from from background script: " + request.message);
        console.log("URL Valid: " + request.message + " Risk Rating: " + request.risk_rating + " Position: " + request.position);
      }
      /* Checks if the message is True and if the Risk Rating is less than 80 indicating a safe URL */
      if (request.message && request.risk_rating < 80) {
        if (DEBUG) {
          console.log("Valid URL " + request.risk_rating)
        }
      /* Adding Risk Rating for URLs breaks some of the embeded image URLs
      so we do not add a risk rating to them. */
        if (myNodeList[request.position].childNodes[1] == null) {
          myNodeList[request.position].textContent += " [" + request.risk_rating + "] ";
        }
        myNodeList[request.position].style.color = "green";
      }
      /* Checks if risk rating is between 75 and 85 which indicates a suspicious URL. */
      else if (request.risk_rating >= 80 && request.risk_rating < 85){
        if (DEBUG) {
          console.log("Suspicious, usually due to patterns associated with malicious links.")
        }
        /* Adding Risk Rating for URLs breaks some of the embeded image URLs
        so we do not add a risk rating to them. */
        if (myNodeList[request.position].childNodes[1] == null) {
          myNodeList[request.position].textContent += " [" + request.risk_rating + "]";
        }
        /* Since the URL is marked as suspicious so should the email */
        senderEmail.style.color = "orange";
        myNodeList[request.position].style.color = "orange";
      }
      /* If Risk Rating returns null the max API limit has been reached. */
      else if (request.risk_rating == null){
        if (DEBUG) {
          console.log("No more API Calls for the day")
        }
        myNodeList[request.position].style.color = "purple";
      }
      /* If non of the above match URL is Malicious and marked red */
      else {
        if (DEBUG) {
          console.log("Invalid URL " + request.risk_rating)
        }
        /* Adding Risk Rating for URLs breaks some of the embeded image URLs
        so we do not add a risk rating to them. */
        if (myNodeList[request.position].childNodes[1] == null) {
          myNodeList[request.position].textContent += " [" + request.risk_rating + "]";
        }
        /* Since the URL is invalid the email should be marked as such */
        senderEmail.style.color = "red";
        myNodeList[request.position].style.color = "red";
      }
    }
  });
