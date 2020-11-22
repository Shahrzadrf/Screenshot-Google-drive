# Screenshot-Google-drive
Automated Screenshot Generator

This is a sample project that shows how one can use the Google authentication, and also how to store
files in the user's Drive.

## To run this sample project on your computer

Just clone the repo, host the files on a web server of your choice and open index.html in a browser.

_Note:_ The app must listen on port 8080, because that is the only whitelisted origin

## To change the API project

* Register a new project at the [Google Developers Console](https://console.developers.google.com/project)
* Create a new Client ID for a Web Application
  * Add a valid origin
  * Take note of the Client ID
* Enable Drive API
* At the gapi-auth-service there is a client id, change it to your project's
