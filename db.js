const db = require('mongoose');

// indicamos a mongoose que utilice la libreria de promesas nativa
db.Promise = global.Promise;

async function connect(urlConnection){
    await db.connect(urlConnection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log(`Connected to database`))
    .catch(err => console.log(`Error to try conect to db ` + err));
}

module.exports = connect;