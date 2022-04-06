var senderEmail;
var senderName;
var emailBody;

window.addEventListener('load', function () {
      setTimeout(() => {
            hrefTags = document.links;
            console.log(hrefTags);

            senderEmail = document.getElementsByClassName("go").item(0);
            console.log(senderEmail);
            ValidateEmail(senderEmail);

//            senderEmail.style = "{ border-style: dotted; border-radius: 5px 5px 5px; border: 1px solid red; }";

            // senderName = document.getElementsByClassName("gD");
            // console.log(senderName.item(0));

//            emailNode = document.getElementsByClassName("nH aHU").item(0);
//            emailNode.childnodes //recursively go down to see if any are type a and add to a list of "found links"

            // jQuery does this as part of a Query Selector (top element.sub element)
            // children[i].nodeType == 'a'
            console.log(emailBody);
        }, 400);

})

function ValidateEmail(mail)
{
  emailToValidate = mail.innerText;
  console.log(emailToValidate);
/* Strips off the < and > from the string */
  emailToValidate = emailToValidate.replace(/[><]/g, '');
  console.log(emailToValidate);

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
  // Insert Data Here
}
