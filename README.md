# text-editor-pwa

## Purpose

To build a text editor that meets PWA criteria. 

## Description
 I built a text editor that will function offline and will feature a number of techniques that will serve as redundancies in case one of the options is not supported by the browser.



## Built with
* IndexedDB
* idb
* webpack
* workbox

## Website


## contribution
Made with ❤️ by Eric Schweitzer

&copy; Schweitzer Enterprises


Getting Started
For this project, you will not be starting from scratch. Just like the module project, you will be provided starter code.

To build on the skills learned in Lesson 2, you will work with webpackLinks to an external site., a module bundler for JavaScript that simplifies front-end web development to bundle JavaScript, and the webpack's HTMLWebpackPluginLinks to an external site. to generate an HTML page.

You will also use IndexedDB and idbLinks to an external site., a small wrapper that makes it easier to implement IndexedDB CRUD methods to add the ability to store structured data to the browser. If you find yourself stuck, review Lesson 3, where IndexedDB CRUD methods are covered.

To add offline functionality, you will use WorkboxLinks to an external site., which is a set of libraries that can generate a production-ready service worker for your Progressive Web App. Service workers were covered in Lesson 4.

Finally, in Lesson 5, you learned how to make your app installable and deploy in production mode. For this project, you will practice those skills by adding a manifest.json and then deploying your finished application with Heroku.

<!-- AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use -->

<!-- GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client-server folder structure
WHEN I run `npm start` from the root directory
THEN I find that my application should start up the back end and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB database
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using Workbox
WHEN I register a service worker
THEN I should have my static assets precached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application -->

<!-- You are required to submit the following for review:

The URL of the deployed application.

The URL of the GitHub repository, with a unique name and a README describing the project. -->

<!-- You will deploy this full-stack application to Heroku using the Heroku Deployment Guide on the Full-Stack Blog  link to heroku deployment guide in docs-->