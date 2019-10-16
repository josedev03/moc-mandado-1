const db = require('mongoose');
const Model = require('./model');

// indicamos a mongoose que utilice la libreria de promesas nativa
db.Promise = global.Promise;

db.connect('mongodb://localhost:27017/moc-mandado', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log(`Conected to database`))
.catch(err => console.log(`Error to try conect to db ` + err));

async function addUser(user){
    const myUser = new Model(user);
    await myUser.save();
}

async function getUsers(){
    const users = await Model.find();
    return users;
}

module.exports = {
    add: addUser,
    list: getUsers,
}