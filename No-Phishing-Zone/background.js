/* Waits for content.js to send the emailToValidate as a message before making an API call
and validating the email address */
chrome.runtime.onMessage.addListener(function(request, sender) {

/* If the Request is of type email */
  if (request.type == "email") {
    /* API Overview https://www.ipqualityscore.com/documentation/email-validation/overview */
    $.getJSON('https://ipqualityscore.com/api/json/email/DxCYsYizITD6xdeRDgjHj1QWzDTVY49v/' + request.emailToValidate, function( json ) {
      console.log( "Hello from Background Script email Function" );
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
   }
   /* If the Request is of type URL */
   else if (request.type == 'URL') {
     /* API Overview https://www.ipqualityscore.com/documentation/malicious-url-scanner-api/overview */
     $.getJSON('https://ipqualityscore.com/api/json/url/DxCYsYizITD6xdeRDgjHj1QWzDTVY49v/' + request.urlToValidate, function( json ) {
       console.log( "Hello from Background Script URL Function" );
       /* Boolean Value for Email Validity */
       var isURLValid = false;
   /* If Else statement evaluates the URL address based on the response from the api.
   Reponse from the API can be described as such:
     phishing - Is this URL associated with malicious phishing behavior? - Booblean
     malware - Is this URL associated with malware or viruses? - Booblean
     parking - Is the domain of this URL currently parked with a for sale notice? - Boolean
     spamming - Is the domain of this URL associated with email SPAM or abusive email addresses? - Boolean
   */
   console.log(json.phishing);
   console.log(json.malware);
   console.log(json.parking);
   console.log(json.spamming);

       if (!json.phishing && !json.malware && !json.parking && !json.spamming) {
         console.log("Valid URL Address")
         isURLValid = true;
         returnMessage(isURLValid)
       } else {
         console.log("Invalid URL Address")
         isURLValid = false;
         returnMessage(isURLValid)
       }
      });
   }
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
