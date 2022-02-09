# Literature Review

### Phishing Attacks and Protection Against Them

The article serves as a baseline starting position for phishing research for No Phishing Zone as it acts as an investigation into the stages of a phishing attack.   The article seeks to compile as many types of phishing as the authors can find.  Ransomware, clickjacking, and cryptojacking are covered and explained, but these serve as only tangential topics to our project.  This is because No Phishing Zone seeks to curb the initial phish attempt via email, whereas the aforementioned attacks often result as a secondary stage following an email phishing.  The research questions for the authors are what existing phishing types have been found, and what advice can we provide about them.  

The core takeaway from the article is the analysis on common signs for a phish.  The first is that the subject, body, or attached files “create a situation of urgency” which causes the target to move quickly and recklessly.  The second, that uncommon requests for information (such as PII or financial data) occur via email, as those are not commonly done via email in any context.  Third, that the email contains offers too good to be true.  Fourth, an uncommon request to shirk known policy or conventions.  And fifth, the syntax and style of the mail differ from known styles of the perceived sender.

_M. A. Ivanov, B. V. Kliuchnikova, I. V. Chugunkov and A. M. Plaksina, "Phishing Attacks and Protection Against Them," 2021 IEEE Conference of Russian Young Researchers in Electrical and Electronic Engineering (ElConRus), 2021, pp. 425-428, doi: 10.1109/ElConRus51938.2021.9396693._

### NoFish; Total Anti-Phishing Protection System


The authors of NoFish seek to bridge the gap between phishing attacks and the end-user, similarly to how No Phishing Zone is proposed to operate.  The overarching research issue is that existing web toolsets for phishing protection were found to be either lacking or spare in number.  That, in conjunction with the understanding that security awareness training does not account for every scenario, motivated the authors to begin their research.  The NoFish teams’ proposed solution is a robust suite of add-ins for web browsers and Microsoft Outlook that can deter possible phishing attacks, from DNS related attacks, to faulty URLS, to suspicious language.  They were able to achieve running list of potential whitelisted websites to trust by integrating with Alexa, and were able to determine a running list of potential blacklisted URLS via Phish Tank integrations.  Knowing this does not allow for dynamic user browsing, there are also an internally generated lists determined by the user.

This project is seen as significant as matches a number of goals of No Phishing Zone, which its approach and its understanding of the current literature.  However, despite language in their report about availability of these systems, neither the described Chrome extension nor the MS Outlook Add-in are available at present time.

_D. Niroshan Atimorathanna, T. Shehan Ranaweera, R. A. H. Devdunie Pabasara, J. Rukshila Perera and K. Yapa Abeywardena, "NoFish; Total Anti-Phishing Protection System," 2020 2nd International Conference on Advancements in Computing (ICAC), 2020, pp. 470-475, doi: 10.1109/ICAC51239.2020.9357145._


# Technical Plan
