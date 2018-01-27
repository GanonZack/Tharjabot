module.exports = {
    name: 'apoyo',
    execute(message){
  const Discord = require("discord.js");
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Centro Pokemon"});

  function checkRole(message,rolename){
    var authorRoles = message.member.roles.array()
    var roleNames = []
    for (var i = authorRoles.length - 1; i >= 0; i--) {
        roleNames.push(authorRoles[i].name)
    }
    var manager = roleNames.indexOf(rolename) != -1;
    return manager}

    var Input = message.content.split(" ");
    var a = Input.length
    if (message.content.includes("t!apoyo") && checkRole(message, "Mod")){
    if (a < 3) {message.reply("no has etiquetado a dos personas para hacer apoyo.");}
    else{try {con.connect(function(err){
       var sql = `INSERT INTO apoyos (persona1, persona2, apoyo) VALUES ('${Input[1]}', '${Input[2]}', '${Input[3]}')`;
       con.query(sql, function (err, result){
       if (err) throw err;
       console.log("1 Apoyo registrado");
       if(Input[3] == "C") {message.channel.send(`${Input[1]} y ${Input[2]} han alcanzado el nivel de apoyo ${Input[3]}. Podrían ser llevarse bien.`)}
       else{ if(Input[3] == "B") {message.channel.send(`${Input[1]} y ${Input[2]} han alcanzado el nivel de apoyo ${Input[3]}. Podrían ser amigos.`)}
       else{if(Input[3] == "A") {message.channel.send(`${Input[1]} y ${Input[2]} han alcanzado el nivel de apoyo ${Input[3]}. Son mejores amigos.`)}
       else{if(Input[3] == "A+") {message.channel.send(`${Input[1]} y ${Input[2]} han alcanzado el nivel de apoyo ${Input[3]}. Son como hermanos.`)}
       else{if(Input[3] == "S") {message.channel.send(`${Input[1]} y ${Input[2]} han alcanzado el nivel de apoyo ${Input[3]}. Son algo más que amigos, podrían tener hijos en el futuro.`)}}}}}});});}
       catch (error) {console.error(error);
      message.reply('Ha ocurrido un error al registrar').catch(console.error)}}}}}