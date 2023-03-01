const moongose = require('mongoose');

const User = moongose.model('User', {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    level: {type: Number, required: true}
});

module.exports = User;