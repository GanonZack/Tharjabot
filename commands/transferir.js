module.exports = {
    name: 'transferir',
    execute(message){
const Discord = require("discord.js");
const Arrays = require("./Arrays.json");
var Input = message.content.split(" ");
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
      roleNames.push(authorRoles[i].name)}
  var manager = roleNames.indexOf(rolename) != -1;
  return manager}

if(message.content.includes("t!transferir") && checkRole(message,"Mod")){
  try {
    con.connect(function(err){
        var entrenador = Input[1]
        var entrenador2 = "<@" + entrenador.split("!").pop();
      if(Input[2] == "orbes"){
  var ID = `SELECT id FROM usuarios WHERE usuario='${entrenador2}'`;
  con.query(ID, function (err, result){if (err) throw err;
  if(result == "") {message.reply(`${Input[1]} no esta registrado en la armada, pidele usar \`t!registro\` antes de usar estos comandos, por favor.`);}
  else{
    var sql = `SELECT orbes FROM usuarios WHERE usuario='${entrenador2}'`;
    con.query(sql, function (err, result){if (err) throw err;
     var orbs = result[0].orbes + Input[3]
    var orbes = `UPDATE usuarios SET orbes = '${orbs}' WHERE usuario='${entrenador2}'`;
    con.query(orbes, function (err, result){if (err) throw err;
        message.channel.send(`¡Te han entregado ${Input[3]} orbes, ${Input[1]}!`);});});}});}
    else{if(Input[2]= "balls"){
        if(Input[3] = "pokéball"){
            var sql = `SELECT cantidad FROM balls WHERE usuario='${entrenador2}' AND pokeball='pokéball'`;
            con.query(sql, function (err, result){if (err) throw err;
             var balls = result[0].cantidad + Input[4]
             var sql = `UPDATE balls SET cantidad='${balls}' WHERE usuario='${entrenador2}' AND pokeball='pokéball'`;
             con.query(sql, function (err, result){if (err) throw err;
            message.channel.send(`${entrenador}, ¡te han entregado ${Input[4]} ${Input[3]}s!`)});});}
             else{if(Input[3] = "masterball"){
                    var sql = `SELECT cantidad FROM balls WHERE usuario='${entrenador2}' AND pokeball='masterball'`;
                    con.query(sql, function (err, result){if (err) throw err;
                     var balls = result[0].cantidad + Input[4]
                     var sql = `UPDATE balls SET cantidad= '${balls}' WHERE usuario='${entrenador2}' AND pokeball='masterball'`;
                     con.query(sql, function (err, result){if (err) throw err;
                        message.channel.send(`${entrenador}, ¡te han entregado ${Input[4]} ${Input[3]}s!`)});});}
                     else{if(Input[3] = "enteball"){
                        var sql = `SELECT cantidad FROM balls WHERE usuario='${entrenador2}' AND pokeball='enteball'`;
                        con.query(sql, function (err, result){if (err) throw err;
                         var balls = result[0].cantidad + Input[4]
                         var sql = `UPDATE balls SET cantidad= '${balls}' WHERE usuario='${entrenador2}' AND pokeball='enteball'`;
                         con.query(sql, function (err, result){if (err) throw err;
                            message.channel.send(`${entrenador}, ¡te han entregado ${Input[4]} ${Input[3]}s!`)});});}
                         else{if(Input[3] = "ensueñoball"){
                            var sql = `SELECT cantidad FROM balls WHERE usuario='${entrenador2}' AND pokeball='ensueñoball'`;
                            con.query(sql, function (err, result){if (err) throw err;
                             var balls = result[0].cantidad + Input[4]
                             var sql = `UPDATE balls SET cantidad= '${balls}' WHERE usuario='${entrenador2}' AND pokeball='ensueñoball'`;
                             con.query(sql, function (err, result){if (err) throw err;
                                message.channel.send(`${entrenador}, ¡te han entregado ${Input[4]} ${Input[3]}s!`)});});}
                             else{message.channel.send("Esa pokeball no existe en la base de datos")}}}}}}});}
catch (error) {console.error(error);}}}}