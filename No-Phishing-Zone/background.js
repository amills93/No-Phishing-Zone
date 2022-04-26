/* Set to true in order to log console output */
var DEBUG = true;
/* Waits for content.js to send the emailToValidate as a message before making an API call
and validating the email address */
chrome.runtime.onMessage.addListener(function(request, sender) {
/* If the Request is of type email */
  if (request.type == "email") {
    /* API Overview https://www.ipqualityscore.com/documentation/email-validation/overview */
    $.getJSON('https://ipqualityscore.com/api/json/email/DxCYsYizITD6xdeRDgjHj1QWzDTVY49v/' + request.emailToValidate, function( json ) {
      console.log( "Checking email: " + request.emailToValidate);
      /* Boolean Value for Email Validity */
      var isValid = false;
  /* If Else statement evaluates the email address based on the response from the api.
  Reponse from the API can be described as such:
    valid - Does this email address appear valid? - Booblean
    disposable - Is this email suspected of belonging to a temp or disposable mail service? - Booblean
    overall_score -
        0 = invalid email address
        1 = dns valid, unreachable mail server
        2 = dns valid, temporary mail rejection error
        3 = dns valid, accepts all mail
        4 = dns valid, verified email exists
      */
      if (DEBUG) {
        console.log(json.valid)
        console.log(json.disposable)
        console.log(json.overall_score)
      }

      if (json.valid && !json.disposable && json.overall_score >= 3) {
        console.log("Valid Email Address")
        isValid = true;
        returnMessage(request.type, isValid, json.overall_score)
      } else {
        console.log("Invalid Email Address")
        isValid = false;
        returnMessage(request.type, isValid, json.overall_score)
      }
     });
   }
   /* If the Request is of type URL */
   else if (request.type == 'URL') {
     var isValid = false;
     /* API Overview https://www.ipqualityscore.com/documentation/malicious-url-scanner-api/overview */
     for (let i = 0; i < request.urlToValidate.length; i++) {

       $.getJSON('https://ipqualityscore.com/api/json/url/DxCYsYizITD6xdeRDgjHj1QWzDTVY49v/' + request.urlToValidate[i], function( json ) {
        if (DEBUG) {
          console.log( "Checking URL: " + request.urlToValidate[i]);
        }
     /* If Else statement evaluates the URL address based on the response from the api.
     Reponse from the API can be described as such:
       phishing - Is this URL associated with malicious phishing behavior? - Booblean
       malware - Is this URL associated with malware or viruses? - Booblean
       parking - Is the domain of this URL currently parked with a for sale notice? - Boolean
       spamming - Is the domain of this URL associated with email SPAM or abusive email addresses? - Boolean
       risk_score -
         Risk Scores < 80 - Safe
         Risk Scores >= 75 - suspicious - usually due to patterns associated with malicious links.
         Risk Scores >= 85 - high risk - strong confidence the URL is malicious.
         Risk Scores = 100 AND Phishing = "true" OR Malware = "true" - indicates confirmed malware or phishing activity in the past 24-48 hours.
     */
     if (DEBUG) {
       console.log(json.phishing);
       console.log(json.malware);
       console.log(json.parking);
       console.log(json.spamming);
       console.log(json.risk_score);
      }

         if (!json.phishing && !json.malware && !json.parking && !json.spamming && json.risk_score < 80) {
           console.log("Valid URL Address")
           isValid = true;
           returnMessage(request.type, isValid, json.risk_score, i)
         } else {
           console.log("Invalid URL Address")
           isValid = false;
           returnMessage(request.type, isValid, json.risk_score, i)
         }
        });
    }
   }
});

/* Sends a message back to content.js based on the email Validity.
  requestType - email or URL
  boolValue - true or false based on API call
  risk_rating - overall risk score of the email or URL
  position - Used to known the position in the array where the URL is
  */
function returnMessage(requestType, boolValue, risk_rating, position)
{
 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {type: requestType, message: boolValue, risk_rating: risk_rating, position: position}, function(response) {
    if (DEBUG) {
      console.log("Background script is sending a message to contentscript: " + boolValue);
    }
  });
});
}
