const Person = require('./person');
const { disconnect } = require('./db');


async function createManyPeople() {
  try {
    const people = [
      { name: 'Anita Jane', age: 28, favoriteFoods: ['Burgers', 'Sushi'] },
      { name: 'Andy Jane', age: 29, favoriteFoods: ['Pizza', 'Sushi'] },
      { name: 'Johnny Jane', age: 23, favoriteFoods: ['Fish', 'Burgers'] },
      { name: 'Pascal Jane', age: 28, favoriteFoods: ['Sauge', 'Sushi'] },
      { name: 'Brad', age: 35, favoriteFoods: ['Beef', 'Steak'] }
    ];

    // Create and save multiple people
    const savedPeople = await Person.create(people);
    console.log('People saved successfully:', savedPeople);
  } catch (err) {
    console.error('Error saving people:', err);
  } finally {
    // Close the connection when done
    disconnect();
  }
}

createManyPeople();
