
# Progress Report 4/10/2022
## Overview

After first identifying what the project could be, it was then incrementally improved upon in weekly iterations. The project first began with how to successfully set up and package a Chrome Extension that the browser will accept. Then, the goal pivoted toward getting DOM file of a web page ingested by the extension. Once ingested, making sense of the DOM file proved difficult. The core features sought to be explored for the final deliverable in Milestone 3 require certain levels of parsing for this data.

## Outcomes

During this period, we successfully packaged a Chrome Extension that runs in the browser. As well, the application successfully reads in and parses an email from within an online web client.

* Successfully Created Chrome Extension
* Extension reads in Sender Email Address email
* Extension reads in Senders Name
* Extension reads in URLs in Email Body
* Extension can manipulate the CSS of currently open Web page
* Extension can validate Senders Email based on Custom Regex

## Hinderances

The initial challenge discovered was the extreme levels of obfuscation involved in modern web email services. Our original assumptions about the human readability of such webmail services were a notable setback. The DOM, once ingested, is not casually readable but needed further understanding of web development as well as better tooling for our development process. The tags within the DOM, even if readable, are unintuitive to a novice and thus required us to manually identify class names for different sections of an email. The technical nature of ingesting the FROM email address of a given email also proved to be more difficult than imagined due to the intense obfuscation in the online mail client. Another hindrance is tags from ingested email content that are specific to Gmail, thus not cross-compatible with other mail clients. Because of this, our scope was narrowed down to only focus on Google Mail emails in the Google Mail web client. Validating the email address of a potentially malicious sender has also proven difficult, which led us toward building an allow and deny list of addresses. We were able to find several open source allow lists from various GitHub repos however they have been proving more difficult to acquire than originally thought. An example would be email addresses from UPS (ups.com) or RedFin (redfin.com) (which we know are not malicious) are being flagged as malicious because they are not on the allow lists. The lack of availability of easily acquired allow and deny lists also applies to URL validation regarding validating malicious URLs. We found several sites like threatcenter.crdf.fr and PhishTank, however these lists are not comprehensive and the api registration to PhishTank is currently closed. Overall, a general lack of exposure to web and Chrome Extension development caused most of these problems. For example, certain bugs in our background.js file led us to research showing that we needed to utilize Content Scripts for certain tasks. This was identified after spending several weeks working and debugging the background.js file. Navigating through the messy tree structure of a Gmail class system is another such example of a lack of experience leading to confusion.

## Ongoing Risks

The table below is an updated version of what we first proposed in Milestone 1

|Risk name (value)   | Impact     | Likelihood | Description |
|-------------------|------------|------------|-------------|
|Limited Timeline (48) | 8 | 6 | Project scope exceeds time considerations |
|Lack of Web Dev Experience (36) | 9 | 4 | As web development novices, problems might arise from this lack of experience  |
|Scheduling Issues (18) | 6 | 3 | With each member having active personal, academic, and work lives, there might be issues coming together to meet and work |
|Product Ineffectiveness (8) | 4 | 2 | Despite earnest intentions, it is possible for an end product to not reach the desired usage functionality as originally intended  |
|Chrome Extension Changes (10) | 10 | 1 | Should Google change their coding syntax, usage rights, or developer mode availability, the project would need to pivot elsewhere  |
