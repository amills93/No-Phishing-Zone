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
## Background
Issue of phishing
- Definition of phishing.
- Brief history of phishing.
## Introduction
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
## Methodology
-	Explain Methodology of the browser extension .
-	Include diagrams from M2.
-	Issues encountered.
## Results
-	Effectiveness of browser extension.
-	Advantages of using No Phishing Zone.
## Conclusion and future work
- Conclusion
- Future Work - Partial Written but may need to expand more on what is currently written on the [finalreport.md](https://github.com/amills93/No-Phishing-Zone/blob/main/Milestone_3/finalreport.md#future-work) i.e.
	* Add support for [Manifest V3](https://developer.chrome.com/blog/mv2-transition/) (requires more work since qQuery is no longer supported in background.js which is why we chose V2)
	* Implement more features offered by [IPQualityScore](https://www.ipqualityscore.com/documentation/overview) and discuss the other API responses that are offered
	* Implement a reporting feature to report malicious links/emails not caught by our app
	* Provide cross browser support (i.e. Mozilla, Edge, etc...)
	* Provide cross mail client platform (Outlook, Yahoo, etc)
## Citations
