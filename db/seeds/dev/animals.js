
const animalsData = require('../seeding-data/animals-data');

const createAnimalWord = async (knex, animal) => {
  const animalWord = await knex('animals').insert({
    animal_association: animal.word,
  }, 'id');
}

exports.seed = async function(knex) {
  try {
    await knex('animals').del()

    let animalsPromises = animalsData.map(animal => {
      return createAnimalWord(knex, animal);
    });

    return Promise.all(animalsPromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};
