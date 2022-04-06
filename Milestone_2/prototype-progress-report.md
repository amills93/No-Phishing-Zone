Project realization - Clearly document your efforts towards achieving the project methodology.
- Identify tasks achieved from your backlog
- Document the product increments (an agile term for the things you produce) generated in this milestone
- Bind tasks, code artifacts, and documentation together

The bulk of the project work is centered on realizing the methodology you defined in Milestone 1. Here, you should identify the tasks you have achieved, document the product or other intellectual/applied outcomes that have resulted from your efforts, and bind your tasks to the outcomes and documentation you have produced so far.

Be productive, work towards completing your process, and document what you do. Documentation towards project realization will come in the form an intermediate project report. 

# Progress Report 4/10/2022
## Overview

After first identifying what the project could be, it was then incrementally improved upon in weekly iterations.  The project first began with how to succesfully set up and package a Chrome Extension that the browser will accept.  Then, the goal pivoted toward getting DOM file of a web page ingested by the extension.  Once ingested, making sense of the DOM file proved difficult.  The core features sought to be explored for the final deliverable in Milestone 3 require certain levels of parsing for this data.

## Outcomes

During this period, we succesfully packaged a Chrome Extension that runs in the browser.  As well, the application succesfully reads in and parses an email from within an online web client.

* Succesuful Chrome Extension
* Extension reads in web email
* Extension parses certain data from webmail

## Hinderances
The intial challenge discovered was the extreme levels of obfuscation involved in modern web email services.  Our original assumptions about the human readability of such webmail services were a notable setback.  The DOM, once ingested, is not casually readable but needed further understanding of web development as well as better tooling for our development.  The tags within the DOM, even if readable, are unintuitive to a novice and thus required better tooling such as jQuery to filter through them.  The technical nature of ingesting the FROM email address of a given email also proved to be more difficult than imagined due to the intense obfuscation in the online mail client.

## Ongoing Risks

The table below is an updated version of what we first proposed in Milestone 1

|Risk name (value)   | Impact     | Likelihood | Description |
|-------------------|------------|------------|-------------|
|Limited Timeline (48) | 8 | 6 | Project scope exceeds time considerations |
|Lack of Web Dev Experience (36) | 9 | 4 | As web development novices, problems might arise from this lack of expereince  |
|Scheduling Issues (18) | 6 | 3 | With each member having active personal, academic, and work lives, there might be issues coming together to meet and work |
|Product Ineffectiveness (8) | 4 | 2 | Despite earnest intentions, it is possible for an end product to not reach the desired usage functionality as originally intended  | 
|Chrome Extension Changes (10) | 10 | 1 | Should Google change their coding syntax, usage rights, or developer mode availability, the project would need to pivot elsewhere  |

