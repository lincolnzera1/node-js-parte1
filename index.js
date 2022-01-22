const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const Post = require('./models/Post')
const handlebars = require("express-handlebars")

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Rotas
app.get('/', function(req, res){
    Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
        //res.render(__dirname + "/html/index.html", {posts: posts})
        res.render('tentativa', {posts: posts})
    })
    
})

app.get("/cadastro", function(req, res){
    res.sendFile(__dirname + "/views/formulario.html")
})

app.post("/cadastrocompleto", function(req, res){
    //res.send("Texto: "+req.body.titulo+" Conteudo: "+req.body.conteudo)
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        //res.send("Post criado com sucesso!")
        res.redirect("/")
    }).catch(function(erro){
        res.send("Houve um erro: " + erro)
    })
})

app.get("/deletar/:id", function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        //res.send("Postagem deletada com sucesso!")
        res.redirect('/')
    }).catch(function(erro){
        res.send("Essa postagem nao existe! erro: " + erro)
    })
})







app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081!")
});