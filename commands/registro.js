module.exports = {
  name: 'registro',
  cooldown: 31536000,
  execute(message){
  const Discord = require("discord.js");
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Centro Pokemon"});
  var id = message.author;
  if (message.content.includes("t!registro")){
    if(message.channel.name === 'musica-comandos'){
   try {
     con.connect(function(err){
       var sql = `INSERT INTO balls (usuario, pokeball, cantidad) VALUES ('${id}', 'pokéball', '50')`;
       con.query(sql, function (err, result){if (err) throw err;});
       var sql = `INSERT INTO balls (usuario, pokeball, cantidad) VALUES ('${id}', 'masterball', '0')`;
       con.query(sql, function (err, result){if (err) throw err;});
       var sql = `INSERT INTO balls (usuario, pokeball, cantidad) VALUES ('${id}', 'enteball', '0')`;
       con.query(sql, function (err, result){if (err) throw err;});
       var sql = `INSERT INTO balls (usuario, pokeball, cantidad) VALUES ('${id}', 'ensueñoball', '0')`;
       con.query(sql, function (err, result){if (err) throw err;});
       var sql = `INSERT INTO usuarios (usuario, orbes) VALUES ('${id}', '20')`;
       con.query(sql, function (err, result){if (err) throw err;
       console.log("1 Usuario registrado");
       let role = message.guild.roles.find("name", "Invocador");
       let member = message.member;
       member.addRole(role).catch(console.error);
       message.channel.send(`Te has unido a los Custodios de Chrom, has recibido el rol Invocador, además de 20 orbes y 50 pokéballs, ${id}.`)});});}
       catch (error) {console.error(error);
      message.reply('Ha ocurrido un error al registrar').catch(console.error)}}
      else{message.channel.send('No puedes usar ese comando en este canal.');}}}}