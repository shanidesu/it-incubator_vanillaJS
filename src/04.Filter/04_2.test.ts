import {CityType} from "../02.Objects/02";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04";

let city: CityType

beforeEach(() => {
  city = {
    title: "New York",
    houses: [
      {
        id: 1,
        builtAt: 2012,
        repaired: false,
        address: {
          number: 100,
          street : {title: "White street"}
        }
      },
      {
        id: 2,
        builtAt: 2008,
        repaired: false,
        address: {
          number: 100,
          street : {title: "Happy street"}
        }
      },
      {
        id: 3,
        builtAt: 2020,
        repaired: false,
        address: {
          number: 101,
          street : {title: "White street"}
        }
      },
    ],
    governmentBuildings: [
      {
        type: 'Hospital',
        budget: 200000,
        staffCount: 200,
        address: {
          street: {title: "Central street"}
        }
      },
      {
        type: 'Fire-Station',
        budget: 500000,
        staffCount: 1000,
        address: {
          street: {title: "South street"}
        }
      }
    ],
    citizensNumber: 100000,
  }
})

test('Houses should be destroyed', () => {
  demolishHousesOnTheStreet(city, 'Happy street');

  expect(city.houses.length).toBe(1)
  expect(city.houses[0].id).toBe(2)
})

test('Houses should be destroyed', () => {
  const buildings =
    getBuildingsWithStaffCountGreaterThen(
    city.governmentBuildings,
    500
  );

  expect(buildings.length).toBe(1)
  expect(buildings[0].type).toBe('Fire-Station')
})
