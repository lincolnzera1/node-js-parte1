const db = require('./db')

const Post = db.sequelize.define('postagens', { // Tabela de nome postagens
    //Campos da tabela
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }

})

module.exports = Post

//Post.sync({force: false})