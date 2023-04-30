Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given a user hasn’t specified the number of events to load
When a user runs a search or opens the app
Then a maximum of 32 events will be shown

Scenario: User can change the number of events they want to see
Given a user has specified the amount of events to load
When a user runs a search or opens the app
Then the number of events the user selects is the maximum number of events shown