# No Phishing Zone

- [Executive Project Summary](#executive-project-summary)
- [Technical Plan](#technical-plan)
- [Proposed Project Timeline](#proposed-project-timeline)
- [Risk List](#risk-list) 
- [Project Methodology](Project%20Methodology.md#literature-review)
- [Resources & Technology needed](#resources-needed)

# Executive Project Summary

Phishing, smishing, vishing… these attacks are often among the most simplistic to perform by malicious actors, and yet they can often have the most damaging consequences. Ransomware is on the rise, especially in the COVID-19 pandemic era, but did you know that a huge portion of ransomware attacks start with a simple phish? Most social engineering attacks follow the shotgun approach, meaning the attacker likes to send as many of them as possible in order to get a catch. Between a lack of focus and a lack security training, the average Joe is unlikely to spot the difference between a fake link and a real one.  

In a large business organization, an end-user might be instructed to undergo security awareness training courses to instill safe practices for working in the digital age.  But apart from those people, the average person does not receive any kind of training.  What if we could bridge this knowledge gap with security awareness tooling? 

No-Phishing-Zone is a Google Chrome extension designed to scan for commonly used social engineering tricks and identify suspicious sending domains, language, key triggers, and perform link validation while a user browses the internet. No-Phishing-Zone will flag those suspicious items and notify the user of the malicious intent leaving the option to continue up to the user. Often users are merely trying to live their lives and do things as quickly as possible, so any tool that helps them stay safe is a good one.  No-Phishing-Zone is meant to supplement a user’s safe browsing habits and catch suspicious behaviors which may have slipped by them.

The specific goals for No-Phishing-Zone are to deliver a tool that:
*	Assists with spotting suspicious language which may be a social engineering attempt
*	Assist in vetting links as legitimate or as suspected to be malicious
*	Very that the sender of the email is not spoofing an address
*	Increase the overall safe browsing habits of a user, without having the ability to walk them through a cybersecurity training course

# Technical Plan

As the initial stages of research concludes, our team will move toward developing an introductory “Hello World” Google Chrome Extension, so each member of the team can familiarize themselves with Google Extension Development. Once the initial “Hello World” extension has been completed, we begin working on the first part of our extension, which is to read in the currently opened webpage of the user. Once the webpage is read, No-Phishing-Zone will identify if the currently open page is a web-based mail client (i.e., Outlook.com, Yahoo.com, mail.google.com) and will begin processing the data on the webpage.  Chrome extensions can be set up to run upon invocation of extension’s icon on the browser or set to run automatically in the background.  The previously described functionality of running only when the user is on a web client domain will require an initial URL check from the extension to know whether to continue with the rest of the extension’s processes.

No-Phishing-Zone will process the data from a web-based mail client and the extension will parse the data and identify any phishing attempts. It will start by looking at the sender’s email address and will notify the user if the sender’s email appears to be spoofed or malicious. There have been instances where the sender’s email will appear as support@apple.com in the mail client but upon clicking “Reply” the email address will appear as menanti@tokosepatuubaruu.com or something similarly malicious. Our extension will be able to identify this and alert the user of the sender’s actual email address.

Once the email address has been verified the extension will begin analyzing the subject and body of the message looking for suspicious language, and links to other websites. Grammar and spelling errors will be identified, and the user will be alerted of the errors and the extension will recommend ignoring the email should it be deemed sufficiently suspicious.  The browser extension will not offer remediation or act, but only make recommendations as an alert system.  Analyzing text for social engineering red flags is a large task which is prone to errors, so only recommendations can be made.  Any links to external websites in the email will be checked and verified to ensure that they are not taking the user to a malicious phishing website. If a user receives an email from a company like T-Mobile, the extension will vet the domains in the body and ensure that they are going to valid T-Mobile domains and not a Google Site or phishing website and will notify the user of the suspicious domain.

Our extension will work as an alert tool and is not designed to block or prevent the user from performing an action. It is designed as a tool that can be used by standard users to help them safely browse and read emails daily. We plan on using JavaScript, HTML, and CSS as our tech stack since it is widely supported in Google Chrome Extension Development.  JavaScript will be used to process and parse the webpage while HTML and CSS will be used for the notification feature. We will need to be careful and follow Google Chromes Extension Develop guidelines in how we notify the user and ensure we are not creating more spam.

### Proposed Project Timeline

See [Timeline.md](Timeline.md#proposed-project-timeline) for further detail

![image](https://user-images.githubusercontent.com/89640335/154189951-766c152d-0372-494f-8ab0-3187970ab68b.png)

# Risk list

|Risk name (value)   | Impact     | Likelihood | Description |
|-------------------|------------|------------|-------------|
|Limited Timeline (24) | 8 | 3 | Project scope exceeds time considerations, see below  |
|Lack of Web Dev Experience (45) | 9 | 5 | As web development novices, problems might arise from this lack of expereince, see below  |
|Scheduling Issues (20) | 5 | 4 | With each member having active personal, academic, and work lives, there might be issues coming together to meet and work |
|Product Ineffectiveness (16) | 4 | 4 | Despite earnest intentions, it is possible for an end product to not reach the desired usage functionality as originally intended  | 
|Chrome Extension Changes (40) | 10 | 4 | Should Google change their coding syntax, usage rights, or developer mode availability, the project would need to pivot elsewhere  |

### Limited Timeline 
Due to the length of the semester we are limited to a little over 12 weeks of development time for our extension. In order to mitigate this risk we will utilize the principles of Agile for our software development and project management. Agile gives us the ability to monitor the progress of our project while giving us the ability to create and respond to change. With the agile method we will be able to monitor the progress of our project and adjust the scope as needed due to the timeline constraint of the semester.

### Lack of Web Dev Experience
Our team has no knowledge in the development of Google Chrome Extensions however we will mitigate the risk by taking the introductory courses provided by Google on how to develop Chrome Extensions. We will also be using the principals of Agile for our software development and project management so we can dynamically react to change in the event developing a Chrome Extension proves more difficult than what we originally planned on. Google and the internet provide plenty of resources so we can mitigate the risk.

# Resources Needed

The following resources have been identified as critical to the success of this project.

|Resource  | Dr. Hale needed? | Investigating Team member | Description |
|-------------------|---------|---------------------------|-------------|
|Research databases| No | All | UNO Library allows access to critical resource databases such as IEEE and JSTOR  |
|Programmning IDE | No | Adam | All members will need access to a useful IDE for beginner web development |
|Github  | No | Adam | Github repository will be needed to compile production code and project documents |
|Chrome Web Browser  | No | All | All members will need access to Chrome and its developer mode |
|Web Development Expertise  | Yes | All | Throughout devlopment, Dr Hale will be a key advisor on roadblocks and best practices |
|Test Dataset  | No | All | Once the extension is developed, we will need test emails to test the extensions functionality.|

