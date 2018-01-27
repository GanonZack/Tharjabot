module.exports = {
  name: 'invocar',
  cooldown: 7200,
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
var b = 3
var c = Arrays.red.length - 1
var d = Arrays.blue.length - 1
var e = Arrays.green.length - 1
var f = Arrays.colorless.length - 1
var Input = message.content.split(" ");
var h = Input[1]

if(message.content = "t!invocar"){
  if(message.channel.name === 'musica-comandos'){
  if(h > 5){message.reply("no puedes invocar a más de 5 unidades al mismo tiempo");}
  else{try {con.connect(function(err){var entrenador = message.author
  var ID = `SELECT id FROM usuarios WHERE usuario='${entrenador}'`;
  con.query(ID, function (err, result){if (err) throw err;
  if(result == "") {message.channel.send(`${Input[1]} no estas registrado en la armada, usa \`t!registro\` antes de usar estos comandos, por favor.`);}
  else{
        
    if(h == 1 || h == null){var sql = `SELECT orbes FROM usuarios WHERE usuario='${entrenador}'`;
    if(h == null){h = 1}
    con.query(sql, function (err, result){if (err) throw err;
      if(result[0].orbes < 5){message.channel.send(`No tienes orbes suficientes para invocar.`);}
      else{
      var gasto = result[0].orbes - 5
    var orbs = `UPDATE usuarios SET orbes = '${gasto}' WHERE usuario='${entrenador}'`;
  con.query(orbs, function (err, result){if (err) throw err;});
  message.channel.send('Has invocado a:')
  for(var g=0; g<h; g++){
  function aleatorio(x,y){return Math.round(Math.random()*(y-x)+parseInt(x));}
  var inv = aleatorio(a,b)

if(inv == 0) { var NumRandom = aleatorio(a,c)
        var sql = `INSERT INTO barracas (usuario, unidad) VALUES ('${entrenador}', '${Arrays.red[NumRandom]}')`;
        con.query(sql, function (err, result){if (err) throw err;});
        message.channel.send(`${Arrays.red[NumRandom]}`, {file: Arrays.FE[8]});}

else{if(inv == 1) { var NumRandom = aleatorio(a,d)
        var sql = `INSERT INTO barracas (usuario, unidad) VALUES ('${entrenador}', '${Arrays.blue[NumRandom]}')`;
        con.query(sql, function (err, result){if (err) throw err;});
        message.channel.send(`${Arrays.blue[NumRandom]}`, {file: Arrays.FE[5]});}

else{if(inv == 2) { var NumRandom = aleatorio(a,e)
        var sql = `INSERT INTO barracas (usuario, unidad) VALUES ('${entrenador}', '${Arrays.green[NumRandom]}')`;
        con.query(sql, function (err, result){if (err) throw err;});
        message.channel.send(`${Arrays.green[NumRandom]}`, {file: Arrays.FE[6]});}

else{if(inv == 3) { var NumRandom = aleatorio(a,f)
        var sql = `INSERT INTO barracas (usuario, unidad) VALUES ('${entrenador}', '${Arrays.colorless[NumRandom]}')`;
        con.query(sql, function (err, result){if (err) throw err;});
        message.channel.send(`${Arrays.colorless[NumRandom]}`, {file: Arrays.FE[7]});}}}}}}});}

  else{if(h == 2){var sql = `SELECT orbes FROM usuarios WHERE usuario='${entrenador}'`;
    con.query(sql, function (err, result){if (err) throw err;
      if(result[0].orbes < 9){message.channel.send(`No tienes orbes suficientes para invocar.`);}
      else{
      var gasto = result[0].orbes - 9
    var orbs = `UPDATE usuarios SET orbes = '${gasto}' WHERE usuario='${entrenador}'`;
  con.query(orbs, function (err, result){if (err) throw err;});
  message.channel.send('Has invocado a:')
  for(var g=0; g<h; g++){
  function aleatorio(x,y){return Math.round(Math.random()*(y-x)+parseInt(x));}
  var inv = aleatorio(a,b)

if(inv == 0) { var NumRandom = aleatorio(a,c)
        var sql = `INSERT INTO barracas (usuario, unidad) VALUES ('${entrenador}', '${Arrays.red[NumRandom]}')`;
        con.query(sql, function (err, result){if (err) throw err;});
        message.channel.send(`${Arrays.red[NumRandom]}`, {file: Arrays.FE[8]});}

else{if(inv == 1) { var NumRandom = aleatorio(a,d)
        var sql = `INSERT INTO barracas (usuario, unidad) VALUES ('${entrenador}', '${Arrays.blue[NumRandom]}')`;
        con.query(sql, function (err, result){if (err) throw err;});
        message.channel.send(`${Arrays.blue[NumRandom]}`, {file: Arrays.FE[5]});}

else{if(inv == 2) { var NumRandom = aleatorio(a,e)
        var sql = `INSERT INTO barracas (usuario, unidad) VALUES ('${entrenador}', '${Arrays.green[NumRandom]}')`;
        con.query(sql, function (err, result){if (err) throw err;});
        message.channel.send(`${Arrays.green[NumRandom]}`, {file: Arrays.FE[6]});}

else{if(inv == 3) { var NumRandom = aleatorio(a,f)
        var sql = `INSERT INTO barracas (usuario, unidad) VALUES ('${entrenador}', '${Arrays.colorless[NumRandom]}')`;
        con.query(sql, function (err, result){if (err) throw err;});
        message.channel.send(`${Arrays.colorless[NumRandom]}`, {file: Arrays.FE[7]});}}}}}}});}

else{if(h == 3){var sql = `SELECT orbes FROM usuarios WHERE usuario='${entrenador}'`;
  con.query(sql, function (err, result){if (err) throw err;
    if(result[0].orbes < 13){message.channel.send(`No tienes orbes suficientes para invocar.`);}
    else{
    var gasto = result[0].orbes - 13
  var orbs = `UPDATE usuarios SET orbes = '${gasto}' WHERE usuario='${entrenador}'`;
con.query(orbs, function (err, result){if (err) throw err;});
message.channel.send('Has invocado a:')
for(var g=0; g<h; g++){
function aleatorio(x,y){return Math.round(Math.random()*(y-x)+parseInt(x));}
var inv = aleatorio(a,b)

if(inv == 0) { var NumRandom = aleatorio(a,c)
      var sql = `INSERT INTO barracas (usuario, unidad) VALUES ('${entrenador}', '${Arrays.red[NumRandom]}')`;
      con.query(sql, function (err, result){if (err) throw err;});
      message.channel.send(`${Arrays.red[NumRandom]}`, {file: Arrays.FE[8]});}

else{if(inv == 1) { var NumRandom = aleatorio(a,d)
      var sql = `INSERT INTO barracas (usuario, unidad) VALUES ('${entrenador}', '${Arrays.blue[NumRandom]}')`;
      con.query(sql, function (err, result){if (err) throw err;});
      message.channel.send(`${Arrays.blue[NumRandom]}`, {file: Arrays.FE[5]});}

else{if(inv == 2) { var NumRandom = aleatorio(a,e)
      var sql = `INSERT INTO barracas (usuario, unidad) VALUES ('${entrenador}', '${Arrays.green[NumRandom]}')`;
      con.query(sql, function (err, result){if (err) throw err;});
      message.channel.send(`${Arrays.green[NumRandom]}`, {file: Arrays.FE[6]});}

else{if(inv == 3) { var NumRandom = aleatorio(a,f)
      var sql = `INSERT INTO barracas (usuario, unidad) VALUES ('${entrenador}', '${Arrays.colorless[NumRandom]}')`;
      con.query(sql, function (err, result){if (err) throw err;});
      message.channel.send(`${Arrays.colorless[NumRandom]}`, {file: Arrays.FE[7]});}}}}}}});}

else{ if(h == 4){var sql = `SELECT orbes FROM usuarios WHERE usuario='${entrenador}'`;
  con.query(sql, function (err, result){if (err) throw err;
    if(result[0].orbes < 17){message.channel.send(`No tienes orbes suficientes para invocar.`);}
    else{
    var gasto = result[0].orbes - 17
  var orbs = `UPDATE usuarios SET orbes = '${gasto}' WHERE usuario='${entrenador}'`;
con.query(orbs, function (err, result){if (err) throw err;});
message.channel.send('Has invocado a:')
for(var g=0; g<h; g++){
function aleatorio(x,y){return Math.round(Math.random()*(y-x)+parseInt(x));}
var inv = aleatorio(a,b)

if(inv == 0) { var NumRandom = aleatorio(a,c)
      var sql = `INSERT INTO barracas (usuario, unidad) VALUES ('${entrenador}', '${Arrays.red[NumRandom]}')`;
      con.query(sql, function (err, result){if (err) throw err;});
      message.channel.send(`${Arrays.red[NumRandom]}`, {file: Arrays.FE[8]});}

else{if(inv == 1) { var NumRandom = aleatorio(a,d)
      var sql = `INSERT INTO barracas (usuario, unidad) VALUES ('${entrenador}', '${Arrays.blue[NumRandom]}')`;
      con.query(sql, function (err, result){if (err) throw err;});
      message.channel.send(`${Arrays.blue[NumRandom]}`, {file: Arrays.FE[5]});}

else{if(inv == 2) { var NumRandom = aleatorio(a,e)
      var sql = `INSERT INTO barracas (usuario, unidad) VALUES ('${entrenador}', '${Arrays.green[NumRandom]}')`;
      con.query(sql, function (err, result){if (err) throw err;});
      message.channel.send(`${Arrays.green[NumRandom]}`, {file: Arrays.FE[6]});}

else{if(inv == 3) { var NumRandom = aleatorio(a,f)
      var sql = `INSERT INTO barracas (usuario, unidad) VALUES ('${entrenador}', '${Arrays.colorless[NumRandom]}')`;
      con.query(sql, function (err, result){if (err) throw err;});
      message.channel.send(`${Arrays.colorless[NumRandom]}`, {file: Arrays.FE[7]});}}}}}}});}

else{ if(h == 5){var sql = `SELECT orbes FROM usuarios WHERE usuario='${entrenador}'`;
  con.query(sql, function (err, result){if (err) throw err;
    if(result[0].orbes < 17){message.channel.send(`No tienes orbes suficientes para invocar.`);}
    else{
    var gasto = result[0].orbes - 20
  var orbs = `UPDATE usuarios SET orbes = '${gasto}' WHERE usuario='${entrenador}'`;
con.query(orbs, function (err, result){if (err) throw err;});
  message.channel.send('Has invocado a:')
  for(var g=0; g<h; g++){
  function aleatorio(x,y){return Math.round(Math.random()*(y-x)+parseInt(x));}
  var inv = aleatorio(a,b)

if(inv == 0) { var NumRandom = aleatorio(a,c)
        var sql = `INSERT INTO barracas (usuario, unidad) VALUES ('${entrenador}', '${Arrays.red[NumRandom]}')`;
        con.query(sql, function (err, result){if (err) throw err;});
        message.channel.send(`${Arrays.red[NumRandom]}`, {file: Arrays.FE[8]});}

else{if(inv == 1) { var NumRandom = aleatorio(a,d)
        var sql = `INSERT INTO barracas (usuario, unidad) VALUES ('${entrenador}', '${Arrays.blue[NumRandom]}')`;
        con.query(sql, function (err, result){if (err) throw err;});
        message.channel.send(`${Arrays.blue[NumRandom]}`, {file: Arrays.FE[5]});}

else{if(inv == 2) { var NumRandom = aleatorio(a,e)
        var sql = `INSERT INTO barracas (usuario, unidad) VALUES ('${entrenador}', '${Arrays.green[NumRandom]}')`;
        con.query(sql, function (err, result){if (err) throw err;});
        message.channel.send(`${Arrays.green[NumRandom]}`, {file: Arrays.FE[6]});}

else{if(inv == 3) { var NumRandom = aleatorio(a,f)
        var sql = `INSERT INTO barracas (usuario, unidad) VALUES ('${entrenador}', '${Arrays.colorless[NumRandom]}')`;
        con.query(sql, function (err, result){if (err) throw err;});
        message.channel.send(`${Arrays.colorless[NumRandom]}`, {file: Arrays.FE[7]});}}}}}}});}}}}}}});});}
catch (error) {console.error(error);}}}}
else{message.channel.send('No puedes usar este comando en este canal.')}}}