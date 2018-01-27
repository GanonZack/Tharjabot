module.exports = {
  name: 'repartir',
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

if(message.content.includes("t!repartir") && checkRole(message,"Mod")){
try {
    con.connect(function(err){
  var entrenador = Input[1]
  var entrenador2 = "<@" + entrenador.split("!").pop();
  var ID = `SELECT id FROM usuarios WHERE usuario='${entrenador2}'`;
  con.query(ID, function (err, result){if (err) throw err;
  if(result == "") {message.channel.send(`${Input[1]} no esta registrado en la armada, pidele usar \`t!registro\` antes de usar estos comandos, por favor.`);}
  else{
    if(Input[3] == "N"){
      var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador2}' AND pokemon='${Input[2]}'`;
      con.query(cantidad, function (err, result){if (err) throw err;
        if(result != ""){
      var cantidad2 = result[0].cantidad + 1
      var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador2}' AND pokemon='${Input[2]}'`;
      con.query(sql, function (err, result){if (err) throw err;});
  message.channel.send(`${Input[1]}, ¡te han entregado un ${Input[2]}!`, {
    file: `./files/all/${Input[2]}.gif`})}
    else{
      var cantidad = 1
      var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador2}', '${Input[2]}', '${cantidad}')`;
      con.query(sql, function (err, result){if (err) throw err;});
    message.channel.send(`${entrenador}, ¡te han entregado un ${Input[2]}!`, {
      file: `./files/all/${Input[2]}.gif`})}});}
    else{if(Input[3] == "S"){
      var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador2}' AND pokemon='${Input[2]} Variocolor'`;
      con.query(cantidad, function (err, result){if (err) throw err;
        if(result != ""){
          var cantidad2 = result[0].cantidad + 1
      var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador2}' AND pokemon='${Input[2]} Variocolor'`;
      con.query(sql, function (err, result){if (err) throw err;});
  message.channel.send(`${Input[1]}, ¡te han entregado un ${Input[2]} Variocolor!`, {
    file: `./files/allshiny/${Input[2]}.gif`})}
    else{
      var cantidad = 1
      var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador2}', '${Input[2]} Variocolor', '${cantidad}')`;
      con.query(sql, function (err, result){if (err) throw err;});
      message.channel.send(`${Input[1]}, ¡te han entregado un ${Input[2]} Variocolor!`, {
        file: `./files/allshiny/${Input[2]}.gif`})}});}}}});});}
catch (error) {console.error(error);}}}}