const Sequelize = require('sequelize')
// Conexão com o Mysql
const sequelize = new Sequelize('postapp', 'root', 'senha', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}