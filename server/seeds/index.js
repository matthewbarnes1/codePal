const accessories = require('./accessorySeed');
const foods = require('./foodSeed');
const pets = require('./petSeed');
const toys = require('./toySeed');
const { users } = require('./userSeed');
const db = require('../config/connection');

async function seedAccessories() {
    try {
      await db.collection('accessories').insertMany(accessories);
      console.log('Accessories seeded successfully!');
    } catch (err) {
      console.error('Error seeding accessories:', err);
    }
  }

  async function seedFood() {
    try {
      await db.collection('foods').insertMany(foods);
      console.log('Foods seeded successfully!');
    } catch (err) {
      console.error('Error seeding foods:', err);
    }
  }

  async function seedPets() {
    try {
      await db.collection('pets').insertMany(pets);
      console.log('Pets seeded successfully!');
    } catch (err) {
      console.error('Error seeding pets:', err);
    }
  }

  async function seedToys() {
    try {
      await db.collection('toys').insertMany(toys);
      console.log('Toys seeded successfully!');
    } catch (err) {
      console.error('Error seeding toys:', err);
    }
  }

  async function seedUsers() {
    try {
      await db.collection('Users').insertMany(users);
      console.log('Users seeded successfully!');
    } catch (err) {
      console.error('Error seeding users:', err);
    }
  }


async function seedAll() {
    await seedAccessories();
    await seedFood();
    await seedPets();
    await seedToys();
    await seedUsers();
  }

seedAll().catch(console.error);
