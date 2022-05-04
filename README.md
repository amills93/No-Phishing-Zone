# No Phishing Zone

- [Executive Summary](#executive-summary)
- [Project Goals](#project-goals)
- [Project Methodology](#project-methodology)
- [Results & Findings](#results-and-findings)
- [Install Instructions](#install-instructions)
- [Meeting Notes](https://github.com/amills93/No-Phishing-Zone/tree/main/MeetingNotes)
- [Contributor Information](#contributors)
- [Milestone 1 Folder](https://github.com/amills93/No-Phishing-Zone/tree/main/Milestone_1)
- [Milestone 1 Recorded Video](https://use.vg/eRSDe9)
- [Milestone 2 Folder](https://github.com/amills93/No-Phishing-Zone/tree/main/Milestone_2)
- [Milestone 2 Recorded Video](https://use.vg/52Yw98)
- [Milestone 3 Folder](https://github.com/amills93/No-Phishing-Zone/tree/main/Milestone_3)
- [Milestone 3 Recorded Video](https://app.vidgrid.com/view/CIyM4sw59CXE/)

## Executive Summary
Phishing, smishing, vishing… these attacks are often among the most simplistic to perform by malicious actors, and yet they can often have the most damaging consequences. Ransomware is on the rise, especially in the COVID-19 pandemic era, but did you know that a huge portion of ransomware attacks start with a simple phish? Most social engineering attacks follow the shotgun approach, meaning the attacker likes to send as many of them as possible in order to get a catch. Between a lack of focus and a lack security training, the average Joe is unlikely to spot the difference between a fake link and a real one.  

In a large business organization, an end-user might be instructed to undergo security awareness training courses to instill safe practices for working in the digital age.  But apart from those people, the average person does not receive any kind of training.  What if we could bridge this knowledge gap with security awareness tooling?

No-Phishing-Zone is a Google Chrome extension designed to scan for commonly used social engineering tricks and identify suspicious sending domains and perform link validation while a user browses their Google Mail. No-Phishing-Zone will flag those suspicious items and notify the user of the malicious intent by highlighting the URL or Email as green or red, leaving the option to continue up to the user. Often users are merely trying to live their lives and do things as quickly as possible, so any tool that helps them stay safe is a good one.  No-Phishing-Zone is meant to supplement a user’s safe browsing habits and catch suspicious behaviors which may have slipped by them.

## Project Goals
*	Assist in vetting links as legitimate or as suspected to be malicious
*	Very that the sender of the email is not spoofing an address
*	Increase the overall safe email browsing habits of a user, without having the ability to walk them through a cybersecurity training course

## Project Methodology
We initially started out with trying to create a cross browser extension that can ingest the currently open email and identify grammar errors, malicious links, and see if the email came from a malicious sender across multiple web email clients. Upon starting the project we began to realize that creating a cross browser extension would not be feasible due to the semesters time constraint so we opted for a Google Chrome Extension. Similarly we decided that we would not be able to have the extension work across multiple web mail clients do to the obfuscation of `class` and `id` variables and eventually decided upon crafting our extension to work with the Google Mail web client. We worked on identifying the emails sender address and all URLS inside the body of the email and eventually decided to scope out the identification of grammar errors due to the difficulty of parsing the Gmail DOM. We also decided to use an API over a static allow/deny lists in order to get real time results and not have to manually update the lists. As a team we worked to identify the different `class` and `id` tags for the email and body, validate them against and API, and adjust the CSS based on the API response. We were able to build a workable chrome extension that can analyze to content of a Google Email inside the Google Mail Web Client and highlight malicious URLs or sender emails as red and valid URLs and emails as green.

## Results and Findings
During this milestone and after feedback from the professor in Milestone 2 we began researching different APIs to move away from static allow and deny lists. Most of the APIs we looked at required a paid subscription or just produced a text/csv file of known malicious links. We found a free API from [IPQualityScore](https://www.ipqualityscore.com/) that lets users register for an account and receive up to 200 API calls a day and 5000 API calls a month.

* Ingest and the DOM content of a Google Email
* Identify the email and body sections of an email from the DOM
* Identify the class or ID name of the senders email and email body
* Successfully parse the DOM and store the email and URLs in the email body
* Identify an API that can validate and analyze emails and URLs
* Validate email against an API
* Validate URLs in the Body of the email against an API
* Manipulate the CSS of the senders email and the URLs in the email body based on validation results

### Testing and Verification
The team decided to conduct only developmental testing because of time constraint, however, the project team ensured that testing and verification of the solution produced the expected outcome. The outcome come of the testing and verification is as shown below, though we did not involve the use of external tester but supervisory validation which was observed during the development of the solution. In addition, no case study was conducted but we hope that during our futuristic update, we will involve some external users and possibly both professionals and non-professional tester to review the usability and conduct survey to rate features and capabilities or impact the solution have on no savvy technology users.

### Future Work
The email and URL API endpoints offer more options that a future user could easily implement in our Chrome Extension to provide more of an analysis, to see the full list of supported API response fields refer to the [Email API Documentation](https://www.ipqualityscore.com/documentation/email-validation/overview) and [URL API Documentation](https://www.ipqualityscore.com/documentation/malicious-url-scanner-api/overview). Future work could expand on what we did by implementing a more robust analysis of an email address or URL.

Due to the timeframe of the semester we had to limit our scope to only focus on Chrome Extensions and the Google Email Web Client. Future work can further develop our Extension and expand support to other web browsers and other email web clients. Due to the obfuscation of the DOM elements that identify the senders email address and the body of the email we were only able to identify the `class` and `ids` for Google Emails. However we were able to verify that these `class` and `ids` are unique to all Gmail accounts across multiple browsers. Future researchers can identify the same unique identifiers and apply support to online mail clients like Outlook or Yahoo. Our extension does not analyze attachments in emails, future work can be done to vet the authenticity of an attachment and see if it is malicious or not. Currently we just rely on the fact that if the email is from a suspicious sender it is assume the attachment is malicious. We also used version 2 of the `manifest.json` due to its support of background pages and more importantly `jQuery`. Future work would see that the `manifest` version is updated to version 3, however that would require more time since we would have to re-work how our application does API calls in the background page. [Manifest version 2](https://developer.chrome.com/blog/mv2-transition/) is currently will be end of life (EOL) as of January 2023.

## Install Instructions
### Requirements
* [Google Mail Account](https://support.google.com/mail/answer/56256?hl=en)
* [Google Chrome Browser](https://www.google.com/chrome/index.html?msclkid=f61664c0b52a11eca13a87e11c8e1852)
* [IPQualityScore Account](https://www.ipqualityscore.com/create-account) for API Key
* [IDE Like Atom](https://atom.io/) or any Text Editor
* [Git Bash](https://git-scm.com/downloads)

### Installation Instructions
Refer to the links above for installation instructions for the required software.

### Getting started
1. Clone the No-Phishing-Zone GitHub Repository `git clone https://github.com/amills93/No-Phishing-Zone.git`
2. Get API Key from [IPQualityScore](https://www.ipqualityscore.com/create-account) Account
3. Navigate to the `background.js` file and input your API Key in the email and URL `json` calls `<API_KEY>`
4. Open the Google Chrome Web browser
5. Navigate to the Chrome Extension Page `chrome://extensions/`
6. In the upper right hand corner enable `Developer Mode`
7. Select `Unpack Extension`
8. When File Explorer opens navigate to and select the `No-Phishing-Zone` folder in the `No-Phishing-Zone` GitHub folder
9. Once the extension is enabled navigate to a Google Mail (Gmail) Account and open an email
10. Feel free to open a PR on our [GitHub Page](https://github.com/amills93/No-Phishing-Zone) for any bug fixes or improvements

## Contributors
* cms-WebDesign - Chris Schmitt
* amills93 - Adam Mills
* BigElkHunter - Dylan Redden
* ugbebor - Dennis Ugbebor
