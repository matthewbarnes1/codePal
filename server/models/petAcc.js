//* Pet Accessories Model 
/* 
TODO: 
- accName (predefined name) 
- eH (how much it adds to emotional health)
- pH (how much it adds to physical health)
- accAge (age of accessory, how long it can be used for)
- accFor (species the accessory can be used for)
*/

const { Schema, model } = require('mongoose');

const accSchema = new Schema({
    accName: {
        type: String,
        // enum: ['Collar', 'Leash', 'Bowtie'],  
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
    accAge: { //* how long accessory can be used for (if accAge == x, accessory removed from petAcc array )
        type: Number,
        required: true,
        default: 0
    },
    accFor: { //* species accessory can be used for
        type: String,
        enum: ['cat', 'dog', 'rabbit'],
        required: true,
    }
});

const Accessory = model('Acc', accSchema);

module.exports = Accessory;

