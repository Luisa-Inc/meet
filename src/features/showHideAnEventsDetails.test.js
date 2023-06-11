import { loadFeature, defineFeature } from "jest-cucumber";
 import React from "react";
 import { mount } from "enzyme";
 import App from "../App";

 const feature = loadFeature(
   "./src/features/showHideAnEventsDetails.feature"
 );

 defineFeature(feature, (test) => {
   let AppWrapper;
   test("An event element is collapsed by default", ({ given, when, then }) => {
     given("the user is viewing a list of events", () => {});

     when("the user sees an event element", () => {
       AppWrapper = mount(<App />);
     });

     then("the event element should be collapsed by default", () => {
       AppWrapper.update();
       expect(AppWrapper.find(".Event .event-details")).toHaveLength(0);
     });
   });



   test("User can expand an event to see its details", ({
     given,
     when,
     then,
   }) => {
     given("the user is viewing a collapsed event element", () => {
       AppWrapper = mount(<App />);
     });

     when("the user clicks on the “Show details” button", () => {
       AppWrapper.update();
       AppWrapper.find(".Event .details-button").at(0).simulate("click");
     });

     then("the event element should expand, displaying the event details", () => {
       AppWrapper.update();
       expect(AppWrapper.find(".Event .event-details")).toEqual({});
     });
   });



   test("User can collapse an event to hide its details", ({
     given,
     when,
     then,
   }) => {
     given("the user is viewing an expanded event element", async () => {
       AppWrapper = await mount(<App />);
       AppWrapper.update();
       AppWrapper.find(".Event .details-button").at(0).simulate("click");
     });

     when("the user clicks on the “Hide details” button", () => {
       AppWrapper.update();
       AppWrapper.find(".Event .details-button").at(0).simulate("click");
     });

     then("the event element should collapse, hiding the event details", () => {
       expect(AppWrapper.find(".Event .event-details")).toHaveLength(0);
     });
   });
 });