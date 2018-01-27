module.exports = {
  name: 'enviar',
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
  if (message.content.includes("t!enviar")){
    if(message.channel.name === 'musica-comandos'){
    try {con.connect(function(err){
    if(Input[2] == null){
      if(Input[1] == null){message.channel.send(`No has especificado una unidad para enviar a casa.`);}
      else{
       var sql = `SELECT unidad FROM barracas WHERE usuario='${entrenador}'`;
       con.query(sql, function (err, result, fields){if (err) throw err;
       if(result == ""){message.channel.send(`No tienes unidades en las barracas, usa el comando \`t!invocar\` para obtener alguna.`);} 
       else{var sql = `SELECT * FROM barracas WHERE usuario='${entrenador}' AND unidad='${Input[1]}'`;
       con.query(sql, function (err, result, fields){if (err) throw err;
       var b = result.length 
       message.channel.send(`Hay ${b} unidades con el nombre especificado:`);
       for(a = 0; a < b; a++){message.channel.send(`unidad: ${result[a].unidad} / id: ${result[a].id}`)}
       message.channel.send(`Usa \`t!enviar <nombre de la unidad> <id>\` para enviar a casa a la unidad especifica`);});}});}}
       else{var sql = `DELETE FROM barracas WHERE usuario='${entrenador}' AND id='${Input[2]}'`;
             con.query(sql, function (err, result, fields){if (err) throw err;});
              var orbes = `SELECT orbes FROM usuarios WHERE usuario='${entrenador}'`;
              con.query(orbes, function (err, result){if (err) throw err;
               var orbs = result[0].orbes + 1
              var env = `UPDATE usuarios SET orbes= '${orbs}' WHERE usuario='${entrenador}'`;
              con.query(env, function (err, result){if (err) throw err;
              message.channel.send(`Has enviado a ${Input[1]} a casa y obtenido 1 orbe por ello.`)});});}});}
          catch (error) {console.error(error);
            message.reply('Ha ocurrido un error al enviar la unidad a casa').catch(console.error)}}
          else{message.channel.send('No puedes usar este comando en este canal.');}}}}