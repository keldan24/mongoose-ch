const Person = require('./person');
const { disconnect } = require('./db');


async function findPeopleByName(name) {
  try {
    const people = await Person.find({ name: name });
    console.log('People found:', people);
  } catch (err) {
    console.error('Error finding people:', err);
  } finally {
    // Close the connection when done
    disconnect();
  }
}

findPeopleByName('John Doe');
