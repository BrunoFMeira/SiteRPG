const db = require('./db');

const Usuario = db.sequelize.define('Usuarios', {
    Username: {
        type:db.Sequelize.STRING
    },
    Password: {
        type:db.Sequelize.STRING
    },
    Email: {
        type:db.Sequelize.TEXT
    }

})
//Usuario.sync({force:true})
module.exports = Usuario