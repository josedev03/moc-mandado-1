const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nombre: String,
    apellido: String,
    correo: String,
    fechaCreacion: Date,
})

module.exports = mongoose.model('user', userSchema);
 