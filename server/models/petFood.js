//* Pet Food Model 
/* 
TODO: 
- foodName (predefined name) 
- eH (how much it adds to emotional health)
- pH (how much it adds to physical health)
- foodAge (how many portions available)
- foodFor (species the food can be used for)
*/

const { Schema, model } = require('mongoose');

const foodSchema = new Schema({
    foodName: {
        type: String,
        enum: ['Chicken', 'Beef', 'Salmon'],  
        required: true
    },
    // TODO: add eH and pH values for each food
    
    eH: { 
        type: Number,
        required: true,
        default: 1
    },
    pH: {
        type: Number,
        required: true,
        default: 0
    },
    foodAge: { // TODO: expiration date of food? 
        type: Number,
        required: true,
        default: x // TODO:  we need to change this to some arbitrage value 
    },
    foodFor: { //* species food can be used for
        type: String,
        enum: ['cat', 'dog', 'rabbit'],
        required: true,
    }
});

const Food = model('Food', foodSchema);

module.exports = Food;






