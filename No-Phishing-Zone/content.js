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

async function ValidateEmail(mail)
{
  /* Takes the innerText of the mail object */
  emailToValidate = mail.innerText;
//  console.log(emailToValidate);
  /* Chrome Extensions require you to load a local textfile using chrom.runtime.getURL */
  const url = chrome.runtime.getURL('blacklist.txt');
  /* Stores the text file once loaded below */
  var storedText;
  /* Booblean value used to check if a URL is found in the blacklist.txt file */
  var bool = false;
/* Strips off the < and > from the string */
  emailToValidate = emailToValidate.replace(/[><]/g, '');
//  console.log(emailToValidate);
  emailDomain = emailToValidate.split("@")[1];
  /* Domain Used for Testing   */
//  emailDomain = "mainews.ru";

  console.log(emailDomain);

    /* Variable used to test the regex */
//  TestemailToValidate = 'paypal@paypaL.com'

/*
  The Regex is used to validate an email address based on the parameters below.
  It assumes that emails with any capital letters after the '@' symbol is invalid.
  Phishers will attempt to subsitue a lower case 'l' for 'L' to trick a user. Is
  based of rfc22
*/
  const rfc22 = /^\w+([\.-]?\w+)*@[a-z]+([\.-]?[a-z]+)*(\.[a-z]{2,3})+$/

//  var isBlackListed = blackListTest(emailDomain);

/* Function used to load the blacklist.txt url set above in the Variable url
and see if the email domain is in the list. Will set bool to true if found */
  await fetch(url)
  .then(function(response) {
    response.text().then(function(text) {
      /* Splits the text file based on the \n character */
      storedText = text.split("\n");
      for (let i = 1; i < storedText.length; i++) {
    //          console.log(wordList[i]);
          /* If the word is NOT found indexOf returns a -1
          the will continue looping through the rest of the loop */
          if (storedText[i].indexOf(emailDomain) >= 0) {
              bool = true;
              console.log("Found " + storedText[i]);
//              console.log(storedText[i] + " " + bool + " Inside fetch");
              break;
          }
        }
    });
  });

  /* Since blackListTest returns true if the word is on the blackListTest
      we need it to be false in order for the if statement to fail we also
      need to set a timeout so it waits for the function above to execute. */
  setTimeout(() => {
   if (rfc22.test(emailToValidate) && !bool)
    {
      /* Email Domain is valid if it passes the regex and is not found on the blacklist */
      senderEmail.style.color = "green";
      console.log("Valid email address!")
      return (true)
    }
      console.log("Invalid email address!")
      senderEmail.style.color = "red";
      return (false)
  }, 400);
}

// async function blackListTest(domain)
// {
//   // console.log(whitelist);
//   /* Reads in the blacklist.txt file */
//   const url = chrome.runtime.getURL('blacklist.txt');
//   var storedText;
//   var bool = false;
//
//   await fetch(url)
//   .then(function(response) {
//     response.text().then(function(text) {
//       storedText = text.split("\n");
//       for (let i = 1; i < storedText.length; i++) {
//     //          console.log(wordList[i]);
//           /* If the word is NOT found indexOf returns a -1
//           the will continue looping through the rest of the loop */
//           if (storedText[i].indexOf(domain) >= 0) {
//               bool = true;
//               console.log(storedText[i] + " " + bool + " Inside fetch");
//               break;
//           }
//         }
//     });
//   });
// //    console.log(bool + " Before Return fetch");
//     return bool;
//
// //   await fetch(url)
// //     .then(function(response) {
// //       response.text().then(function(text) {
// //         storedText = text.split("\n");
// //         done();
// // //        return bool;
// //       });
// //     });
// //
// //   function done() {
// //     for (let i = 1; i < storedText.length; i++) {
// //             /* If the word is NOT found indexOf returns a -1
// //             the will continue looping through the rest of the loop */
// //             if (storedText[i].indexOf(domain) >= 0) {
// //                 console.log(storedText[i]);
// //                 bool = true;
// //                 console.log(storedText[i] + " " + bool + " Inside fetch");
// //                 break;
// //             }
// //             else {
// //               bool = false;
// //             }
// //           }
// //         }
// //     console.log(bool + " Before Return fetch");
// //     return bool;
// }

// function whiteListTest(mail)
// {
//   // console.log(whitelist);
//   const url = chrome.runtime.getURL('email-whitelist.txt');
//
//   fetch(url).then(function(response) {
//       return response.text().then(function(text) {
//         const word = text.split("\n");
//         for (let i = 1; i < word.length; i++) {
//           console.log(word[i]);
//           if (mail.test(word[i])) {
//             return (true);
//           }
// //          return (mail.test(text[i]));
//         }
//       });
//     });
// }

function ValidateURLS(url)
{
  /* Creates a NodeList of all the 'a' tags in the URL Object */
  const myNodeList = url.querySelectorAll("a");
//  console.log(myNodeList);

  /* Loops through each a tag in the NodeList and
    attempts to validate it */
  for (let i = 0; i < myNodeList.length; i++) {
//    console.log(myNodeList[i].href);
    myNodeList[i].style.color = "red";
  }
}
