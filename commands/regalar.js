module.exports = {
  name: 'regalar',
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

if(message.content.includes("t!regalar") && checkRole(message,"Mod")){
  try {
    con.connect(function(err){
  var entrenador = Input[1]
  var entrenador2 = "<@" + entrenador.split("!").pop();
  var ID = `SELECT id FROM usuarios WHERE usuario='${entrenador2}'`;
  con.query(ID, function (err, result){if (err) throw err;
  if(result == "") {message.reply(`${Input[1]} no esta registrado en la armada, pidele usar \`t!registro\` antes de usar estos comandos, por favor.`);}
  else{
    var cantidad = `SELECT cantidad FROM mochila WHERE usuario='${entrenador2}' AND baya='${Input[2]} Berry'`;
    con.query(cantidad, function (err, result){if (err) throw err;
      if(result != ""){
        var cantidad2 = result[0].cantidad + Input[3]
        var sql = `UPDATE mochila SET cantidad = '${cantidad2}' WHERE usuario='${entrenador2}' AND baya='${Input[2]} Berry'`;
        con.query(sql, function (err, result){if (err) throw err;});
        message.channel.send(`${entrenador}, ¡te han regalado una ${Input[2]} Berry!`, {
        file: `./files/berries/${Input[2]}.png`});}
        else{
    var cantidad = 1
    var sql = `INSERT INTO mochila (usuario, baya, cantidad) VALUES ('${entrenador2}', '${Input[2]} Berry', '${cantidad}')`;
    con.query(sql, function (err, result){if (err) throw err;});
  message.channel.send(`${entrenador}, ¡te han regalado una ${Input[2]} Berry!`, {
    file: `./commands/files/${Input[2]}.png`})}});}});});}
catch (error) {console.error(error);}}}}