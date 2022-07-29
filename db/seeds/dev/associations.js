
const associationsData = require('../seeding-data/associations-data');

const createAssociation = async (knex, table, word) => {
  const wordAssociation = await knex([table]).insert({
    'word_association': word.word_association,
  }, 'id');
}

exports.seed = async function(knex) {
  try {
    await knex('animals').del()
    await knex('extraterrestrials').del()
    await knex('sparkles').del()
    await knex('trashes').del()

    let animalsPromises = await associationsData.animalsData.map(animal => {
      return createAssociation(knex, 'animals', animal);
    });

    let extraterrestrialsPromises = await associationsData.extraterrestrialsData.map(extraterrestrial => {
      return createAssociation(knex, 'extraterrestrials', extraterrestrial);
    });

    let sparklesPromises = await associationsData.sparklesData.map(sparkle => {
      return createAssociation(knex, 'sparkles', sparkle);
    });

    let trashesPromises = await associationsData.trashesData.map(trash => {
      return createAssociation(knex, 'trashes', trash);
    });

    //not workiing, but thought it would
      // return Promise.all([animalsPromises, extraterrestrialsPromises, sparklesPromises, trashesPromises])
    //working, but don't think it's right.
    return Promise.all(trashesPromises)

  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};
