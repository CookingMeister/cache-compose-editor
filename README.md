# cache-compose-editor

[![badge](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/mit)

## Description

This progressive web app (PWA) text editor provides a robust platform for note-taking and code snippet management with offline capabilities and data persistence.

## Installation

### To install and run this locally

- Clone this repository.

- Install multiple directory dependencies: `npm run install`

- Start the application: `npm start`.

- (Optionally) Start in development mode: `npm run start:dev`.

The PWA will now be running at [http://localhost:3000](http://localhost:3000).

- Other scripts can be found in the root directory package.json file for development purposes.

### To install the editor as a PWA

- Visit the deployed site in a browser that supports service workers.

- Click the install button and follow the prompt to add the app to your device.

The editor will now be available, even offline, as a standalone browser app and loads faster on subsequent visits.

## Features

- Edit text with syntax highlighting for JavaScript.
- Offline access and data persistence.
- Persistent data storage using local and session storage, cache storage, IndexedDB.
- Installable as a PWA (includes manifest and service worker).

## Usage

This is a versatile text editor that supports authoring and editing text documents or code. It offers syntax highlighting specifically for JavaScript, making it ideal for web development tasks. The editor implements automatic saving, leveraging both local storage and IndexedDB to ensure data persistence even when offline.  For broader accessibility, the application can be installed as a progressive web app (PWA) on desktops and mobile devices.

## Mock-up

The following image shows the web application's appearance and functionality:

## Live Site

A link to the deployed PWA can be found [here](www.).

## Credits

This app was created by [CookingMeister](https://github.com/CookingMeister) on criteria from the University of New Brunswick's [edX Coding Bootcamp](https://unb.ca/cel/bootcamps/coding.html) program with starter source code from [here](https://github.com/coding-boot-camp/cautious-meme). Program materials and [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app) were referenced for this API.

## Questions

If you have an questions about this PWA, please contact me at [LinkedIn](https://www.linkedin.com/in/shawn-meister-bb646b29a/). More of my work can be viewed at [Github](https://github.com/CookingMeister).

## License

[![badge](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/mit)

This project is open source and available under the MIT License.
