const Person = require('./person');
const { disconnect } = require('./db');

async function createPerson() {
  try {
    // Create a new person instance
    const newPerson = new Person({
      name: 'Duch',
      age: 30,
      favoriteFoods: ['Rice', 'Beans']
    });

    // Save the person to the database
    const savedPerson = await newPerson.save();
    console.log('Person saved successfully:', savedPerson);
  } catch (err) {
    // Log detailed error information
    console.error('Error saving person:', err);
  } finally {
    // Ensure the database connection is closed
    disconnect();
  }
}

createPerson();
