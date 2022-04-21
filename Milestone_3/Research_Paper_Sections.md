### These are the sections of the final research paper.
## Abstract (Basic research paper abstract and is the Executive Summery).
Phishing, smishing, vishing… these attacks are often among the most simplistic to perform by malicious actors, and yet they can often have the most damaging consequences. Ransomware is on the rise, especially in the COVID-19 pandemic era, but did you know that a huge portion of ransomware attacks start with a simple phish? Most social engineering attacks follow the shotgun approach, meaning the attacker likes to send as many of them as possible in order to get a catch. Between a lack of focus and a lack security training, the average Joe is unlikely to spot the difference between a fake link and a real one.
In a large business organization, an end-user might be instructed to undergo security awareness training courses to instill safe practices for working in the digital age. But apart from those people, the average person does not receive any kind of training. What if we could bridge this knowledge gap with security awareness tooling?
No-Phishing-Zone is a Google Chrome extension designed to scan for commonly used social engineering tricks and identify suspicious sending domains, language, key triggers, and perform link validation while a user browses the internet. No-Phishing-Zone will flag those suspicious items and notify the user of the malicious intent leaving the option to continue up to the user. Often users are merely trying to live their lives and do things as quickly as possible, so any tool that helps them stay safe is a good one. No-Phishing-Zone is meant to supplement a user’s safe browsing habits and catch suspicious behaviors which may have slipped by them.
The specific goals for No-Phishing-Zone are to deliver a tool that:
•	Assists with spotting suspicious language which may be a social engineering attempt.
•	Assist in vetting links as legitimate or as suspected to be malicious.
•	Very that the sender of the email is not spoofing an address.
•	Increase the overall safe browsing habits of a user, without having the ability to walk them through a cybersecurity training course.
## 1. Background
Issue of phishing
- Definition of phishing.
- Brief history of phishing.
## 2. Introduction
Framing issue of phishing as a behavioral problem, not entirely a technical one.
- Delay between attack and fallout from attack.
- Attackers’ techniques
•	Different types of attacks, and current state of situation should all be covered.
- How these attacks happen.
	- Why these attacks happen.
	- Genesis of our project idea and why defenses for these attacks are important.
- Impacts we believe this will have in the current situation
Related works
-	Brief recap of literature review.
## 3. Methodology
Over the course of the semester our projects scope was toned down due to our initial lack of web development experience and our unfamiliarity of Chrome Extension Development. We initially started out with trying to create a cross browser extension that can ingest the currently open email and identify grammar errors, malicious links, and see if the email came from a malicious sender across multiple web email clients. Upon starting the project we began to realize that creating a cross browser extension would not be feasible due to the semesters time constraint so we opted for a Google Chrome Extension. Similarly we decided that we would not be able to have the extension work across multiple web mail clients do to the obfuscation of `class` and `id` variables and eventually decided upon focusing on creating an extension that works with the Google Mail web client. Due to the difficulty of parsing the Google Mail DOM page we decided against the idea of identifying grammar errors and only focus on the senders email and any URLS in the body. The system context diagram below shows how the average user would interact with our extension. The extension will only execute when a user is inside the `https://mail.google.com/` domain.

![system context diagram](../Milestone_2/Diagrams/System-Context-Diagram.PNG)
### 3.1 Identifying the Emails Sender and Body
The next logical step was to identify the email senders address and all URLS inside the body of the email. To do this we exported a copy of the DOM to a text file and had to manually sort through the HTML code and look for the key elements. We found that Google Mail stores the senders email address under a `<span>` tag with a class of `go`. Attempting to identify the URLs inside the body of the email proved to be a more difficult task. We had to start at a paragraph or known URL in the body and work our way up to the outer most `<div>` tag while not including the URLs for the Inbox on the side or at the bottom of the webpage. Through a bit of trail and error and outputting different `<div>` classes or ids to the console we eventually discovered that the `<div>` tag with an id of `:2h` contained the body of the email. We confirmed with the other members of our team that the `go` class and `:2h` id were the same across accounts, browsers, and sessions before be began parsing the data inside the tags.

