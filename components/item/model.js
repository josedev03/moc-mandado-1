const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    nombre: String,
    descripcion: String,
    fechaCreacion: Date,
    fechaModificacion: Date,
});

module.exports = mongoose.model('item', itemSchema);