
# Progress Report 4/10/2022
## Overview

After first identifying what the project could be, it was then incrementally improved upon in weekly iterations. The project first began with how to successfully set up and package a Chrome Extension that the browser will accept. Then, the goal pivoted toward getting DOM file of a web page ingested by the extension. Once ingested, making sense of the DOM file proved difficult. The core features sought to be explored for the final deliverable in Milestone 3 require certain levels of parsing for this data.

## Outcomes

During this period, we successfully packaged a Chrome Extension that runs in the browser. As well, the application successfully reads in and parses an email from within an online web client.

* Successfully Created Chrome Extension
* Extension reads in Sender Email Address email
* Extension reads in Senders Name
* Extension reads in URLs in Email Body

## Hinderances

The initial challenge discovered was the extreme levels of obfuscation involved in modern web email services. Our original assumptions about the human readability of such webmail services were a notable setback. The DOM, once ingested, is not casually readable but needed further understanding of web development as well as better tooling for our development. The tags within the DOM, even if readable, are unintuitive to a novice and thus required better tooling such as jQuery to filter through them. The technical nature of ingesting the FROM email address of a given email also proved to be more difficult than imagined due to the intense obfuscation in the online mail client. Another hindrance has been tags from ingested email content are specific to Gmail, thus not cross compatible with other mail clients. Because of this, scope had narrowed down to only focusing on Gmail-type emails. Validating the email address of a potential malicious sender has also proven difficult, which has led us toward building an allow list of addresses. Open source, available allow lists are more difficult to acquire than originally thought. The lack of availability of easily acquired allow lists also applies to URL validation regarding validating malicious URLs. Overall, a general lack of exposure of our team web development and Chrome Extension development caused much of these problems. For example, certain bugs in our background.js file led us to research showing that we needed to utilize Content Scripts for certain tasks. Navigating through the messy tree structure of a Gmail class system is another such example of lack of experience leading to confusion.

## Ongoing Risks

The table below is an updated version of what we first proposed in Milestone 1

|Risk name (value)   | Impact     | Likelihood | Description |
|-------------------|------------|------------|-------------|
|Limited Timeline (48) | 8 | 6 | Project scope exceeds time considerations |
|Lack of Web Dev Experience (36) | 9 | 4 | As web development novices, problems might arise from this lack of experience  |
|Scheduling Issues (18) | 6 | 3 | With each member having active personal, academic, and work lives, there might be issues coming together to meet and work |
|Product Ineffectiveness (8) | 4 | 2 | Despite earnest intentions, it is possible for an end product to not reach the desired usage functionality as originally intended  | 
|Chrome Extension Changes (10) | 10 | 1 | Should Google change their coding syntax, usage rights, or developer mode availability, the project would need to pivot elsewhere  |

