const Person = require('./person');
const {disconnect} = require('./db');
async function deletePersonById(personId) {
  try {
    const deletedPerson = await Person.findByIdAndDelete(personId);
    console.log('Deleted person:', deletedPerson);
  } catch (err) {
    console.error('Error deleting person:', err);
  } finally {
    disconnect();
  }
}

deletePersonById('66b79e897891cb6e8a8f392a');
