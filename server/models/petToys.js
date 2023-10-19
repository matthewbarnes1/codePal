//* Pet Toys Model 
/* 
TODO: 
- toyName (predefined name) 
- eH (how much it adds to emotional health)
- pH (how much it adds to physical health)
- toyAge (age of toy, how long it can be used for)
- toyFor (species the toy can be used for)
*/

const { Schema, model } = require('mongoose');

const toySchema = new Schema({
    toyName: {
        type: String,
        enum: ['Ball', 'Mouse', 'String'],  
        required: true
    },
    eH: { 
        type: Number,
        required: true,
        default: 1
    },
    pH: {
        type: Number,
        required: true,
        default: 1
    },
    toyAge: { // TODO:  how long toy can be used for (if toyAge == x, toy removed from petToys array )
        type: Variable,
        required: true,
        default: 0
    },
    toyFor: { // * species toy can be used for
        type: String,
        enum: ['cat', 'dog', 'rabbit'],
        required: true,
    }
});

const Toy = model('Toy', toySchema);

module.exports = Toy;
