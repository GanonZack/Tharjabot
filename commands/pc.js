module.exports = {
  name: 'pc',
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
  if (message.content.includes("t!pc")){
    if(message.channel.name === 'musica-comandos'){
    if(Input[1] == null){message.channel.send(`No has especificado una caja para mostrar.`);}
    else{
   try {
     con.connect(function(err){
       var sql = `SELECT * FROM pc WHERE usuario='${entrenador}'`;
       con.query(sql, function (err, result, fields){if (err) throw err;
       if(result == ""){message.channel.send(`No tienes pokémon en la pc, usa el comando \`t!capturar\` para obtener alguno.`);} 
       else{
       var min = (Input[1] * 30) - 30
       var max = (Input[1] * 30) - 1 
       var a = result.length - 1
       var b = a - min
       var c = (result.length/30) + 1
       if(Input[1] > c){message.channel.send(`No existe esa caja en tu pc.`);}
       else{message.channel.send(`PC de ${entrenador}`);
       for (var min = (Input[1] * 30) - 30; min < max; min++){
        if(min <= b){
        message.channel.send(`**${result[min].pokemon} x${result[min].cantidad}**`);}
        else{break;}}
          console.log("Pokémon mostrados");}}});});}
       catch (error) {console.error(error);
      message.reply('Ha ocurrido un error al mostrar pc').catch(console.error)}}}
    else{message.channel.send('No puedes usar este comando en este canal.')}}}}