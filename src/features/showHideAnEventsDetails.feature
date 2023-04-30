Feature: Show/hide an event details

Scenario: An event element is collapsed by default
Given information of an event has been loaded
When a user first sees an event
Then the event’s details will not be visible yet

Scenario: User can expand an event to see its details
Given information of an event has been loaded
When a user clicks a collapsed event panel
Then the user will be able to see the details of the event

Scenario: User can collapse an event to hide its details
Given an event’s details are visible
When a user clicks “hids” or “collapse” button
Then the event’s details will become hidden
