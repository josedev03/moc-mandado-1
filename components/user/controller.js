const store = require('./store');

function createUser(body){
    return new Promise( (resolve, reject) =>{

        // validamos que lleguen datos
        if( !body.nombre || !body.apellido || !body.edad){
            reject('Error en el controlador: datos incorrectos');
        }

        // creamos la estructura de la collection
        const newUser = {
            nombre: body.nombre,
            apellido: body.apellido,
            edad: body.edad,
            fechaCreacion: new Date()
        }

        // almacena en la bd
        store.add(newUser);
        console.log(`Creado correctamente`);

        // resuelve la promesa
        resolve(newUser);
    });
}

function getUsers(filterUser){
    return new Promise((resolve, reject)=>{
        resolve(store.list(filterUser));
    })
}

function updateUser(id, apellido){
    return new Promise((resolve, reject)=>{

        if(!id || !apellido){
            reject("Datos no validos");
        }

        const newUser = store.updateUser(id, apellido);
        resolve(newUser);
    })
}

function deleteUser(id){
    return new Promise((resolve, reject)=>{

        if(!id) reject("Id no valido para eliminar un usuario");

        store.deleteUser(id);
        resolve();
    });
}

module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
}