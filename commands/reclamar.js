module.exports = {
  name: 'reclamar',
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
  if (message.content.includes("t!reclamar")){
    if(message.channel.name === 'musica-comandos'){
   try {con.connect(function(err){
      var ID = `SELECT id FROM usuarios WHERE usuario='${entrenador}'`;
      con.query(ID, function (err, result){if (err) throw err;
      if(result == "") {message.reply("no estas registrado en la armada, usa \`!registro\` por favor antes de usar estos comandos.");}
      else{
          var pokemon = `SELECT pokemon FROM pc WHERE usuario='${entrenador}'`;
          con.query(pokemon, function (err, pkmn){if (err) throw err;
            var p = pkmn.length
            var berry = `SELECT baya FROM mochila WHERE usuario='${entrenador}'`;
            con.query(berry, function (err, bayas){if (err) throw err;
              var b = bayas.length
        if(p == 807){let role = message.guild.roles.find("name", "Científico");
        console.log(role);
        let member = message.member;
        console.log(member);
        member.addRole(role).catch(console.error);
    message.reply(`¡has obtenido el rol Científico!`);}
    else{message.reply('no calificas para el rol Científico.')}
    if(b == 67){let role = message.guild.roles.find("name", "Ranchero");
    console.log(role);
    let member = message.member;
    console.log(member);
    member.addRole(role).catch(console.error);
    message.reply(`¡has obtenido el rol Ranchero!`);}
  else{message.reply('no calificas para el rol Ranchero.')}
  });});}});});}
       catch (error) {console.error(error);
      message.reply('Ha ocurrido un error al asignar roles').catch(console.error)}}
    else{message.channel.send('No puedes usar este comando en este canal.')}}}}