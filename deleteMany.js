const Person = require('./person');
const {disconnect} = require('./db');
async function deletePeopleByName(name) {
  try {
    const result = await Person.deleteMany({ name: name });
    console.log('Deleted documents:', result);
  } catch (err) {
    console.error('Error deleting people:', err);
  } finally {
    disconnect();
  }
}

deletePeopleByName('Duch');
