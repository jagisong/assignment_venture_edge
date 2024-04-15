const mongoose = require('mongoose');
const { Schema } = mongoose;

const resolutionSchema = new Schema({
    title: {
        type : String,
        required: true
    },
    description: String,
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    monthlyUpdates: [{
        month: String,
        update: String
    }]

});

const Resolution = mongoose.model('Resolution', resolutionSchema);

module.exports = Resolution;