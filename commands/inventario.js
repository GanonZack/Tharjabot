module.exports = {
  name: 'inventario',
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
  if (message.content.includes("t!inventario")){
    if(message.channel.name === 'musica-comandos'){
   try {con.connect(function(err){
      var ID = `SELECT id FROM usuarios WHERE usuario='${entrenador}'`;
      con.query(ID, function (err, result){if (err) throw err;
      if(result == "") {message.reply("no estas registrado en la armada, usa \`!registro\` por favor antes de usar estos comandos.");}
      else{
       var orbs = `SELECT orbes FROM usuarios WHERE usuario='${entrenador}'`;
       con.query(orbs, function (err, orbes){if (err) throw err;
        var ball = `SELECT * FROM balls WHERE usuario='${entrenador}'`;
        con.query(ball, function (err, balls){if (err) throw err;
          console.log(balls);
          var pokemon = `SELECT pokemon FROM pc WHERE usuario='${entrenador}'`;
          con.query(pokemon, function (err, pkmn){if (err) throw err;
            var p = pkmn.length
            var berry = `SELECT baya FROM mochila WHERE usuario='${entrenador}'`;
            con.query(berry, function (err, bayas){if (err) throw err;
              var b = bayas.length
              var heroes = `SELECT unidad FROM barracas WHERE usuario='${entrenador}'`;
              con.query(heroes, function (err, unidad){if (err) throw err;
                var h = unidad.length
       var pagp = Math.round(p/30) + 1;
       var pagb = Math.round(b/20) + 1;
       var pagh = Math.round(h/15) + 1;

       const embed = {"color": 953906,
        "fields": [{"name": `Inventario de`,
        "value": `${entrenador}`},
        {"name": "Pokémon",
            "value": `${p}`,
            "inline": true},
          {"name": "Páginas",
            "value": `${pagp}`,
            "inline": true},
          {"name": "Pokéball",
            "value": `${balls[0].cantidad}`
          },
          {
            "name": "Masterball",
            "value": `${balls[1].cantidad}`
          },
          {
            "name": "Enteball",
            "value": `${balls[2].cantidad}`
          },
          {
            "name": "Ensueñoball",
            "value": `${balls[3].cantidad}`
          },
          {"name": "Bayas",
            "value": `${b}`,
            "inline": true},
          {"name": "Páginas",
            "value": `${pagb}`,
            "inline": true},
          {"name": "Orbes",
            "value": `${orbes[0].orbes}`},
          {"name": "Heroes",
            "value": `${h}`,
            "inline": true},
          {"name": "Páginas",
            "value": `${pagh}`,
            "inline": true}]};
      message.channel.send({ embed });
       console.log("Inventario mostrado");
       });});});});});}});});}
       catch (error) {console.error(error);
      message.reply('Ha ocurrido un error al mostrar el inventario').catch(console.error)}}
    else{message.channel.send('No puedes usar este comando en este canal.')}}}}