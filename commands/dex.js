module.exports = {
  name: 'dex',
  execute(message){
const Discord = require("discord.js");
const Arrays = require("./Arrays.json");
var Input = message.content.split(" ");

if(message.content.includes("t!dex")){
  message.channel.send(`Página en Español de ${Input[1]}: http://es.pokemon.wikia.com/wiki/${Input[1]}`)}}}