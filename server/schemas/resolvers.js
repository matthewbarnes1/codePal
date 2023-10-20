const { Accessory, Food, Pet, Toy, User } = require('../models');

const resolvers = {
    Query: {
    accessories: async () => {
        return Accessory.find();
      },
      foods: async () => {
        return Food.find();
      },
      toys: async () => {
        return Toy.find();
      },
      pets: async () => {
        return Pet.find();
      },
      users: async () => {
        return User.find();
      },
    },

    Mutation: {
        accessory: async (parent, args) => {
          const oneAcc = await Accessory.create({
            accName: args.accName,
            eH: args.eH,
            pH: args.pH,
            accAge: args.accAge,
            accFor: args.accFor
        });
          console.log(oneAcc);
          return oneAcc;
        },

        food: async (parent, args) => {
            const oneFood = await Food.create({
            foodName: args.foodName,
              eH: args.eH,
              pH: args.pH,
              foodAge: args.foodAge,
              foodFor: args.foodFor
          });
            console.log(oneFood);
            return oneFood;
          },

          toy: async (parent, args) => {
            const oneToy = await Toy.create({
            toyName: args.toyName,
              eH: args.eH,
              pH: args.pH,
              toyAge: args.toyAge,
              toyFor: args.toyFor
          });
            console.log(oneToy);
            return oneToy;
          },

          pet: async (parent, args) => {
            const onePet = await Pet.create({
            species: args.species,
            age: args.age,
            petName: args.petName,
            petDesc: args.petDesc,
            pH: args.pH,
            eH: args.eH,
            petToys: args.petToys,
            PetAcc: args.PetAcc,
            PetFood: args.PetFood
            });
            console.log(onePet);
            return onePet;
          },

            user: async (parent, args) => {
            const oneUser = await User.create({
            email: args.email,
            name: args.name,
            username: args.username,
            password: args.password,
            pets: args.pets
            });
            console.log(oneUser);
            return oneUser;
            },                 
    }
};

module.exports = resolvers;