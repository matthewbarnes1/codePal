//* Pet Model 
/* 
TODO: 
- foodName (predefined name) 
- species: cat, dog, rabbit
- age: how long is its life
- petName: user defined
- petDesc: user defined petImage: predefined image - change picture every 6mo (day)[]
- pH: current
- eH: current
- PetToys: [ref]
- PetAcc: [ref]
- PetFood: [ref] */
// TODO: petImage 


const { Schema, model } = require('mongoose');
const Toy = require('./petToys');
const Accessory = require('./petAcc');
const Food = require('./petFood');

const petSchema = new Schema({
    species: {
        type: String,
        enum: ['cat', 'dog', 'rabbit'],
        required: true,
        default: 'cat'
    },
    age: { //* we can increment this number from time of creation + each day that passes
        type: Number,
        required: true,
        default: 0 
    },
    petName: { //* user defined name, default set just in case
        type: String,
        required: true,
        default: 'dave'
    },
    petDesc: { //* user defined description, default set just in case
        type: String,
        required: true,
        default: 'this is cat, dave, hes my pal.'
    },
    pH: {
        type: Number, 
        required: true,
        default: 8 //* default value when pet is created
    },
    eH: {
        type: Number,
        required: true,
        default: 8 //* default value when pet is created

    },
    petToys: [{
        type: Schema.Types.ObjectId,
        ref: 'Toy'
    }],
    PetAcc: [{
        type: Schema.Types.ObjectId,
        ref: 'Accessory' 
    }],
    PetFood: [{
        type: Schema.Types.ObjectId,
        ref: 'Food'  
    }]
});

const Pet = model('Pet', petSchema);
module.exports = Pet;