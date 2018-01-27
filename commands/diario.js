module.exports = {
  name: 'diario',
  cooldown: 86400,
  execute(message){
  const Discord = require("discord.js");
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Centro Pokemon"});
  var Input = message.content.split(" ");
  var entrenador = message.author;
  if (message.content.includes("t!diario")){
    if(message.channel.name === 'musica-comandos'){
    try {con.connect(function(err){
      var sql = `SELECT orbes FROM usuarios WHERE usuario='${entrenador}'`;
      con.query(sql, function (err, result){if (err) throw err;
       var orbs = result[0].orbes + 3
       var sql = `UPDATE usuarios SET orbes='${orbs}' WHERE usuario='${entrenador}'`;
       con.query(sql, function (err, result){if (err) throw err;
       message.channel.send(`Has recibido tus 3 orbes diarios.`)});});});}
       catch (error) {console.error(error);
      message.reply('Ha ocurrido un error al registrar').catch(console.error)}}
    else{message.channel.send('No puedes usar este comando en este canal.')}}}}