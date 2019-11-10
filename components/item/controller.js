const store = require('./store');

// crea un item en la bd
function createItem(body){
    return new Promise((resolve, reject)=>{
        
        // validamos que lleguen los datos
        if(!body.nombre || !body.descripcion || !body.usuarioCreacion){
            reject('datos erroneos para la creacion del item');
            return false;
        }

        var newItem = {
            nombre: body.nombre,
            descripcion: body.descripcion,
            usuarioCreacion: body.usuarioCreacion,
            fechaCreacion: new Date(),
            fechaModificacion: new Date(0)
        }

        store.addItem(newItem);

        console.log(`articulo creado correctamente`);

        resolve(newItem);
    });
}

// retornal los items de la bd
function getItems(){
    return new Promise((resolve, reject)=>{
        resolve(store.getItems())
    })
}

module.exports = {
    createItem,
    getItems
}