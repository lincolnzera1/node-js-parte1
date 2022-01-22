const Sequelize = require('sequelize')
const sequelize = new Sequelize('usuarios', 'root', 'senha', {
    host: 'localhost',
    dialect: 'mysql'
})


const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.TEXT // String tem limite de caracteres
    },
    conteudo: {
        type: Sequelize.TEXT  // Sem limites de caracteres.
    }
})


Postagem.create({
    titulo: "operation",
    conteudo: "1234"
})

const Pessoas = sequelize.define('pessoas', {
    nome: {
        type: Sequelize.TEXT
    },
    idade: {
        type: Sequelize.INTEGER
    },
    profissao:{
        type: Sequelize.TEXT
    }
})

Pessoas.create({
    nome: "humberto Monte",
    idade: 50,
    profissao: "uber"
})

//Pessoas.sync({force: true}) //Sincroniza o model(a const Postagem) com o mysql



/*sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!!")
}).catch(function(){
    console.log("Falha ao se conectar: " + erro)
})*/