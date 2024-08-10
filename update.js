const Person = require('./person');
const {disconnect} = require('./db');

async function updatePersonFavoriteFoods(personId) {
  try {
    const person = await Person.findById(personId);
    if (person) {
      person.favoriteFoods.push('Hamburger');
      await person.save();
      console.log('Updated person:', person);
    } else {
      console.log('Person not found');
    }
  } catch (err) {
    console.error('Error updating person:', err);
  } finally {
    disconnect();
  }
}

updatePersonFavoriteFoods('66b79e897891cb6e8a8f392a');
