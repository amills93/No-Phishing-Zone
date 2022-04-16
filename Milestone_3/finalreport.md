# Final Report: Packaging and Release

An important part of developing or assessing a product is making the product or results accessible to those that might want to use it or them. This part of the final milestone tasks you with preparing your product, code, processes, and/or other relevant results for release by using relevant deployment strategies and by creating appropriate companion documentation. It is expected that every team will create a final report for release and review by partnering companies and organizations. All projects with code or other requirements must prepare a list of installation instructions and run instructions necessary to install and run any required apps. All projects examining existent systems must prepare a list of steps to reproduce their analysis.

## Code artifact Expectations
Polish your product by squashing as many bugs as possible and cleaning up the user interface.
Package your code and/or deployment environment for release using relevant deployment solutions such as github, docker, npm, bower, apt-get, Python pip, etc. The simplest deployment solution is creating a GitHub repository that is cloneable and has a few short install instructions. Other solutions like docker can be helpful in situations where the deployment environment context is complex or depends on certain versions of supporting software. Others like npm, bower, apt-get, or pip are useful for libraries that others might want to install or add to their own projects.
Create installation and getting started instructions using markdown in their repository or documentation to detail what an end-user must do to setup their app or product.
Results and findings Expectations
Summarize your results discovered over the life of the project.
Summarize findings as they relate to the original proposal in milestone 1. What worked, what didn't work? Where would future work be most useful?
The report should arrange documentation generated over the project timeline in a logical way that supports the summary. Think of the final report as a compilation of all of your work over the semester.
A suggested format for the final report is as follows:

# No-Phishing-Zone
## Executive Summary
Phishing, smishing, vishing… these attacks are often among the most simplistic to perform by malicious actors, and yet they can often have the most damaging consequences. Ransomware is on the rise, especially in the COVID-19 pandemic era, but did you know that a huge portion of ransomware attacks start with a simple phish? Most social engineering attacks follow the shotgun approach, meaning the attacker likes to send as many of them as possible in order to get a catch. Between a lack of focus and a lack security training, the average Joe is unlikely to spot the difference between a fake link and a real one.  

In a large business organization, an end-user might be instructed to undergo security awareness training courses to instill safe practices for working in the digital age.  But apart from those people, the average person does not receive any kind of training.  What if we could bridge this knowledge gap with security awareness tooling?

No-Phishing-Zone is a Google Chrome extension designed to scan for commonly used social engineering tricks and identify suspicious sending domains and perform link validation while a user browses their Google Mail. No-Phishing-Zone will flag those suspicious items and notify the user of the malicious intent by highlighting the URL or Email as green or red, leaving the option to continue up to the user. Often users are merely trying to live their lives and do things as quickly as possible, so any tool that helps them stay safe is a good one.  No-Phishing-Zone is meant to supplement a user’s safe browsing habits and catch suspicious behaviors which may have slipped by them.

## Project Goals
*	Assist in vetting links as legitimate or as suspected to be malicious
*	Very that the sender of the email is not spoofing an address
*	Increase the overall safe email browsing habits of a user, without having the ability to walk them through a cybersecurity training course

## Project Methodology
(specific methodology followed in the project, reuse from milestone 1/2, update if scope changed)

## Results / Findings
(brief overview of outcomes - what did you achieve?, list milestone 1/2/3 outcomes, make an effort to logically collect and organize the findings)

* Ingest and the DOM content of a Google Email
* Identify the email and body sections of an email from the DOM
* Identify the class or ID name of the senders email and email body
* Successfully parse the DOM and store the email and URLs in the email body
* Identify an API that can validate and analyze emails and URLs
* Validate email agaisnt an API
* Validate URLs in the Body of the email against an API
* Manipulate the CSS of the senders email and the URLs in the email body based on validation results

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

#### Submission materials
For this submission, you should submit your final report as a .md file called finalreport.md or README.md (to make it your default page) in your project GitHub repository. You should also convert the md file to pdf and upload it as finalreport.pdf for use on other non-web-based file stores.
