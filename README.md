# Collaborative Text Editor
This tool was developed as proof of concept for online collaborative text editing and Operational Transform (OT) algorithm is used to handle concurrency operation such as Insert, Delete or Transformation when conflict occurred. 

## Important
Most important key takeaway is concurrency handling. When many users log into the system, chances of overwriting others changes are high. So Operational Transform (OT) algorithm comes in handy to address that issue.
For this software module I used ot.js npm package for concurrency handling.
* pug HTML template engine use to generate UI.
* oAuth integration with Google API
* Codemirror Texteditor

## What is OT
Operational Transform (OT) is a algorithem used to resolve conflict of collaborative editing. Basically there are three action involve in this algorithem.
* `Insert`
* `Delete`
* `Transformation`

## Installation
* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`

## Running / Development
* `npm run dev`
* Visit your app at [http://localhost:3000](http://localhost:3000).

## Resources I used for this project
* [Wiki for Operational Transform (OT) Agorithm](https://en.wikipedia.org/wiki/Operational_transformation)
* [OT.js GitHub](https://github.com/Operational-Transformation/ot.js/)
* [OT visualization](http://operational-transformation.github.io/visualization.html)
* [pugjs](https://pugjs.org/api/getting-started.html)
* [socket.io](https://socket.io/)
* [codemirror](https://codemirror.net/)
