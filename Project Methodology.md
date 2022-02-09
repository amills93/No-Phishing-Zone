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


# Technical Plan
