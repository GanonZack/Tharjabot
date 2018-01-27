module.exports = {
  name: 'capturar',
  cooldown: 14400,
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
      var b = Arrays.normal.length - 1
      var c = Arrays.legendary.length - 1
      var d = Arrays.special.length - 1
      var e = Arrays.UBs.length - 1
      var f = Arrays.probabilidad.length - 1
      var Input = message.content.split(" ");

      function checkRole(message,rolename){
        var authorRoles = message.member.roles.array()
        var roleNames = []
        for (var i = authorRoles.length - 1; i >= 0; i--) {
            roleNames.push(authorRoles[i].name)}
        var manager = roleNames.indexOf(rolename) != -1;
        return manager}
  
  if (message.content.includes("t!capturar")){
    if(checkRole(message, "Invocador")){
    if(message.channel.name === 'musica-comandos'){
    try {con.connect(function(err){var entrenador = message.author
        if(Input[1] == "pokéball" || Input[1] == null){var ball = `SELECT cantidad FROM balls WHERE usuario='${entrenador}' AND pokeball='${Input[1]}'`;
          con.query(ball, function (err, result){if (err) throw err;
            var ball2 = result[0].cantidad - 1
            if(result[0].cantidad == 0){message.channel.send(`No tienes ${Input[1]} para capturar pokémon, puedes comprarlas en la tienda del servidor.`)}
        else{var ball = `UPDATE balls SET cantidad = '${ball2}' WHERE usuario='${entrenador}' AND pokeball='${Input[1]}'`;
        con.query(ball, function (err, result){if (err) throw err;
          var ID = `SELECT id FROM usuarios WHERE usuario='${entrenador}'`;
        con.query(ID, function (err, result){if (err) throw err;
        if(result == "") {message.reply("no estas registrado en la armada, usa \`t!registro\` por favor antes de usar estos comandos.");}
        else{
          var NumRandom = captura(a,f)
          function captura(a,f){return Math.round(Math.random()*(f-a)+parseInt(a));}
          
          if(Arrays.probabilidad[NumRandom] >= Arrays.probabilidad[0] && Arrays.probabilidad[NumRandom] <= Arrays.probabilidad[99]) {
          var NumRandom2 = capturan(a,b)
          function capturan(a,b){return Math.round(Math.random()*(b-a)+parseInt(a));}
          var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.normal[NumRandom2]}'`;
          con.query(cantidad, function (err, result){if (err) throw err;
          if(result != ""){
            var cantidad2 = result[0].cantidad + 1
            var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.normal[NumRandom2]}'`;
            con.query(sql, function (err, result){if (err) throw err;});
            message.channel.send(`¡Has atrapado un ${Arrays.normal[NumRandom2]}!`, {
              file: `./files/normal/${Arrays.normal2[NumRandom2]}`})}
          else{
          var cantidad = 1
          var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.normal[NumRandom2]}', '${cantidad}')`;
          con.query(sql, function (err, result){if (err) throw err;});
          message.channel.send(`¡Has atrapado un ${Arrays.normal[NumRandom2]}!`, {
            file: `./files/normal/${Arrays.normal2[NumRandom2]}`})}});}

          else{if(Arrays.probabilidad[NumRandom] >= Arrays.probabilidad[100] && Arrays.probabilidad[NumRandom] <= Arrays.probabilidad[102]) {
              var NumRandom2 = capturas(a,b)
              function capturas(a,b){return Math.round(Math.random()*(b-a)+parseInt(a));}
              var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.normal[NumRandom2]} Variocolor'`;
              con.query(cantidad, function (err, result){if (err) throw err;
              if(result != ""){
                var cantidad2 = result[0].cantidad + 1
                var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.normal[NumRandom2]} Variocolor'`;
                con.query(sql, function (err, result){if (err) throw err;});
                message.channel.send(`¡Has atrapado un ${Arrays.normal[NumRandom2]} Variocolor!`, {
                  file: `./files/shiny/${Arrays.normal2[NumRandom2]}`})}
              else{
              var cantidad = 1
              var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.normal[NumRandom2]} Variocolor', '${cantidad}')`;
              con.query(sql, function (err, result){if (err) throw err;});
              message.channel.send(`¡Has atrapado un ${Arrays.normal[NumRandom2]} Variocolor!`, {
                file: `./files/shiny/${Arrays.normal2[NumRandom2]}`})}});}
    
                else{if(Arrays.probabilidad[NumRandom] >= Arrays.probabilidad[103] && Arrays.probabilidad[NumRandom] <= Arrays.probabilidad[112]) {
                  var NumRandom2 = captural(a,c)
                  function captural(a,c){return Math.round(Math.random()*(c-a)+parseInt(a));}
                  var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.legendary[NumRandom2]}'`;
                  con.query(cantidad, function (err, result){if (err) throw err;
                  if(result != ""){
                    var cantidad2 = result[0].cantidad + 1
                    var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.legendary[NumRandom2]}'`;
                    con.query(sql, function (err, result){if (err) throw err;});
                    message.channel.send(`¡Has atrapado un ${Arrays.legendary[NumRandom2]}!`, {
                      file: `./files/legendary/${Arrays.legendary2[NumRandom2]}`})}
                  else{
                  var cantidad = 1
                  var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.legendary[NumRandom2]}', '${cantidad}')`;
                  con.query(sql, function (err, result){if (err) throw err;});
                  message.channel.send(`¡Has atrapado un ${Arrays.legendary[NumRandom2]}!`, {
                    file: `./files/legendary/${Arrays.legendary2[NumRandom2]}`})}});}
         
                    else{if(Arrays.probabilidad[NumRandom] == Arrays.probabilidad[113]) {
                      var NumRandom2 = capturals(a,c)
                      function capturals(a,c){return Math.round(Math.random()*(c-a)+parseInt(a));}
                      var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.legendary[NumRandom2]} Variocolor'`;
                      con.query(cantidad, function (err, result){
                      if(result != ""){if (err) throw err;
                        var cantidad2 = result[0].cantidad + 1
                        var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.normal[NumRandom2]} Variocolor'`;
                        con.query(sql, function (err, result){if (err) throw err;});
                        message.channel.send(`¡Has atrapado un ${Arrays.legendary[NumRandom2]} Variocolor!`, {
                          file: `./files/legendaryshiny/${Arrays.legendary2[NumRandom2]}`})}
                      else{
                      var cantidad = 1
                      var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.normal[NumRandom2]} Variocolor', '${cantidad}')`;
                      con.query(sql, function (err, result){if (err) throw err;});
                      message.channel.send(`¡Has atrapado un ${Arrays.legendary[NumRandom2]} Variocolor!`, {
                        file: `./files/legendaryshiny/${Arrays.legendary2[NumRandom2]}`})}});}

                        else{if(Arrays.probabilidad[NumRandom] >= Arrays.probabilidad[114] && Arrays.probabilidad[NumRandom] <= Arrays.probabilidad[128]) {
                          var NumRandom2 = capturasp(a,d)
                          function capturasp(a,d){return Math.round(Math.random()*(d-a)+parseInt(a));}
                          var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.special[NumRandom2]}'`;
                          con.query(cantidad, function (err, result){if (err) throw err;
                          if(result != ""){
                            var cantidad2 = result[0].cantidad + 1
                            var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.special[NumRandom2]}'`;
                            con.query(sql, function (err, result){if (err) throw err;});
                            message.channel.send(`¡Has atrapado un ${Arrays.special[NumRandom2]}!`, {
                              file: `./files/special/${Arrays.special2[NumRandom2]}`})}
                          else{
                          var cantidad = 1
                          var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.special[NumRandom2]}', '${cantidad}')`;
                          con.query(sql, function (err, result){if (err) throw err;});
                          message.channel.send(`¡Has atrapado un ${Arrays.special[NumRandom2]}!`, {
                            file: `./files/special/${Arrays.special2[NumRandom2]}`})}});}

                            else{if(Arrays.probabilidad[NumRandom] >= Arrays.probabilidad[129] && Arrays.probabilidad[NumRandom] <= Arrays.probabilidad[133]) {
                              var NumRandom2 = capturasps(a,d)
                              function capturasps(a,d){return Math.round(Math.random()*(d-a)+parseInt(a));}
                              var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.special[NumRandom2]} Variocolor'`;
                              con.query(cantidad, function (err, result){if (err) throw err;
                              if(result != ""){
                                var cantidad2 = result[0].cantidad + 1
                                var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.special[NumRandom2]} Variocolor'`;
                                con.query(sql, function (err, result){if (err) throw err;});
                                message.channel.send(`¡Has atrapado un ${Arrays.special[NumRandom2]} Variocolor!`, {
                                  file: `./files/specialshiny/${Arrays.special2[NumRandom2]}`})}
                              else{
                              var cantidad = 1
                              var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.special[NumRandom2]} Variocolor', '${cantidad}')`;
                              con.query(sql, function (err, result){if (err) throw err;});
                              message.channel.send(`¡Has atrapado un ${Arrays.special[NumRandom2]} Variocolor!`, {
                                file: `./files/specialshiny/${Arrays.special2[NumRandom2]}`})}});}

                                else{if(Arrays.probabilidad[NumRandom] >= Arrays.probabilidad[134] && Arrays.probabilidad[NumRandom] <= Arrays.probabilidad[158]) {
                                  var NumRandom2 = capturaub(a,e)
                                  function capturaub(a,e){return Math.round(Math.random()*(e-a)+parseInt(a));}
                                  var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.UBs[NumRandom2]}'`;
                                  con.query(cantidad, function (err, result){if (err) throw err;
                                  if(result != ""){
                                    var cantidad2 = result[0].cantidad + 1
                                    var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.UBs[NumRandom2]}'`;
                                    con.query(sql, function (err, result){if (err) throw err;});
                                    message.channel.send(`¡Has atrapado un ${Arrays.UBs[NumRandom2]}!`, {
                                      file: `./files/UBs/${Arrays.UBs2[NumRandom2]}`})}
                                  else{
                                  var cantidad = 1
                                  var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.UBs[NumRandom2]}', '${cantidad}')`;
                                  con.query(sql, function (err, result){if (err) throw err;});
                                  message.channel.send(`¡Has atrapado un ${Arrays.UBs[NumRandom2]}!`, {
                                    file: `./files/UBs/${Arrays.UBs2[NumRandom2]}`})}});}
                                    
                                    else{if(Arrays.probabilidad[NumRandom] >= Arrays.probabilidad[159] && Arrays.probabilidad[NumRandom] <= Arrays.probabilidad[160]) {
                                      var NumRandom2 = capturaubs(a,e)
                                      function capturaubs(a,e){return Math.round(Math.random()*(e-a)+parseInt(a));}
                                      var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.UBs[NumRandom2]}'`;
                                      con.query(cantidad, function (err, result){if (err) throw err;
                                      if(result != ""){
                                        var cantidad2 = result[0].cantidad + 1
                                        var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.UBs[NumRandom2]}'`;
                                        con.query(sql, function (err, result){if (err) throw err;});
                                        message.channel.send(`¡Has atrapado un ${Arrays.UBs[NumRandom2]} Variocolor!`, {
                                          file: `./files/UBsshiny/${Arrays.UBs2[NumRandom2]}`})}
                                      else{
                                      var cantidad = 1
                                      var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.UBs[NumRandom2]}', '${cantidad}')`;
                                      con.query(sql, function (err, result){if (err) throw err;});
                                      message.channel.send(`¡Has atrapado un ${Arrays.UBs[NumRandom2]} Variocolor!`, {
                                        file: `./files/UBsshiny/${Arrays.UBs2[NumRandom2]}`})}});}}}}}}}}}});});}});}

     else{if(Input[1] == "masterball"){
      var ball = `SELECT cantidad FROM balls WHERE usuario='${entrenador}' AND pokeball='${Input[1]}'`;
      con.query(ball, function (err, result){if (err) throw err;
        var ball2 = result[0].cantidad - 1
        if(result[0].cantidad == 0){message.channel.send(`No tienes ${Input[1]} para capturar pokémon, puedes comprarlas en la tienda del servidor.`)}
    else{
      var ball = `UPDATE balls SET cantidad = '${ball2}' WHERE usuario='${entrenador}' AND pokeball='${Input[1]}'`;
    con.query(ball, function (err, result){if (err) throw err;
      var ID = `SELECT id FROM usuarios WHERE usuario='${entrenador}'`;
    con.query(ID, function (err, result){if (err) throw err;
    if(result == "") {message.reply("no estas registrado en la armada, usa \`!registro\` por favor antes de usar estos comandos.");}
    else{
      var NumRandom = captura(a,f)
      function captura(a,f){return Math.round(Math.random()*(f-a)+parseInt(a));}
      
      if(Arrays.probabilidad2[NumRandom] >= Arrays.probabilidad2[0] && Arrays.probabilidad2[NumRandom] <= Arrays.probabilidad2[91]) {
      var NumRandom2 = capturan(a,b)
      function capturan(a,b){return Math.round(Math.random()*(b-a)+parseInt(a));}
      var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.normal[NumRandom2]}'`;
      con.query(cantidad, function (err, result){if (err) throw err;
      if(result != ""){
        var cantidad2 = result[0].cantidad + 1
        var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.normal[NumRandom2]}'`;
        con.query(sql, function (err, result){if (err) throw err;});
        message.channel.send(`¡Has atrapado un ${Arrays.normal[NumRandom2]}!`, {
          file: `./files/normal/${Arrays.normal2[NumRandom2]}`})}
      else{
      var cantidad = 1
      var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.normal[NumRandom2]}', '${cantidad}')`;
      con.query(sql, function (err, result){if (err) throw err;});
      message.channel.send(`¡Has atrapado un ${Arrays.normal[NumRandom2]}!`, {
        file: `./files/normal/${Arrays.normal2[NumRandom2]}`})}});}

      else{if(Arrays.probabilidad2[NumRandom] >= Arrays.probabilidad2[92] && Arrays.probabilidad2[NumRandom] <= Arrays.probabilidad2[94]) {
          var NumRandom2 = capturas(a,b)
          function capturas(a,b){return Math.round(Math.random()*(b-a)+parseInt(a));}
          var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.normal[NumRandom2]} Variocolor'`;
          con.query(cantidad, function (err, result){if (err) throw err;
          if(result != ""){
            var cantidad2 = result[0].cantidad + 1
            var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.normal[NumRandom2]} Variocolor'`;
            con.query(sql, function (err, result){if (err) throw err;});
            message.channel.send(`¡Has atrapado un ${Arrays.normal[NumRandom2]} Variocolor!`, {
              file: `./files/shiny/${Arrays.normal2[NumRandom2]}`})}
          else{
          var cantidad = 1
          var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.normal[NumRandom2]} Variocolor', '${cantidad}')`;
          con.query(sql, function (err, result){if (err) throw err;});
          message.channel.send(`¡Has atrapado un ${Arrays.normal[NumRandom2]} Variocolor!`, {
            file: `./files/shiny/${Arrays.normal2[NumRandom2]}`})}});}

            else{if(Arrays.probabilidad2[NumRandom] >= Arrays.probabilidad2[95] && Arrays.probabilidad2[NumRandom] <= Arrays.probabilidad2[150]) {
              var NumRandom2 = captural(a,c)
              function captural(a,c){return Math.round(Math.random()*(c-a)+parseInt(a));}
              var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.legendary[NumRandom2]}'`;
              con.query(cantidad, function (err, result){if (err) throw err;
              if(result != ""){
                var cantidad2 = result[0].cantidad + 1
                var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.legendary[NumRandom2]}'`;
                con.query(sql, function (err, result){if (err) throw err;});
                message.channel.send(`¡Has atrapado un ${Arrays.legendary[NumRandom2]}!`, {
                  file: `./files/legendary/${Arrays.legendary2[NumRandom2]}`})}
              else{
              var cantidad = 1
              var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.legendary[NumRandom2]}', '${cantidad}')`;
              con.query(sql, function (err, result){if (err) throw err;});
              message.channel.send(`¡Has atrapado un ${Arrays.legendary[NumRandom2]}!`, {
                file: `./files/legendary/${Arrays.legendary2[NumRandom2]}`})}});}
     
                else{if(Arrays.probabilidad2[NumRandom] >= Arrays.probabilidad2[151] && Arrays.probabilidad2[NumRandom] <= Arrays.probabilidad2[155]) {
                  var NumRandom2 = capturals(a,c)
                  function capturals(a,c){return Math.round(Math.random()*(c-a)+parseInt(a));}
                  var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.legendary[NumRandom2]} Variocolor'`;
                  con.query(cantidad, function (err, result){
                  if(result != ""){if (err) throw err;
                    var cantidad2 = result[0].cantidad + 1
                    var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.normal[NumRandom2]} Variocolor'`;
                    con.query(sql, function (err, result){if (err) throw err;});
                    message.channel.send(`¡Has atrapado un ${Arrays.legendary[NumRandom2]} Variocolor!`, {
                      file: `./files/legendaryshiny/${Arrays.legendary2[NumRandom2]}`})}
                  else{
                  var cantidad = 1
                  var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.normal[NumRandom2]} Variocolor', '${cantidad}')`;
                  con.query(sql, function (err, result){if (err) throw err;});
                  message.channel.send(`¡Has atrapado un ${Arrays.legendary[NumRandom2]} Variocolor!`, {
                    file: `./files/legendaryshiny/${Arrays.legendary2[NumRandom2]}`})}});}

                    else{if(Arrays.probabilidad2[NumRandom] >= Arrays.probabilidad2[156] && Arrays.probabilidad2[NumRandom] <= Arrays.probabilidad2[170]) {
                      var NumRandom2 = capturasp(a,d)
                      function capturasp(a,d){return Math.round(Math.random()*(d-a)+parseInt(a));}
                      var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.special[NumRandom2]}'`;
                      con.query(cantidad, function (err, result){if (err) throw err;
                      if(result != ""){
                        var cantidad2 = result[0].cantidad + 1
                        var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.special[NumRandom2]}'`;
                        con.query(sql, function (err, result){if (err) throw err;});
                        message.channel.send(`¡Has atrapado un ${Arrays.special[NumRandom2]}!`, {
                          file: `./files/special/${Arrays.special2[NumRandom2]}`})}
                      else{
                      var cantidad = 1
                      var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.special[NumRandom2]}', '${cantidad}')`;
                      con.query(sql, function (err, result){if (err) throw err;});
                      message.channel.send(`¡Has atrapado un ${Arrays.special[NumRandom2]}!`, {
                        file: `./files/special/${Arrays.special2[NumRandom2]}`})}});}

                        else{if(Arrays.probabilidad2[NumRandom] >= Arrays.probabilidad2[171] && Arrays.probabilidad2[NumRandom] <= Arrays.probabilidad2[175]) {
                          var NumRandom2 = capturasps(a,d)
                          function capturasps(a,d){return Math.round(Math.random()*(d-a)+parseInt(a));}
                          var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.special[NumRandom2]} Variocolor'`;
                          con.query(cantidad, function (err, result){if (err) throw err;
                          if(result != ""){
                            var cantidad2 = result[0].cantidad + 1
                            var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.special[NumRandom2]} Variocolor'`;
                            con.query(sql, function (err, result){if (err) throw err;});
                            message.channel.send(`¡Has atrapado un ${Arrays.special[NumRandom2]} Variocolor!`, {
                              file: `./files/specialshiny/${Arrays.special2[NumRandom2]}`})}
                          else{
                          var cantidad = 1
                          var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.special[NumRandom2]} Variocolor', '${cantidad}')`;
                          con.query(sql, function (err, result){if (err) throw err;});
                          message.channel.send(`¡Has atrapado un ${Arrays.special[NumRandom2]} Variocolor!`, {
                            file: `./files/specialshiny/${Arrays.special2[NumRandom2]}`})}});}

                            else{if(Arrays.probabilidad2[NumRandom] >= Arrays.probabilidad2[176] && Arrays.probabilidad2[NumRandom] <= Arrays.probabilidad2[200]) {
                              var NumRandom2 = capturaub(a,e)
                              function capturaub(a,e){return Math.round(Math.random()*(e-a)+parseInt(a));}
                              var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.UBs[NumRandom2]}'`;
                              con.query(cantidad, function (err, result){if (err) throw err;
                              if(result != ""){
                                var cantidad2 = result[0].cantidad + 1
                                var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.UBs[NumRandom2]}'`;
                                con.query(sql, function (err, result){if (err) throw err;});
                                message.channel.send(`¡Has atrapado un ${Arrays.UBs[NumRandom2]}!`, {
                                  file: `./files/UBs/${Arrays.UBs2[NumRandom2]}`})}
                              else{
                              var cantidad = 1
                              var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.UBs[NumRandom2]}', '${cantidad}')`;
                              con.query(sql, function (err, result){if (err) throw err;});
                              message.channel.send(`¡Has atrapado un ${Arrays.UBs[NumRandom2]}!`, {
                                file: `./files/UBs/${Arrays.UBs2[NumRandom2]}`})}});}
                                
                                else{if(Arrays.probabilidad2[NumRandom] >= Arrays.probabilidad2[201] && Arrays.probabilidad2[NumRandom] <= Arrays.probabilidad2[202]) {
                                  var NumRandom2 = capturaubs(a,e)
                                  function capturaubs(a,e){return Math.round(Math.random()*(e-a)+parseInt(a));}
                                  var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.UBs[NumRandom2]}'`;
                                  con.query(cantidad, function (err, result){if (err) throw err;
                                  if(result != ""){
                                    var cantidad2 = result[0].cantidad + 1
                                    var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.UBs[NumRandom2]}'`;
                                    con.query(sql, function (err, result){if (err) throw err;});
                                    message.channel.send(`¡Has atrapado un ${Arrays.UBs[NumRandom2]} Variocolor!`, {
                                      file: `./files/UBsshiny/${Arrays.UBs2[NumRandom2]}`})}
                                  else{
                                  var cantidad = 1
                                  var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.UBs[NumRandom2]}', '${cantidad}')`;
                                  con.query(sql, function (err, result){if (err) throw err;});
                                  message.channel.send(`¡Has atrapado un ${Arrays.UBs[NumRandom2]} Variocolor!`, {
                                    file: `./files/UBsshiny/${Arrays.UBs2[NumRandom2]}`})}});}}}}}}}}}});});}});}

                                else{if(Input[1] == "enteball"){
                                  var ball = `SELECT cantidad FROM balls WHERE usuario='${entrenador}' AND pokeball='${Input[1]}'`;
                                  con.query(ball, function (err, result){if (err) throw err;
                                    var ball2 = result[0].cantidad - 1
                                    if(result[0].cantidad == 0){message.channel.send(`No tienes ${Input[1]} para capturar pokémon, puedes comprarlas en la tienda del servidor.`)}
                                else{
                                  var ball = `UPDATE balls SET cantidad = '${ball2}' WHERE usuario='${entrenador}' AND pokeball='${Input[1]}'`;
                                con.query(ball, function (err, result){if (err) throw err;
                                  var ID = `SELECT id FROM usuarios WHERE usuario='${entrenador}'`;
                                con.query(ID, function (err, result){if (err) throw err;
                                if(result == "") {message.reply("no estas registrado en la armada, usa \`!registro\` por favor antes de usar estos comandos.");}
                                else{
                                  var NumRandom = captura(a,f)
                                  function captura(a,f){return Math.round(Math.random()*(f-a)+parseInt(a));}
                                  
                                  if(Arrays.probabilidad3[NumRandom] >= Arrays.probabilidad3[0] && Arrays.probabilidad3[NumRandom] <= Arrays.probabilidad3[99]) {
                                  var NumRandom2 = capturan(a,b)
                                  function capturan(a,b){return Math.round(Math.random()*(b-a)+parseInt(a));}
                                  var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.normal[NumRandom2]}'`;
                                  con.query(cantidad, function (err, result){if (err) throw err;
                                  if(result != ""){
                                    var cantidad2 = result[0].cantidad + 1
                                    var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.normal[NumRandom2]}'`;
                                    con.query(sql, function (err, result){if (err) throw err;});
                                    message.channel.send(`¡Has atrapado un ${Arrays.normal[NumRandom2]}!`, {
                                      file: `./files/normal/${Arrays.normal2[NumRandom2]}`})}
                                  else{
                                  var cantidad = 1
                                  var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.normal[NumRandom2]}', '${cantidad}')`;
                                  con.query(sql, function (err, result){if (err) throw err;});
                                  message.channel.send(`¡Has atrapado un ${Arrays.normal[NumRandom2]}!`, {
                                    file: `./files/normal/${Arrays.normal2[NumRandom2]}`})}});}
                        
                                  else{if(Arrays.probabilidad3[NumRandom] >= Arrays.probabilidad3[100] && Arrays.probabilidad3[NumRandom] <= Arrays.probabilidad3[102]) {
                                      var NumRandom2 = capturas(a,b)
                                      function capturas(a,b){return Math.round(Math.random()*(b-a)+parseInt(a));}
                                      var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.normal[NumRandom2]} Variocolor'`;
                                      con.query(cantidad, function (err, result){if (err) throw err;
                                      if(result != ""){
                                        var cantidad2 = result[0].cantidad + 1
                                        var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.normal[NumRandom2]} Variocolor'`;
                                        con.query(sql, function (err, result){if (err) throw err;});
                                        message.channel.send(`¡Has atrapado un ${Arrays.normal[NumRandom2]} Variocolor!`, {
                                          file: `./files/shiny/${Arrays.normal2[NumRandom2]}`})}
                                      else{
                                      var cantidad = 1
                                      var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.normal[NumRandom2]} Variocolor', '${cantidad}')`;
                                      con.query(sql, function (err, result){if (err) throw err;});
                                      message.channel.send(`¡Has atrapado un ${Arrays.normal[NumRandom2]} Variocolor!`, {
                                        file: `./files/shiny/${Arrays.normal2[NumRandom2]}`})}});}
                            
                                        else{if(Arrays.probabilidad3[NumRandom] >= Arrays.probabilidad3[103] && Arrays.probabilidad3[NumRandom] <= Arrays.probabilidad3[112]) {
                                          var NumRandom2 = captural(a,c)
                                          function captural(a,c){return Math.round(Math.random()*(c-a)+parseInt(a));}
                                          var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.legendary[NumRandom2]}'`;
                                          con.query(cantidad, function (err, result){if (err) throw err;
                                          if(result != ""){
                                            var cantidad2 = result[0].cantidad + 1
                                            var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.legendary[NumRandom2]}'`;
                                            con.query(sql, function (err, result){if (err) throw err;});
                                            message.channel.send(`¡Has atrapado un ${Arrays.legendary[NumRandom2]}!`, {
                                              file: `./files/legendary/${Arrays.legendary2[NumRandom2]}`})}
                                          else{
                                          var cantidad = 1
                                          var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.legendary[NumRandom2]}', '${cantidad}')`;
                                          con.query(sql, function (err, result){if (err) throw err;});
                                          message.channel.send(`¡Has atrapado un ${Arrays.legendary[NumRandom2]}!`, {
                                            file: `./files/legendary/${Arrays.legendary2[NumRandom2]}`})}});}
                                 
                                            else{if(Arrays.probabilidad3[NumRandom] == Arrays.probabilidad3[113]) {
                                              var NumRandom2 = capturals(a,c)
                                              function capturals(a,c){return Math.round(Math.random()*(c-a)+parseInt(a));}
                                              var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.legendary[NumRandom2]} Variocolor'`;
                                              con.query(cantidad, function (err, result){
                                              if(result != ""){if (err) throw err;
                                                var cantidad2 = result[0].cantidad + 1
                                                var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.normal[NumRandom2]} Variocolor'`;
                                                con.query(sql, function (err, result){if (err) throw err;});
                                                message.channel.send(`¡Has atrapado un ${Arrays.legendary[NumRandom2]} Variocolor!`, {
                                                  file: `./files/legendaryshiny/${Arrays.legendary2[NumRandom2]}`})}
                                              else{
                                              var cantidad = 1
                                              var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.normal[NumRandom2]} Variocolor', '${cantidad}')`;
                                              con.query(sql, function (err, result){if (err) throw err;});
                                              message.channel.send(`¡Has atrapado un ${Arrays.legendary[NumRandom2]} Variocolor!`, {
                                                file: `./files/legendaryshiny/${Arrays.legendary2[NumRandom2]}`})}});}
                        
                                                else{if(Arrays.probabilidad3[NumRandom] >= Arrays.probabilidad3[114] && Arrays.probabilidad3[NumRandom] <= Arrays.probabilidad3[128]) {
                                                  var NumRandom2 = capturasp(a,d)
                                                  function capturasp(a,d){return Math.round(Math.random()*(d-a)+parseInt(a));}
                                                  var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.special[NumRandom2]}'`;
                                                  con.query(cantidad, function (err, result){if (err) throw err;
                                                  if(result != ""){
                                                    var cantidad2 = result[0].cantidad + 1
                                                    var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.special[NumRandom2]}'`;
                                                    con.query(sql, function (err, result){if (err) throw err;});
                                                    message.channel.send(`¡Has atrapado un ${Arrays.special[NumRandom2]}!`, {
                                                      file: `./files/special/${Arrays.special2[NumRandom2]}`})}
                                                  else{
                                                  var cantidad = 1
                                                  var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.special[NumRandom2]}', '${cantidad}')`;
                                                  con.query(sql, function (err, result){if (err) throw err;});
                                                  message.channel.send(`¡Has atrapado un ${Arrays.special[NumRandom2]}!`, {
                                                    file: `./files/special/${Arrays.special2[NumRandom2]}`})}});}
                        
                                                    else{if(Arrays.probabilidad3[NumRandom] >= Arrays.probabilidad3[129] && Arrays.probabilidad3[NumRandom] <= Arrays.probabilidad3[133]) {
                                                      var NumRandom2 = capturasps(a,d)
                                                      function capturasps(a,d){return Math.round(Math.random()*(d-a)+parseInt(a));}
                                                      var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.special[NumRandom2]} Variocolor'`;
                                                      con.query(cantidad, function (err, result){if (err) throw err;
                                                      if(result != ""){
                                                        var cantidad2 = result[0].cantidad + 1
                                                        var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.special[NumRandom2]} Variocolor'`;
                                                        con.query(sql, function (err, result){if (err) throw err;});
                                                        message.channel.send(`¡Has atrapado un ${Arrays.special[NumRandom2]} Variocolor!`, {
                                                          file: `./files/specialshiny/${Arrays.special2[NumRandom2]}`})}
                                                      else{
                                                      var cantidad = 1
                                                      var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.special[NumRandom2]} Variocolor', '${cantidad}')`;
                                                      con.query(sql, function (err, result){if (err) throw err;});
                                                      message.channel.send(`¡Has atrapado un ${Arrays.special[NumRandom2]} Variocolor!`, {
                                                        file: `./files/specialshiny/${Arrays.special2[NumRandom2]}`})}});}
                        
                                                        else{if(Arrays.probabilidad3[NumRandom] >= Arrays.probabilidad3[134] && Arrays.probabilidad3[NumRandom] <= Arrays.probabilidad3[200]) {
                                                          var NumRandom2 = capturaub(a,e)
                                                          function capturaub(a,e){return Math.round(Math.random()*(e-a)+parseInt(a));}
                                                          var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.UBs[NumRandom2]}'`;
                                                          con.query(cantidad, function (err, result){if (err) throw err;
                                                          if(result != ""){
                                                            var cantidad2 = result[0].cantidad + 1
                                                            var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.UBs[NumRandom2]}'`;
                                                            con.query(sql, function (err, result){if (err) throw err;});
                                                            message.channel.send(`¡Has atrapado un ${Arrays.UBs[NumRandom2]}!`, {
                                                              file: `./files/UBs/${Arrays.UBs2[NumRandom2]}`})}
                                                          else{
                                                          var cantidad = 1
                                                          var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.UBs[NumRandom2]}', '${cantidad}')`;
                                                          con.query(sql, function (err, result){if (err) throw err;
                                                          console.log(result)});
                                                          message.channel.send(`¡Has atrapado un ${Arrays.UBs[NumRandom2]}!`, {
                                                            file: `./files/UBs/${Arrays.UBs2[NumRandom2]}`})}});}
                                                            
                                                            else{if(Arrays.probabilidad3[NumRandom] >= Arrays.probabilidad3[201] && Arrays.probabilidad3[NumRandom] <= Arrays.probabilidad3[205]) {
                                                              var NumRandom2 = capturaubs(a,e)
                                                              function capturaubs(a,e){return Math.round(Math.random()*(e-a)+parseInt(a));}
                                                              var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.UBs[NumRandom2]}'`;
                                                              con.query(cantidad, function (err, result){if (err) throw err;
                                                              if(result != ""){
                                                                var cantidad2 = result[0].cantidad + 1
                                                                var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.UBs[NumRandom2]}'`;
                                                                con.query(sql, function (err, result){if (err) throw err;});
                                                                message.channel.send(`¡Has atrapado un ${Arrays.UBs[NumRandom2]} Variocolor!`, {
                                                                  file: `./files/UBsshiny/${Arrays.UBs2[NumRandom2]}`})}
                                                              else{
                                                              var cantidad = 1
                                                              var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.UBs[NumRandom2]}', '${cantidad}')`;
                                                              con.query(sql, function (err, result){if (err) throw err;});
                                                              message.channel.send(`¡Has atrapado un ${Arrays.UBs[NumRandom2]} Variocolor!`, {
                                                                file: `./files/UBsshiny/${Arrays.UBs2[NumRandom2]}`})}});}}}}}}}}}});});}});}

                                                                else{if(Input[1] == "ensueñoball"){
                                                                  var ball = `SELECT cantidad FROM balls WHERE usuario='${entrenador}' AND pokeball='${Input[1]}'`;
                                                                  con.query(ball, function (err, result){if (err) throw err;
                                                                    var ball2 = result[0].cantidad - 1
                                                                    if(result[0].cantidad == 0){message.channel.send(`No tienes ${Input[1]} para capturar pokémon, puedes comprarlas en la tienda del servidor.`)}
                                                                else{
                                                                  var ball = `UPDATE balls SET cantidad = '${ball2}' WHERE usuario='${entrenador}' AND pokeball='${Input[1]}'`;
                                                                con.query(ball, function (err, result){if (err) throw err;
                                                                  var ID = `SELECT id FROM usuarios WHERE usuario='${entrenador}'`;
                                                                con.query(ID, function (err, result){if (err) throw err;
                                                                if(result == "") {message.reply("no estas registrado en la armada, usa \`!registro\` por favor antes de usar estos comandos.");}
                                                                else{
                                                                  var NumRandom = captura(a,f)
                                                                  function captura(a,f){return Math.round(Math.random()*(f-a)+parseInt(a));}
                                                                  
                                                                  if(Arrays.probabilidad4[NumRandom] >= Arrays.probabilidad4[0] && Arrays.probabilidad4[NumRandom] <= Arrays.probabilidad4[89]) {
                                                                  var NumRandom2 = capturan(a,b)
                                                                  function capturan(a,b){return Math.round(Math.random()*(b-a)+parseInt(a));}
                                                                  var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.normal[NumRandom2]}'`;
                                                                  con.query(cantidad, function (err, result){if (err) throw err;
                                                                  if(result != ""){
                                                                    var cantidad2 = result[0].cantidad + 1
                                                                    var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.normal[NumRandom2]}'`;
                                                                    con.query(sql, function (err, result){if (err) throw err;});
                                                                    message.channel.send(`¡Has atrapado un ${Arrays.normal[NumRandom2]}!`, {
                                                                      file: `./files/normal/${Arrays.normal2[NumRandom2]}`})}
                                                                  else{
                                                                  var cantidad = 1
                                                                  var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.normal[NumRandom2]}', '${cantidad}')`;
                                                                  con.query(sql, function (err, result){if (err) throw err;});
                                                                  message.channel.send(`¡Has atrapado un ${Arrays.normal[NumRandom2]}!`, {
                                                                    file: `./files/normal/${Arrays.normal2[NumRandom2]}`})}});}
                                                        
                                                                  else{if(Arrays.probabilidad4[NumRandom] >= Arrays.probabilidad4[90] && Arrays.probabilidad4[NumRandom] <= Arrays.probabilidad4[98]) {
                                                                      var NumRandom2 = capturas(a,b)
                                                                      function capturas(a,b){return Math.round(Math.random()*(b-a)+parseInt(a));}
                                                                      var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.normal[NumRandom2]} Variocolor'`;
                                                                      con.query(cantidad, function (err, result){if (err) throw err;
                                                                      if(result != ""){
                                                                        var cantidad2 = result[0].cantidad + 1
                                                                        var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.normal[NumRandom2]} Variocolor'`;
                                                                        con.query(sql, function (err, result){if (err) throw err;});
                                                                        message.channel.send(`¡Has atrapado un ${Arrays.normal[NumRandom2]} Variocolor!`, {
                                                                          file: `./files/shiny/${Arrays.normal2[NumRandom2]}`})}
                                                                      else{
                                                                      var cantidad = 1
                                                                      var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.normal[NumRandom2]} Variocolor', '${cantidad}')`;
                                                                      con.query(sql, function (err, result){if (err) throw err;});
                                                                      message.channel.send(`¡Has atrapado un ${Arrays.normal[NumRandom2]} Variocolor!`, {
                                                                        file: `./files/shiny/${Arrays.normal2[NumRandom2]}`})}});}
                                                            
                                                                        else{if(Arrays.probabilidad4[NumRandom] >= Arrays.probabilidad4[99] && Arrays.probabilidad4[NumRandom] <= Arrays.probabilidad4[105]) {
                                                                          var NumRandom2 = captural(a,c)
                                                                          function captural(a,c){return Math.round(Math.random()*(c-a)+parseInt(a));}
                                                                          var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.legendary[NumRandom2]}'`;
                                                                          con.query(cantidad, function (err, result){if (err) throw err;
                                                                          if(result != ""){
                                                                            var cantidad2 = result[0].cantidad + 1
                                                                            var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.legendary[NumRandom2]}'`;
                                                                            con.query(sql, function (err, result){if (err) throw err;});
                                                                            message.channel.send(`¡Has atrapado un ${Arrays.legendary[NumRandom2]}!`, {
                                                                              file: `./files/legendary/${Arrays.legendary2[NumRandom2]}`})}
                                                                          else{
                                                                          var cantidad = 1
                                                                          var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.legendary[NumRandom2]}', '${cantidad}')`;
                                                                          con.query(sql, function (err, result){if (err) throw err;});
                                                                          message.channel.send(`¡Has atrapado un ${Arrays.legendary[NumRandom2]}!`, {
                                                                            file: `./files/legendary/${Arrays.legendary2[NumRandom2]}`})}});}
                                                                 
                                                                            else{if(Arrays.probabilidad4[NumRandom] >= Arrays.probabilidad4[106] && Arrays.probabilidad4[NumRandom] <= Arrays.probabilidad[107]) {
                                                                              var NumRandom2 = capturals(a,c)
                                                                              function capturals(a,c){return Math.round(Math.random()*(c-a)+parseInt(a));}
                                                                              var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.legendary[NumRandom2]} Variocolor'`;
                                                                              con.query(cantidad, function (err, result){
                                                                              if(result != ""){if (err) throw err;
                                                                                var cantidad2 = result[0].cantidad + 1
                                                                                var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.normal[NumRandom2]} Variocolor'`;
                                                                                con.query(sql, function (err, result){if (err) throw err;});
                                                                                message.channel.send(`¡Has atrapado un ${Arrays.legendary[NumRandom2]} Variocolor!`, {
                                                                                  file: `./files/legendaryshiny/${Arrays.legendary2[NumRandom2]}`})}
                                                                              else{
                                                                              var cantidad = 1
                                                                              var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.normal[NumRandom2]} Variocolor', '${cantidad}')`;
                                                                              con.query(sql, function (err, result){if (err) throw err;});
                                                                              message.channel.send(`¡Has atrapado un ${Arrays.legendary[NumRandom2]} Variocolor!`, {
                                                                                file: `./files/legendaryshiny/${Arrays.legendary2[NumRandom2]}`})}});}
                                                        
                                                                                else{if(Arrays.probabilidad4[NumRandom] >= Arrays.probabilidad4[108] && Arrays.probabilidad4[NumRandom] <= Arrays.probabilidad4[119]) {
                                                                                  var NumRandom2 = capturasp(a,d)
                                                                                  function capturasp(a,d){return Math.round(Math.random()*(d-a)+parseInt(a));}
                                                                                  var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.special[NumRandom2]}'`;
                                                                                  con.query(cantidad, function (err, result){if (err) throw err;
                                                                                  if(result != ""){
                                                                                    var cantidad2 = result[0].cantidad + 1
                                                                                    var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.special[NumRandom2]}'`;
                                                                                    con.query(sql, function (err, result){if (err) throw err;});
                                                                                    message.channel.send(`¡Has atrapado un ${Arrays.special[NumRandom2]}!`, {
                                                                                      file: `./files/special/${Arrays.special2[NumRandom2]}`})}
                                                                                  else{
                                                                                  var cantidad = 1
                                                                                  var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.special[NumRandom2]}', '${cantidad}')`;
                                                                                  con.query(sql, function (err, result){if (err) throw err;});
                                                                                  message.channel.send(`¡Has atrapado un ${Arrays.special[NumRandom2]}!`, {
                                                                                    file: `./files/special/${Arrays.special2[NumRandom2]}`})}});}
                                                        
                                                                                    else{if(Arrays.probabilidad4[NumRandom] >= Arrays.probabilidad4[120] && Arrays.probabilidad4[NumRandom] <= Arrays.probabilidad4[126]) {
                                                                                      var NumRandom2 = capturasps(a,d)
                                                                                      function capturasps(a,d){return Math.round(Math.random()*(d-a)+parseInt(a));}
                                                                                      var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.special[NumRandom2]} Variocolor'`;
                                                                                      con.query(cantidad, function (err, result){if (err) throw err;
                                                                                      if(result != ""){
                                                                                        var cantidad2 = result[0].cantidad + 1
                                                                                        var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.special[NumRandom2]} Variocolor'`;
                                                                                        con.query(sql, function (err, result){if (err) throw err;});
                                                                                        message.channel.send(`¡Has atrapado un ${Arrays.special[NumRandom2]} Variocolor!`, {
                                                                                          file: `./files/specialshiny/${Arrays.special2[NumRandom2]}`})}
                                                                                      else{
                                                                                      var cantidad = 1
                                                                                      var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.special[NumRandom2]} Variocolor', '${cantidad}')`;
                                                                                      con.query(sql, function (err, result){if (err) throw err;});
                                                                                      message.channel.send(`¡Has atrapado un ${Arrays.special[NumRandom2]} Variocolor!`, {
                                                                                        file: `./files/specialshiny/${Arrays.special2[NumRandom2]}`})}});}
                                                        
                                                                                        else{if(Arrays.probabilidad4[NumRandom] >= Arrays.probabilidad4[127] && Arrays.probabilidad4[NumRandom] <= Arrays.probabilidad4[146]) {
                                                                                          var NumRandom2 = capturaub(a,e)
                                                                                          function capturaub(a,e){return Math.round(Math.random()*(e-a)+parseInt(a));}
                                                                                          var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.UBs[NumRandom2]}'`;
                                                                                          con.query(cantidad, function (err, result){if (err) throw err;
                                                                                          if(result != ""){
                                                                                            var cantidad2 = result[0].cantidad + 1
                                                                                            var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.UBs[NumRandom2]}'`;
                                                                                            con.query(sql, function (err, result){if (err) throw err;});
                                                                                            message.channel.send(`¡Has atrapado un ${Arrays.UBs[NumRandom2]}!`, {
                                                                                              file: `./files/UBs/${Arrays.UBs2[NumRandom2]}`})}
                                                                                          else{
                                                                                          var cantidad = 1
                                                                                          var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.UBs[NumRandom2]}', '${cantidad}')`;
                                                                                          con.query(sql, function (err, result){if (err) throw err;
                                                                                          console.log(result)});
                                                                                          message.channel.send(`¡Has atrapado un ${Arrays.UBs[NumRandom2]}!`, {
                                                                                            file: `./files/UBs/${Arrays.UBs2[NumRandom2]}`})}});}
                                                                                            
                                                                                            else{if(Arrays.probabilidad4[NumRandom] >= Arrays.probabilidad4[147] && Arrays.probabilidad4[NumRandom] <= Arrays.probabilidad4[150]) {
                                                                                              var NumRandom2 = capturaubs(a,e)
                                                                                              function capturaubs(a,e){return Math.round(Math.random()*(e-a)+parseInt(a));}
                                                                                              var cantidad = `SELECT cantidad FROM pc WHERE usuario='${entrenador}' AND pokemon='${Arrays.UBs[NumRandom2]}'`;
                                                                                              con.query(cantidad, function (err, result){if (err) throw err;
                                                                                              if(result != ""){
                                                                                                var cantidad2 = result[0].cantidad + 1
                                                                                                var sql = `UPDATE pc SET cantidad = '${cantidad2}' WHERE usuario='${entrenador}' AND pokemon='${Arrays.UBs[NumRandom2]}'`;
                                                                                                con.query(sql, function (err, result){if (err) throw err;});
                                                                                                message.channel.send(`¡Has atrapado un ${Arrays.UBs[NumRandom2]} Variocolor!`, {
                                                                                                  file: `./files/UBsshiny/${Arrays.UBs2[NumRandom2]}`})}
                                                                                              else{
                                                                                              var cantidad = 1
                                                                                              var sql = `INSERT INTO pc (usuario, pokemon, cantidad) VALUES ('${entrenador}', '${Arrays.UBs[NumRandom2]}', '${cantidad}')`;
                                                                                              con.query(sql, function (err, result){if (err) throw err;});
                                                                                              message.channel.send(`¡Has atrapado un ${Arrays.UBs[NumRandom2]} Variocolor!`, {
                                                                                                file: `./filess/UBsshiny/${Arrays.UBs2[NumRandom2]}`})}});}}}}}}}}}});});}});}
     }}}});} catch (error) {console.error(error);}}}
   else{message.channel.send('No puedes usar este comando en este canal.')}}
  else{message.reply("no estas registrado en la armada, usa \`t!registro\` por favor antes de usar estos comandos.");}}}