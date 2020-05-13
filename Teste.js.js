const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Usuario = require("./models/Usuario")

//Config
    //Template
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    //Body-parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    //Conexão com o banco de dados
    

//Rotas
    app.get('/cad',function(req, res){
        res.render('formcad');
    })
    app.post('/add',function(req, res){
        Usuario.create({
            /*if(O usuario não estiver sendo usado )*/
            Username: req.body.usuario,
            Email: req.body.email,
            Senha: req.body.senha
        }).then(function(){
            res.send("Usuario Cadastrado com suscesso")
        }).catch(function(erro){
            res.send("Erro:"+erro)
        })
    })
app.listen(8081, function(){
    console.log("Rodando no 8081");

});
