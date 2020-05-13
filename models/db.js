const Sequelize = require('sequelize');
//Config BD
const sequelize = new Sequelize('sistemaCadRPG', 'root', 'lupos009',{
    host: "localhost",
    dialect: 'mysql'
})
sequelize.authenticate().then(function(){
    console.log("Sucesso")

}).catch(function(){
    console.log("falha"+erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}