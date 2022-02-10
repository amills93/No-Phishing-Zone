# Literature Review

### Phishing Attacks and Protection Against Them

The article serves as a baseline starting position for phishing research for No Phishing Zone as it acts as an investigation into the stages of a phishing attack.   The article seeks to compile as many types of phishing as the authors can find.  Ransomware, clickjacking, and cryptojacking are covered and explained, but these serve as only tangential topics to our project.  This is because No Phishing Zone seeks to curb the initial phish attempt via email, whereas the aforementioned attacks often result as a secondary stage following an email phishing.  The research questions for the authors are what existing phishing types have been found, and what advice can we provide about them.  

The core takeaway from the article is the analysis on common signs for a phish.  The first is that the subject, body, or attached files “create a situation of urgency” which causes the target to move quickly and recklessly.  The second, that uncommon requests for information (such as PII or financial data) occur via email, as those are not commonly done via email in any context.  Third, that the email contains offers too good to be true.  Fourth, an uncommon request to shirk known policy or conventions.  And fifth, the syntax and style of the mail differ from known styles of the perceived sender.

_M. A. Ivanov, B. V. Kliuchnikova, I. V. Chugunkov and A. M. Plaksina, "Phishing Attacks and Protection Against Them," 2021 IEEE Conference of Russian Young Researchers in Electrical and Electronic Engineering (ElConRus), 2021, pp. 425-428, doi: 10.1109/ElConRus51938.2021.9396693._

### NoFish; Total Anti-Phishing Protection System


The authors of NoFish seek to bridge the gap between phishing attacks and the end-user, similarly to how No Phishing Zone is proposed to operate.  The overarching research issue is that existing web toolsets for phishing protection were found to be either lacking or spare in number.  That, in conjunction with the understanding that security awareness training does not account for every scenario, motivated the authors to begin their research.  The NoFish teams’ proposed solution is a robust suite of add-ins for web browsers and Microsoft Outlook that can deter possible phishing attacks, from DNS related attacks, to faulty URLS, to suspicious language.  They were able to achieve running list of potential whitelisted websites to trust by integrating with Alexa, and were able to determine a running list of potential blacklisted URLS via Phish Tank integrations.  Knowing this does not allow for dynamic user browsing, there are also an internally generated lists determined by the user.

This project is seen as significant as matches a number of goals of No Phishing Zone, which its approach and its understanding of the current literature.  However, despite language in their report about availability of these systems, neither the described Chrome extension nor the MS Outlook Add-in are available at present time.

_D. Niroshan Atimorathanna, T. Shehan Ranaweera, R. A. H. Devdunie Pabasara, J. Rukshila Perera and K. Yapa Abeywardena, "NoFish; Total Anti-Phishing Protection System," 2020 2nd International Conference on Advancements in Computing (ICAC), 2020, pp. 470-475, doi: 10.1109/ICAC51239.2020.9357145._

### Rule-based Phishing Detection Method

This article opens with a summery of current phishing prevention tactics and tools, and then expands into a novel forked approach of features to help catch phishing attacks while browsing the web. This article clearly points out that previous research does not show any tools that are independent of search engine/ 3rd party data or are able to detect novel (zero-day) phishing attacks and are able to be used with any human language on a web browser. The features that were developed mimic the logic of the Support Vector Machine (SVM) Algorithm with decision trees when verifying different aspects of a webpage. The result was that this technique got a 98% success of identifying phishing attempts.

The core takeaway from the article is that a successful phishing detection tool can be made to be independent of search engine or 3rd party data, be able to detect novel (zero-day) phishing attacks and be able to be used with any language on a web browser. As this is a novel invention at the time of publishing, there are limitations; non-HTML code cannot be ran through the tool, and that phishing websites are mimics of known safe websites (no novel websites made just for the attack). This is because the feature sets that are purposed comb though the DOM and extract all data from there. 

Moghimi, M., & Varjani, A. Y. (2016). New rule-based phishing detection method. Expert Systems with Applications, 53(1), 231–242. https://doi.org/10.1016/j.eswa.2004.10.010 

### Hidden URL investigation

This article takes a deep dive on the specific issue of hidden/abbreviated/redirected URL phishing attacks. This is done by looking at all URLs that are listed on a webpage and then parsing down the URL into the different sections of the URL standard, and then investigating each part against a database of known good and bad domains. A directory of known expressions and words is a part of the web plug in and is used to check a new URL against. A publicly available package called Enchant is used to parse out strings of words into the different sub words that are used. This article takes a couple new approaches (Word Vectors, Nuro-language pathways, and a hybrid of the two), along with picking up where old tools are found lacking. Namely, URL scanning for random characters, combined word usage, cybersquatting, and typosquatting, to help identify malicious URLs. 

