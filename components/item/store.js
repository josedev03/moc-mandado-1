const Model = require('./model');

async function addItem(item){
    const newItem = new Model(item);
    await newItem.save();
}

function getItems(filterUser){
    return new Promise((resolve, reject)=>{
        let filter = {};

        if(filterUser != null){
            filter = {usuarioCreacion: filterUser}
        }

        Model.find(filter)
            .populate('usuarioCreacion')
            .exec((err, dataPopulated)=>{
                if(err){
                    console.log(err);
                    reject('Error al obtener los articulos ' + err);
                    return false;
                }
                
                resolve(dataPopulated);
        })
    })
}

module.exports = {
    addItem,
    getItems,
}