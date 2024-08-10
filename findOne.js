const Person = require('./person');
const { disconnect } = require('./db');


async function findPersonByFood(food) {
  try {
    const person = await Person.findOne({ favoriteFoods: food });
    console.log('Person found:', person);
  } catch (err) {
    console.error('Error finding person:', err);
  } finally {
    disconnect();
  }
}

findPersonByFood('Tacos');
