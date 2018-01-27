module.exports = {
  name: 'misterioso',
  execute(message){
const Discord = require("discord.js");
const Arrays = require("./Arrays.json");
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Centro Pokemon"});
var Input = message.content.split(" ");

if(message.content.includes("t!misterioso")){
  if(message.channel.name === 'musica-comandos'){
  try {con.connect(function(err){
      var entrenador = message.author
      var ID = `SELECT id FROM usuarios WHERE usuario='${entrenador}'`;
      con.query(ID, function (err, result){if (err) throw err;
      if(result == "") {message.reply("no estas registrado en la armada, usa \`t!registro\` por favor antes de usar estos comandos.");}
      else{
        if(Input[1] == "CP"){
          var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='Chansey de Centro Pokémon'`;
          con.query(cantidad, function (err, result){if (err) throw err;
          if(result == ""){
          var cantidad = 1
          var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.event[0]}', '${cantidad}')`;
          con.query(sql, function (err, result){if (err) throw err;});
  message.reply(`¡Has conseguido un ${Arrays.event[0]}!`, {
    file: `./files/event/${Arrays.event2[0]}`})}
    else{message.channel.send('Ya reclamaste este regalo misterioso')}});}
    else{if(Input[1] == "Tharja"){
      var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='Chansey de Centro Pokémon'`;
      con.query(cantidad, function (err, result){if (err) throw err;
      if(result == ""){
      var cantidad = 1
      var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.event[1]}', '${cantidad}')`;
      con.query(sql, function (err, result){if (err) throw err;});
message.reply(`¡Has conseguido un ${Arrays.event[1]}!`, {
file: `./files/event/${Arrays.event2[1]}`})}
else{message.channel.send('Ya reclamaste este regalo misterioso')}});}}}});});}
catch (error) {console.error(error);}}
else{message.channel.send('No puedes usar este comando en este canal.')}}}}