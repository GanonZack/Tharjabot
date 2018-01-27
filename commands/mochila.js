module.exports = {
  name: 'mochila',
  execute(message){
  const Discord = require("discord.js");
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Centro Pokemon"});
  var entrenador = message.author
  var Input = message.content.split(" ");
  if (message.content.includes("t!mochila")){
    if(message.channel.name === 'musica-comandos'){
      if(Input[1] == null){message.channel.send(`No has especificado una página para mostrar.`);}
      else{try {con.connect(function(err){
       var sql = `SELECT * FROM mochila WHERE usuario='${entrenador}'`;
       con.query(sql, function (err, result, fields){if (err) throw err;
       if(result == ""){message.channel.send(`No tienes bayas en la mochila, usa el comando \`t!plantar\` para obtener alguna.`);} 
       else{
       var min = (Input[1] * 20) - 20
       var max = (Input[1] * 20) - 1 
       var a = result.length - 1
       var b = a - min
       var c = (result.length/20) + 1
       if(Input[1] > c){message.channel.send(`No existe ese espacio en tu mochila.`);}
       else{message.channel.send(`Mochila de ${entrenador}`);
       for (var min = (Input[1] * 20) - 20; min < max; min++){
        if(min <= b){
        message.channel.send(`**${result[min].baya} x${result[min].cantidad}**`);}
        else{break;}}
          console.log("Bayas mostradas");}}});});}
       catch (error) {console.error(error);
      message.reply('Ha ocurrido un error al mostrar mochila').catch(console.error)}}}
    else{message.channel.send('No puedes usar este comando en este canal.')}}}}