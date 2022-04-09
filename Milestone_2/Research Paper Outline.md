# No-Phishing-Zone Outline

# Abstract
Phishing, smishing, vishing… these attacks are often among the most simplistic to perform by malicious actors, and yet they can often have the most damaging consequences. Ransomware is on the rise, especially in the COVID-19 pandemic era, but did you know that a huge portion of ransomware attacks start with a simple phish? Most social engineering attacks follow the shotgun approach, meaning the attacker likes to send as many of them as possible in order to get a catch. Between a lack of focus and a lack security training, the average Joe is unlikely to spot the difference between a fake link and a real one.

In a large business organization, an end-user might be instructed to undergo security awareness training courses to instill safe practices for working in the digital age.  But apart from those people, the average person does not receive any kind of training.  What if we could bridge this knowledge gap with security awareness tooling?

No-Phishing-Zone is a Google Chrome extension designed to scan for commonly used social engineering tricks and identify suspicious sending domains and email links while a user reads their email. No-Phishing-Zone will flag those suspicious items and highlight them in red if suspicious, yellow if unsure, and green if valid. Often users are merely trying to live their lives and do things as quickly as possible, so any tool that helps them stay safe is a good one.  No-Phishing-Zone is meant to supplement a user’s safe browsing habits and catch suspicious behaviors which may have slipped by them.


# Section 1: Introduction
### Issue of phishing
-    Definition of Phishing.
-    History of Phishing
-    Different kinds of attacks.
-    Current state and impact.
-    Analysis of our bibliography in relation to current state of phishing attacks.

### Frame issue of phishing as a behavioral problem.
-   Note disconnect between typical user action of clicking phishing link, and impacts/results that it has.
-   How it happens.
-   Why it happens.
-   Presentation of our main project idea.
-   Impacts we believe this will have in relationship to current state of user awareness and phishing attacks.

# Section 2: Research and Project
//What our research found:

### Current available tools for fighting phishing and educating users.
-   Cluster types of defenses for phishing
-   Tools – those we found in our research

### User education – KnowBe4 and Google Web Etiquette trainings.
-   Tools that we found in literature from our bibliography.
-   Analysis of our research and what the current tech is.

### How we found current tools lacking.
-   How we wanted a tool that did what our tool does but did not find one.

//No-Phishing-Zone Explanation
### Full explanation of what No-Phishing-Zone browser extension will do and won’t do and why.
### How it works and what it looks for:
-   Run all URLs found in the email against “our” database (Phishtank or similar public repo).
-   Flag blacklist URLs for user to see
-   Do nothing for whitelisted URLs

### Explain why we think our approach is beneficial, and how it would fix the behavioral issue earlier described.

# Section 3: Results
//What happened during our work on the project.

### Limitations we faced on the project.
-   How we came to only reading URLs from the DOM.
-   How/why we decided on Gmail email client.
-   Explain issues that we faced with Gmail obfuscation.
-   Coding issues around unknown languages and our inexperience with browser extensions.
-   List out issues that Christopher ran into with writing the add-on, and how we overcame them.
-   Why we think the tools we previously found/mentioned stopped where they did, due to the issues we have run into.

### Future work.
-   Broaden repos that the extension compares URLs to.
-   Become the Grammarly of phishing detection tools.

# Section 4: Conclusion
-   Overview of paper
-   Discussion on our results
