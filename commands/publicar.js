module.exports = {
  name: 'publicar',
  execute(message){
  const Discord = require("discord.js");
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Centro Pokemon"});
  var Input = message.content.split("[:,] ");
  if (message.content.includes("t!publicar")){
    if(message.channel.name === 'pokemon'){
   try {con.connect(function(err){
      var sql = `SELECT id FROM intercambios WHERE usuario='${message.author}'`;
      con.query(sql, function (err, result){var a = result.length
        if(a >= 2) {message.channel.send(`No puedes publicar otra oferta de intercambio ${message.author}, borra una de las existentes si ya ha sido atendida.`);}
        else{var sql = `INSERT INTO intercambios (usuario, busca, ofrece) VALUES ('${message.author}', '${Input[1]}', '${Input[2]}')`;
       con.query(sql, function (err, result){if (err) throw err;
       console.log("1 intercambio registrado");
       message.reply(`has publicado una oferta de intercambio.`)});}});});}
       catch (error) {console.error(error);
      message.reply('Ha ocurrido un error al publicar').catch(console.error)}}
    else{message.channel.send('No puedes usar este comando en este canal.');}}}}