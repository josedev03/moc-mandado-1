const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    fechaCreacion: Date,
})

module.exports = mongoose.model('user', userSchema);
 