### 3.2 Windows Event Listeners
Chrome Extension utilize Content Scripts to execute JavaScript inside the context of a webpage by using the standard Document Object Model (DOM). (source: https://developer.chrome.com/docs/extensions/mv2/content_scripts/) We utilized content scripts to read in the elements from the `DOM` and make changes based on what the element is. Content Scripts rely on window events in order to execute code, so we had to add an event listener to look for `popstate` events since all of the opening of mail inside a mailbox stays within the `https://mail.google.com/mail/u/0/#` URL. We initially used the `load` event listener but discovered that only worked on page refreshes. Since the opening of a new mail does not trigger a `load` event we had to listen for active history entry changes. (source: https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event) Due to refreshing the browser not triggering `popstate` event listener we had to keep the `load` listener so we can catch and execute our code on both events.   

### 3.3 Parsing the Email and URLs
Once the event listeners were set up and running we created a function to handle the email address and another function for the list of URLs inside the `content.js` file. Our `ValidateEmail` function took the `<span>` tag with the class `go` and stored the `innerText` of the object in a `String` after stripping off the `<` and `>` characters before attempting to validate it. The URLs are sent to the `ValidateURLS` function where we had to create a `NodeList` of all `a` tags in the URL object. We then looped through each `a` tag in the `NodeList` and attempted to validate.

### 3.4 Allow/Deny List vs API
Our initial plan was to use an allow and deny list of known malicious or known valid domains. We began attempting to build out our lists however we ran into a couple issues finding already created open source lists. Websites like https://PhishTank.com offered ways for users to verify if a link is a known phish but they required an account to access their API and registration was closed. (source: https://www.phishtank.com/) We were able to download a list of known phishing URLs from Phishtank but there were not timestamps showing the last time the list was updated. We were able to register for an API key through ThreatCenter Labs which allowed us to download a `.txt` file of known malicious domains that was said to be updated on a regular basis. (source: https://threatcenter.crdf.fr/) We eventually decided against the use of allow/deny list and found an API through IPQualityScore that allowed standard users to register for a free account with 200 API calls a day and 5,000 API calls a month. (source: https://www.ipqualityscore.com/) We decided to use an API over a static allow/deny lists in order to get real time results and not have to manually update the lists. The container diagram below shows how our extension will interact with the user, Google Mail client, and the IPQualityScore API.

![container diagram](../Milestone_2/Diagrams/Container-Diagram.PNG)

### 3.5 Validating Senders URL and Email Address
<NOTE: Still working on this Section>

 validate them against and API, and adjust the CSS based on the API response. We were able to build a workable chrome extension that can analyze to content of a Google Email inside the Google Mail Web Client and highlight malicious URLs or sender emails as red and valid URLs and emails as green. The component diagram listed below shows how our extension interacts with the users email client and the external API. Upon opening
![component diagram](../Milestone_2/Diagrams/Component-Diagram.PNG)

-	Explain Methodology of the browser extension .
-	Include diagrams from M2.
-	Issues encountered.
## 4. Results
-	Effectiveness of browser extension.
-	Advantages of using No Phishing Zone.
## 5. Conclusion and future work
- Conclusion
- Future Work - Partial Written but may need to expand more on what is currently written on the [finalreport.md](https://github.com/amills93/No-Phishing-Zone/blob/main/Milestone_3/finalreport.md#future-work) i.e.
	* Add support for [Manifest V3](https://developer.chrome.com/blog/mv2-transition/) (requires more work since qQuery is no longer supported in background.js which is why we chose V2)
	* Implement more features offered by [IPQualityScore](https://www.ipqualityscore.com/documentation/overview) and discuss the other API responses that are offered
	* Implement a reporting feature to report malicious links/emails not caught by our app
	* Provide cross browser support (i.e. Mozilla, Edge, etc...)
	* Provide cross mail client platform (Outlook, Yahoo, etc)
## Citations
