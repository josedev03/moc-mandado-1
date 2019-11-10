const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = mongoose.Schema({
    nombre: String,
    descripcion: String,
    usuarioCreacion: {
        type: Schema.ObjectId,
        ref: 'user'
    },
    fechaCreacion: Date,
    fechaModificacion: Date,
});

module.exports = mongoose.model('item', itemSchema);