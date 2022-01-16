const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const citySchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String },
    state: { type: String }
});

const cityModel = mongoose.model('cities', citySchema);

module.exports = cityModel;