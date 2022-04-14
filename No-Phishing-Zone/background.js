/* Waits for content.js to send the emailToValidate as a message before making an API call
and validating the email address */
chrome.runtime.onMessage.addListener(
function(emailToValidate, sender) {
  /* API Overview https://www.ipqualityscore.com/documentation/email-validation/overview */
  $.getJSON('https://ipqualityscore.com/api/json/email/<API_KEY>/' + emailToValidate, function( json ) {
    console.log( "Hello from Background Script" );
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
  // console.log(json.valid)
  // console.log(json.disposable)
  // console.log(json.overall_score)

    if (json.valid && !json.disposable && json.overall_score >= 3) {
      console.log("Valid Email Address")
      isValid = true;
      returnMessage(isValid)
    } else {
      console.log("Invalid Email Address")
      isValid = false;
      returnMessage(isValid)
    }
   });
});

/* Sends a message back to content.js based on the email Validity.
- False if Invalid
- True if Valid */
function returnMessage(boolValue)
{
 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {message: boolValue}, function(response) {
    console.log("Background script is sending a message to contentscript: " + boolValue);
  });
});
}
