var pdf = require('html-pdf');
var ejs = require('ejs');
var nomeDoUsuario = 'Fernando Schimidt';
var curso = 'Formção Node.js';
var categoria= 'JavaScript'


ejs.renderFile("./index.ejs",{nome:nomeDoUsuario, curso:curso, categoria:categoria},(err, html)=>{
    if(err){
        console.log('Erro');
    }else{
        pdf.create(html,{}).toFile("./MeuPDF.pdf",(err,res)=>{
            if(err){
                console.log('Um erro acoteceu :');
            }else{
                console.log(res);
            }
        });
    }
})

