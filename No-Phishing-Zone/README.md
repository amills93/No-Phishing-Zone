## About No-Phishing-Zone
No-Phishing-Zone is a Google Chrome extension designed to scan for commonly used social engineering tricks and identify suspicious sending domains and perform link validation while a user browses their Google Mail. No-Phishing-Zone will flag those suspicious items and notify the user of the malicious intent by highlighting the URL or Email as green or red, leaving the option to continue up to the user. Often users are merely trying to live their lives and do things as quickly as possible, so any tool that helps them stay safe is a good one. No-Phishing-Zone is meant to supplement a user’s safe browsing habits and catch suspicious behaviors which may have slipped by them.

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
