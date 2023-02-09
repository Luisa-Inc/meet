// extractLocations() will take in all event objects from the API
// and return an array of all unique "location" values
import { mockData } from "./mock-data";

export const getEvents = async () => {
  return mockData;
};

export const extractLocations = (events) => {
  var extractLocations = events.map((event) => event.location);
  var locations = [...new Set(extractLocations)];
  return locations;
};
