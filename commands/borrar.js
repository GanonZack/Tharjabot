module.exports = {
    name: 'borrar',
    execute(message){
  const Discord = require("discord.js");
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Centro Pokemon"});
  var Input = message.content.split(" ");

  function checkRole(message,rolename){
    var authorRoles = message.member.roles.array()
    var roleNames = []
    for (var i = authorRoles.length - 1; i >= 0; i--) {
        roleNames.push(authorRoles[i].name)}
    var manager = roleNames.indexOf(rolename) != -1;
    return manager}

  if (message.content.includes("t!borrar")){
    if(message.channel.name === 'musica-comandos'){
   try {con.connect(function(err){
    if(checkRole(message,"Mod") || checkRole(message,"Criador Pokémon")){ 
        if(Input[1] == null){
            var sql = `SELECT * FROM intercambios`;
            con.query(sql, function (err, result){
              message.channel.send(`Estos son todos las ofertas publicadas:`);
              var b = result.length;
              for (var a = 0; a < b; a++){
              message.channel.send(`id: ${result[a].id} / busca: ${result[a].busca} / oferta: ${result[a].ofrece}`);}
              message.channel.send(`A continuación escribe \`t!borrar <id>\` para borrar la oferta respectiva`);});}
              else{
             var sql = `DELETE FROM intercambios WHERE id='${Input[1]}'`;
             con.query(sql, function (err, result){if (err) throw err;
             console.log("1 oferta borrada");
             message.reply(`has borrado la oferta ${Input[1]}.`)});} 
    }
       else{if(Input[1] == null){
      var sql = `SELECT * FROM intercambios WHERE usuario='${message.author}'`;
      con.query(sql, function (err, result){
        message.channel.send(`Estos son todos las ofertas hechas por ti:`);
        var b = result.length;
        for (var a = 0; a < b; a++){
        message.channel.send(`id: ${result[a].id} / busca: ${result[a].busca} / oferta: ${result[a].ofrece}`);}
        message.channel.send(`A continuación escribe \`t!borrar <id>\` para borrar la oferta respectiva`);});}
        else{
       var sql = `DELETE FROM intercambios WHERE usuario='${message.author}' AND id='${Input[1]}'`;
       con.query(sql, function (err, result){if (err) throw err;
       console.log("1 oferta borrada");
       message.reply(`has borrado la oferta ${Input[1]}.`)});}}});}
       catch (error) {console.error(error);
      message.reply('Ha ocurrido un error al publicar').catch(console.error)}}
    else{message.channel.send('No puedes usar este comando en este canal');}}}}