As hidden/shortened/redirected URL phishing attacks is on the rise, this article shows that a novel tool can be made/used to detect and label phishing websites and URLs. The article does make a good point that there is no worldwide acceptable test for phishing systems or list that can be used to test new tools against, could one be made for research and testing purposes? It is noted that this method does take some time to work, and that with the use of deep learning could be made much faster as the investigation of each URL can then be shortened dramatically.

Sahingoz, O. K., Buber, E., Demir, O., & Diri, B. (2019). Machine learning based phishing detection from urls. Expert Systems with Applications, 117, 345–357. https://doi.org/10.1016/j.eswa.2018.09.029 

### ReputationBox

ReputationBox is a client or server-based tool designed to integrate with a mail server in order to analyze email reputation based on the people, topic, or action features. People features focus on the relationship between the sender and recipient and checks to see if the sender has received mail from the recipient before and looks at who else is addressed in the email and the average time of reply. Topic features focus on the topics and activities discussed in the email using a word-space model. The action feature acts as the recommendation feature and will propose certain actions to the user based on the contents of the email. 

The client version is installed via a plugin inside the user’s mailbox and will analyze mail as it is received or as a server which is configured to periodically scan email. Once the mail is scanned the tool will verify the sender’s authenticity (reputation), store the results, and present them to the user with a set of recommended actions. 
The paper did not go into the technical details of the ReputationBox tool however it does propose several ideas of what our tool could possibly do. The project is simple and focuses on a few key metrics (sender/receiver communication, use of a word space model) that are going to be important when we start planning out features for our tool. The recommendation feature highlighted a potential option that our tool could do when it identifies a piece of malicious mail.

D. Jayakody and G. Dias, "ReputationBox: A system to analyse importance of emails and reputation of email senders," 2014 14th International Conference on Advances in ICT for Emerging Regions (ICTer), 2014, pp. 255-255, doi: 10.1109/ICTER.2014.7083913.

### New Filtering Approaches for Phishing Emails

The paper focuses on using a content-based filtering approach to detect several common tricks known for producing phishing attacks. The filtering approach would identify and label emails as spam, ham (legitimate), or phishing. The article highlights the differences between spam and phishing emails by noting that spammers simply want to 'deliver a message pretending to be from a reputable sender' and often use typos to bypass spam filters. The paper discussed two types of phishing attacks, malware-based and deceptive, but focused on deceptive phishing attacks. Deceptive phishing attacks can be broken into six categories: Social engineering, mimicry, email spoofing, URL hiding, Invisible content, and Image content. 

The article presented an interesting idea of breaking phishing emails into two categories: Deceptive Phishing and Malware Based Phishing. Malware-based phishing attacks include the use of malicious software spread by a deceptive email while with deceptive phishing the phisher pretends to come from a reputable institution. Typically, the phisher will coerce or trick the user into clicking a malicious link that takes the user to a fraudulent site. The article also highlighted how blacklisting and whitelisting is not always the best approach due to how frequent phishing sites are created and how whitelists can produce false positives. 

Bergholz, A., De Beer, J., Glahn, S., Moens, M.-F., Paaß, G., & Strobel, S. (2010). New filtering approaches for phishing email. Journal of Computer Security, 18(1), 7–35. https://doi-org.leo.lib.unomaha.edu/10.3233/JCS-2010-0371

### DuoCircle 
DuoCircle is an enterprise-wide solution, designed as an advanced threat defense anti-no phishing tool that helps business organization to mitigate against phishing scams. According to the author, every day, there is an increasing number of phishing and spear fishing threats, which cause disruption and damaging loss of revenue to companies and target individuals worldwide.

These schemes are designed to trick business organization staff and target individuals into disclosing passwords, security credentials, corporate secrets, and other sensitive information that would normally remain private. The vast majority of hacking assaults against organizations and people today are the result of so-called phishing scams, especially with the pandemic effect, the trend is on the rise daily. 

This is currently commercially available and supported by google chrome, which I find very relevant and similar to our proposed solution and might provide insights into implementation, design guide for our proposed “No Phishing Zone” project and deployment.
“Advanced Threat Defense Protects Against Phishing Emails.” DuoCircle, www.duocircle.com/advanced-threat-defense. Accessed 10 Feb. 2022.
Source url: https://www.duocircle.com/phishing-protection/advanced-threat-defense-helps-your-organization-mitigate-phishing-scams


# Technical Plan
