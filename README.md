# meet

## Objective

Build serverless, progressive web app (MEET) that fetches data from the Google Calendar API
- Serverless: No backend maintenance, easy to scale, always available, no cost for idle time
- PWAs: Instant loading, offline support, push notifications, “add to home screen” prompt, responsive design, and cross-platform compatibility

## User Stories and Scenarios

### FEATURE 1: FILTER EVENTS BY CITY

- Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities

o	Given user hasn’t searched for any city
o	When the user opens the app
o	Then the user should see a list of all upcoming events

- Scenario 2: User should see a list of suggestions when they search for a city

o	Given the main page is open
o	When user starts typing in the city textbox
o	Then the user should see a list of cities (suggestions) that match what they’ve typed

- Scenario 3: User can select a city from the suggested list.

o	Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
o	When the user selects a city (e.g., “Berlin, Germany”) from the list
o	Then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city

As a user
I should be able to “filter events by city”
So that I can see the list of events that take place in that city


### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

- Scenario 1: An event element is collapsed by default

o	Given information of an event has been loaded
o	When a user first sees an event
o	Then the event’s details will not be visible yet

- Scenario 2: User can expand an event to see its details

o	Given information of an event has been loaded
o	When a user clicks a collapsed event panel
o	Then the user will be able to see the details of the event

- Scenario 3: User can collapse an event to hide its details

o	Given an event’s details are visible
o	When a user clicks “hids” or “collapse” button
o	Then the event’s details will become hidden

As a user,
I should be able to show and hide details of an event
So that I can see the details only of those events I’m interested in
 

### FEATURE 3: SPECIFY NUMBER OF EVENTS

- Scenario 1: When user hasn’t specified a number, 32 is the default number

o	Given a user hasn’t specified the number of events to load
o	When a user runs a search or opens the app
o	Then a maximum of 32 events will be shown

- Scenario 2: User can change the number of events they want to see

o	Given a user has specified the amount of events to load
o	When a user runs a search or opens the app
o	Then the number of events the user selects is the maximum number of events shown 

As a user,
I should be able to decide how many events will be returned on the page
So that I can decide how many events I will be shown


### FEATURE 4: USE THE APP WHEN OFFLINE

- Scenario 1: Show cached data when there’s no internet connection

o	Given a user has previously opened the app with an internet connection
o	When the user opens the app with no internet connection
o	Then they will see cached data from their last session

-	Scenario 2: Show error when user changes the settings (city, time range)

o	Given there is no internet connection
o	When a user tries to change a setting that requires loading new data, like “city” or “time range”
o	Then they will see an error message that shows that the changes will not be possible without internet connection

As a user,
I should be able to use the app when I am offline
So that I do not always need internet connection to use the app


### FEATURE 5: DATA VISUALIZATION

•	Scenario 1: Show a chart with the number of upcoming events in each city

o	Given there are listed events for a city
o	When a user looks up events for that city
o	Then they will see a chart showing the number of upcoming events in that city that can be categorized by type

As a user,
I should be able to see a visual overview of event data
So that I will get an overview on how many, and which types of events will be happening in a certain city/place 


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
