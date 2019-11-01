const user = require('../components/user/network');
const item = require('../components/item/network');

const routes = function(server){
    server.use('/user', user);
    server.use('/item', item);
}

module.exports = routes;