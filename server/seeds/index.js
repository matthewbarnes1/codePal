const accessorySeed = require('./accessorySeed');
const foodSeed = require('./foodSeed');
const userSeed = require('./userSeed');
const petSeed = require('./petSeed');
const toySeed = require('./toySeed')
const userSeed = require('./userSeed')

const db = require('../config/connection');

async function seedAll() {
    try {
      await Promise.all([
        seedAccessories(),
        seedFoods(),
        seedPets()
      ]);
      console.log('All data seeded successfully!');
    } catch (err) {
      console.error('Error seeding data:', err);
    } finally {
      db.close();  // Close the connection after seeding (if applicable)
    }
  }

seedAll();
