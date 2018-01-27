module.exports = {
  name: 'intercambiar',
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

  if(message.content = "t!intercambiar") {
    if(message.channel.name === 'musica-comandos'){
    try {con.connect(function(err){
        var entrenador = message.author
        var ID = `SELECT id FROM usuarios WHERE usuario='${entrenador}'`;
        con.query(ID, function (err, result){if (err) throw err;
        if(result == "") {message.reply("no estas registrado en la armada, usa \`t!registro\` por favor antes de usar estos comandos.");}
        else{if(Input[1] == null){message.reply("no especificaste con quien quieres intercambiar.");}
        else{var entrenador2 = Input[1]
          var entrenador3 = "<@" + entrenador.split("!").pop();
          var entrenador4 = `SELECT * FROM usuarios WHERE usuario='${entrenador4}'`;
          con.query(entrenador4, function (err, result){if (err) throw err;
            if(result != ""){message.reply("el entrenador seleccionado no es alguien registrado, pidele usa \`t!registro\` antes de intercambiar.");}
              else{if(Input[2] == null){message.reply("no especificaste pokémon para intercambiar.");}
                var sql = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Input[2]}'`;
                con.query(sql, function (err, result){if (err) throw err;
                  if(result == ""){message.reply(`no tienes ${Input[2]} para intercambiar.`);}
                  else{if(Input[3] == null){message.reply("no especificaste el pokémon que quieres.");}
                  var sql = `SELECT cantidad FROM pc WHERE usuario='${entrenador4}' AND pokemon='${Input[3]}'`;
                  con.query(sql, function (err, result){if (err) throw err;
                    if(result == ""){message.reply(`${entrenador4} no tiene ${Input[3]} para intercambiar.`);}
                    else{var sql = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Input[2]}'`
                    con.query(sql, function (err, result){if (err) throw err;
                        var cantidad = result - 1
                        var sql = `UPDATE pc SET cantidad = '${cantidad}' WHERE usuario='${entrenador}' AND pokemon='${Input[2]}'`;
                        con.query(sql, function (err, result){if (err) throw err;});
                        var sql = `SELECT cantidad FROM pc WHERE usuario='${entrenador4}' AND pokemon='${Input[3]}'`
                        con.query(sql, function (err, result){if (err) throw err;
                            var cantidad = result - 1
                            var sql = `UPDATE pc SET cantidad = '${cantidad}' WHERE usuario='${entrenador4}' AND pokemon='${Input[3]}'`;
                            con.query(sql, function (err, result){if (err) throw err;});
                            message.reply(`has intercambiado tu ${Input[2]} por el ${Input[3]} de ${entrenador4}.`);});});}});}});}});}}});});}
                  catch (error) {console.error(error);}}
               else{message.channel.send('No puedes usar este comando en este canal')}}}}