module.exports = {
  name: 'ofertas',
  execute(message){
  const Discord = require("discord.js");
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Centro Pokemon"});
  var Input = message.content.split(" ");
  if (message.content.includes("t!ofertas")){
    if(message.channel.name === 'pokemon'){
   try {
     con.connect(function(err){
       var sql = `SELECT * FROM intercambios`;
       con.query(sql, function (err, result, fields){
       if (err) throw err;
       message.channel.send(`Estas son todas las ofertas publicadas:`);
       var a = result.length - 1
       for (var b = 0; b < a; b++){
        var c = result[b].usuario
        var d = result[b].busca
        var e = result[b].ofrece
        var f = result[b].id
        const embed = {"color": 7611607,
          "fields": [{"name": "id",
              "value": `${result[b].id}`},
                     {"name": "Usuario",
              "value": `${result[b].usuario}`},
            {"name": "Busca",
              "value": `${result[b].busca}`,
              "inline": true},
            {"name": "Ofrece",
              "value": `${result[b].ofrece}`,
              "inline": true}]};
        message.channel.send({ embed });
      }
          console.log("Lista de intercambios mostrada");});});}
       catch (error) {console.error(error);
      message.reply('Ha ocurrido un error al mostrar intercambios').catch(console.error)}}
    else{message.channel.send('No puedes usar este comando en este canal.');}}}}