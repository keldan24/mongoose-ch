const Person = require('./person');
const {disconnect} = require('./db');

async function updatePersonAge(name) {
  try {
    const updatedPerson = await Person.findOneAndUpdate(
      { name: name },
      { age: 20 },
      { new: true }
    );
    console.log('Updated person:', updatedPerson);
  } catch (err) {
    console.error('Error updating person:', err);
  } finally {
    disconnect();
  }
}

updatePersonAge('Alice'); 
