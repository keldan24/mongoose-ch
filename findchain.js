// findChain.js
const Person = require('./person');
const { disconnect } = require('./db');

async function findPeopleByFood(food) {
  try {
    const people = await Person.find({ favoriteFoods: food })
      .sort({ name: 1 }) // Sort by name in ascending order
      .limit(2) // Limit the results to 2 documents
      .select('-age') // Exclude the age field
      .exec();
    console.log('People found:', people);
  } catch (err) {
    console.error('Error finding people with food:', err);
  } finally {
    disconnect();
  }
}

findPeopleByFood('Burritos');
