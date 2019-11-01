const store = require('./store');

// crea un item en la bd
function createItem(body){
    return new Promise((resolve, reject)=>{
        
        // validamos que lleguen los datos
        if(!body.nombre || !body.descripcion){
            reject('datos erroneos para la creacion del item');
        }

        var newItem = {
            nombre: body.nombre,
            descripcion: body.descripcion,
            fechaCreacion: new Date(),
            fechaModificacion: new Date(0)
        }

        store.add(newItem);

        resolve(newItem);
    });
}

// retornal los items de la bd
function getItems(){
    return new Promise((resolve, reject)=>{
        resolve(store.list())
    })
}

module.exports = {
    createItem,
    getItems
}