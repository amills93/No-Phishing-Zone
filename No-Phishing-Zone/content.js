var senderEmail;
var senderName;
var emailBody;

window.addEventListener('load', function () {
      setTimeout(() => {
            senderEmail = document.getElementsByClassName("go").item(0);
            console.log(senderEmail);
//            ValidateEmail(senderEmail);
            senderEmail.style.color = "red";
//            senderEmail.style = "{ border-style: dotted; border-radius: 5px 5px 5px; border: 1px solid red; }";

            // senderName = document.getElementsByClassName("gD");
            // console.log(senderName.item(0));

            // emailBody = document.getElementsByClassName("nH aHU");
            // console.log(emailBody);
        }, 400);

})

function ValidateEmail(mail)
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
    senderEmail.style.color = "green";
  }
    console.log("You have entered an invalid email address!")
    senderEmail.style.color = "red";
    return (false)
}
