module.exports = {
  name: 'plantar',
  cooldown: 10800,
  execute(message){
const Discord = require("discord.js");
const Arrays = require("./Arrays.json");
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Centro Pokemon"});
  var a = 0
  var b = Arrays.berries.length - 1

  if(message.content = "t!plantar") {
    if(message.channel.name === 'musica-comandos'){
    try {
      con.connect(function(err){
        var entrenador = message.author
        var ID = `SELECT id FROM usuarios WHERE usuario='${entrenador}'`;
        con.query(ID, function (err, result){if (err) throw err;
        if(result == "") {message.reply("no estas registrado en la armada, usa \`t!registro\` por favor antes de usar estos comandos.");}
        else{
          var NumRandom = aleatorio(a,b)
          function aleatorio(a,b){return Math.round(Math.random()*(b-a)+parseInt(a));}
          var cantidad = `SELECT cantidad FROM mochila WHERE usuario='${entrenador}' AND baya='${Arrays.berries[NumRandom]} Berry'`;
          con.query(cantidad, function (err, result){if (err) throw err;
            if(result != ""){
              var cantidad2 = result[0].cantidad + 1
              var sql = `UPDATE mochila SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND baya='${Arrays.berries[NumRandom]} Berry'`;
              con.query(sql, function (err, result){if (err) throw err;});
              message.channel.send(`¡Has obtenido una ${Arrays.berries[NumRandom]} Berry!`, {
              file: Arrays.berries2[NumRandom]});}
              else{
                var cantidad = 1
                var sql = `INSERT INTO mochila (usuario, baya, cantidad) VALUES ('${entrenador}', '${Arrays.berries[NumRandom]} Berry', '${cantidad}')`;
                con.query(sql, function (err, result){if (err) throw err;});
                message.channel.send(`¡Has obtenido una ${Arrays.berries[NumRandom]} Berry!`, {
                  file: Arrays.berries2[NumRandom]});}});}});});}
                  catch (error) {console.error(error);}}
               else{message.channel.send('No puedes usar este comando en este canal')}}}}