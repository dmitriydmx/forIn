
import { orderByProps } from '../orderByProps';

describe('orderByProps', () => {
  it('should return sorted array of object properties according to sortOrder', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const sortOrder = ["name", "level"];
    const sortedProps = orderByProps(obj, sortOrder);

    expect(sortedProps).toEqual([
      {key: "name", value: "мечник"},
      {key: "level", value: 2},
      {key: "attack", value: 80},
      {key: "defence", value: 40},
      {key: "health", value: 10}
    ]);
  });

  it('should return sorted array of object properties in alphabetical order for properties not specified in sortOrder', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const sortOrder = ["name", "level"];
    const sortedProps = orderByProps(obj, sortOrder);

    expect(sortedProps).toEqual([
      {key: "name", value: "мечник"},
      {key: "level", value: 2},
      {key: "attack", value: 80},
      {key: "defence", value: 40},
      {key: "health", value: 10}
    ]);
  });

  it('should return sorted array of object properties in alphabetical order if sortOrder is empty', () => {
    const obj = {defence: 40, health: 10, level: 2, attack: 80, name: 'мечник'};
    const sortOrder = [];
    const sortedProps = orderByProps(obj, sortOrder);

    expect(sortedProps).toEqual([
      {key: "attack", value: 80},
      {key: "defence", value: 40},
      {key: "health", value: 10},
      {key: "level", value: 2},
      {key: "name", value: "мечник"}
    ]);
  });

  it('should return array of object properties in the same order as sortOrder if all properties are specified in sortOrder', () => {
    const obj = {name: 'мечник', level: 2, attack: 80, defence: 40, health: 10};
    const sortOrder = ["name", "level", "attack", "defence", "health"];
    const sortedProps = orderByProps(obj, sortOrder);

    expect(sortedProps).toEqual([
      {key: "name", value: "мечник"},
      {key: "level", value: 2},
      {key: "attack", value: 80},
      {key: "defence", value: 40},
      {key: "health", value: 10}
    ]);
  });

  it('should ignore non-existent properties specified in sortOrder', () => {
    const obj = {name: 'мечник', level: 2, attack: 80};
    const sortOrder = ["name", "health"];
    const sortedProps = orderByProps(obj, sortOrder);

    expect(sortedProps).toEqual([
      {key: "name", value: "мечник"},
      {key: "attack", value: 80},
      {key: "level", value: 2}
    ]);
  });

  it('should return an empty array if obj has no properties', () => {
    const obj = {};
    const sortOrder = ["name", "level"];
    const sortedProps = orderByProps(obj, sortOrder);

    expect(sortedProps).toEqual([]);
  });
});
