# Collaborative Text Editor
This tool was developed as proof of concept. Operational Transform (OT) algorithm is used to concurrency control in collaborative editing of plain text documents. 

## Important
Most important key takeaway is concurrency handling. When many users log into the system, chances of overwriting others changes are high. So Operational Transform (OT) algorithm comes in handy to address that issue.
For this software module I used ot.js npm package for concurrency handling.
* pug HTML template engine use to generate UI.
* oAuth integration with Google API
* Mugg Texteditor

## Installation
* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`


## Running / Development
* `npm run dev`
* Visit your app at [http://localhost:3000](http://localhost:3000).
