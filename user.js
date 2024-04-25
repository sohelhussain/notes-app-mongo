const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/notesdb`);

const userSchema = mongoose.Schema({
    title: String,
    description: String,
})

module.exports = mongoose.model('note', userSchema);
