const Model = require('./model');

async function addUser(user){
    const myUser = new Model(user);
    await myUser.save();
}

async function getUsers(filterUser){
    let filter = {};

    if(filterUser){
        filter = {nombre: filterUser}
    }

    const users = await Model.find(filter);
    return users;
}

async function updateUser(id, apellido){
    const foundUser = await Model.findOne({
        _id: id
    });

    foundUser.apellido = apellido;

    const newUser = await foundUser.save();
    return newUser;
}

async function deleteUser(id){
    return await Model.deleteOne({
        _id: id
    });
}

module.exports = {
    add: addUser,
    list: getUsers,
    updateUser,
    deleteUser,
}