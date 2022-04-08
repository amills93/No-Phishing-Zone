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

function ValidateEmail(mail)
{
  /* Takes the innerText of the mail object */
  emailToValidate = mail.innerText;
//  console.log(emailToValidate);

/* Strips off the < and > from the string */
  emailToValidate = emailToValidate.replace(/[><]/g, '');
//  console.log(emailToValidate);

    /* Variable used to test the regex */
//  TestemailToValidate = 'paypal@paypaL.com'
//  const rfc22 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

/*
  The Regex is used to validate an email address based on the parameters below.
  It assumes that emails with any capital letters after the '@' symbol is invalid.
  Phishers will attempt to subsitue a lower case 'l' for 'L' to trick a user.
*/
 if (/^\w+([\.-]?\w+)*@[a-z]+([\.-]?[a-z]+)*(\.[a-z]{2,3})+$/.test(emailToValidate))
  {
    senderEmail.style.color = "green";
    console.log("Valid email address!")
    return (true)
  }
    console.log("Invalid email address!")
    senderEmail.style.color = "red";
    return (false)
}

function ValidateURLS(url)
{
  /* Creates a NodeList of all the 'a' tags in the URL Object */
  const myNodeList = url.querySelectorAll("a");
  console.log(myNodeList);

  /* Loops through each a tag in the NodeList and
    attempts to validate it */
  for (let i = 0; i < myNodeList.length; i++) {
    console.log(myNodeList[i].href);
  }
}
