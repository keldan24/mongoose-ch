const Person = require('./person');
const { disconnect } = require('./db')

async function findPersonById(personId) {
  try {
    const person = await Person.findById(personId);
    console.log('Person found:', person);
  } catch (err) {
    console.error('Error finding person by ID:', err);
  } finally {
    disconnect();
  }
}

findPersonById('66b79e897891cb6e8a8f392b');
