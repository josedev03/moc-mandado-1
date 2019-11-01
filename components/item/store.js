const Model = require('./model');

async function addItem(item){
    const newItem = new Model(item);
    await newItem.save();
}

async function getItems(){
    const listItems = await Model.find();
    return listItems;
}

module.exports = {
    add: addItem,
    list: getItems,
}