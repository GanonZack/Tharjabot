module.exports = {
  name: 'unidad',
  execute(message){
const Discord = require("discord.js");
var stats = require('fire-emblem-heroes-stats');
var Input = message.content.split(" ");
if(message.content.includes("t!unidad")){
  if(Input[1] == null) {message.reply("no especificaste ningún héroe");}
  else{if(Input[2] == null){
  var array = stats.getHero(`${Input[1]}`);  
  const embed = {"title": "PERFIL DE HÉROE",
    "color": 0xb29600,
    "image": {"url": `https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_${Input[1]}.png`},
    "fields": [{"name": "Nombre",
        "value": `${array.name}`},
      {"name": "Título",
        "value": `${array.title}`},
      {"name": "Origen",
        "value": `${array.origin}`},
      {"name": "Arma",
        "value": `${array.weaponType}`,
        "inline": true},
      {"name": "Tipo",
        "value": `${array.moveType}`,
        "inline": true}]};
  message.channel.send({ embed });}
  else{if(Input[3] == null){var array = stats.getHero(`${Input[1]} ${Input[2]}`);  
  const embed = {"title": "PERFIL DE HÉROE",
    "color": 0xb29600,
    "image": {"url": `https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_${Input[1]}%20${Input[2]}.png`},
    "fields": [{"name": "Nombre",
        "value": `${array.name}`},
      {"name": "Título",
        "value": `${array.title}`},
      {"name": "Origen",
        "value": `${array.origin}`},
      {"name": "Arma",
        "value": `${array.weaponType}`,
        "inline": true},
      {"name": "Tipo",
        "value": `${array.moveType}`,
        "inline": true}]};
        message.channel.send({ embed });} 
        else{if(Input[4] == null){var array = stats.getHero(`${Input[1]} ${Input[2]} ${Input[3]}`);  
          const embed = {"title": "PERFIL DE HÉROE",
            "color": 0xb29600,
            "image": {"url": `https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_${Input[1]}%20${Input[2]}%20${Input[3]}.png`},
            "fields": [{"name": "Nombre",
                "value": `${array.name}`},
              {"name": "Título",
                "value": `${array.title}`},
              {"name": "Origen",
                "value": `${array.origin}`},
              {"name": "Arma",
                "value": `${array.weaponType}`,
                "inline": true},
              {"name": "Tipo",
                "value": `${array.moveType}`,
                "inline": true}]};
                message.channel.send({ embed });}
                else{var array = stats.getHero(`${Input[1]} ${Input[2]} ${Input[3]} ${Input[4]}`);  
                const embed = {"title": "PERFIL DE HÉROE",
                  "color": 0xb29600,
                  "image": {"url": `https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_${Input[1]}%20${Input[2]}%20${Input[3]}%20${Input[4]}.png`},
                  "fields": [{"name": "Nombre",
                      "value": `${array.name}`},
                    {"name": "Título",
                      "value": `${array.title}`},
                    {"name": "Origen",
                      "value": `${array.origin}`},
                    {"name": "Arma",
                      "value": `${array.weaponType}`,
                      "inline": true},
                    {"name": "Tipo",
                      "value": `${array.moveType}`,
                      "inline": true}]};
                      message.channel.send({ embed });}}}}}}}