# meet

## Objective

Build serverless, progressive web app (MEET) that fetches data from the Google Calendar API
- Serverless: No backend maintenance, easy to scale, always available, no cost for idle time
- PWAs: Instant loading, offline support, push notifications, “add to home screen” prompt, responsive design, and cross-platform compatibility

## User Stories and Scenarios

Can be found [here](https://github.com/Luisa-Inc/meet/blob/main/230120_meet_User%20Stories%20and%20Scenarios.pdf)

## Technologies used

- React
- TDD
- Google Calendar API
- OAuth2 flow
- AWS lambda
- authorization server
- React axios and async/await
- alert system using an OOP approach 


## Key Features

- Filter events by city
- Show/hide event details
- Specify number of events
- Use the app when offline
- Add an app shortcut to the home screen
- View a chart showing the number of upcoming events by city


## Technical Requirements

- The app is a React application
- The app is built using the TDD technique
- The app uses the Google Calendar API and OAuth2 authentication flow
- The app uses serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server
- The app’s code is hosted in a Git repository on GitHub
- The app works on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11
- The app displays well on all screen sizes (including mobile and tablet) widths of 1920px and 320px
- The app passes Lighthouse’s PWA checklist
- The app works offline or in slow network conditions with the help of a service worker
- The users are able to install the app on desktop and add the app to their home screen on mobile
- The API call used React axios and async/await
- The app implements an alert system using an OOP approach to show information to the user
- The app makes use of data visualization 
- The app is covered by tests with a coverage rate >= 90%
- The app is monitored using an online monitoring tool
