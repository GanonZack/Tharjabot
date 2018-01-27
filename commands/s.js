module.exports = {
  name: 's',
  execute(message){
  function checkRole(message,rolename){
    var authorRoles = message.member.roles.array()
    var roleNames = []
    for (var i = authorRoles.length - 1; i >= 0; i--) {
        roleNames.push(authorRoles[i].name)}
    var manager = roleNames.indexOf(rolename) != -1;
    return manager}
  if(checkRole(message, "Mod")) {
  message.channel.send("Ahh… I can’t believe you made me love you! Course, if you back out… I’ll murder you in your sleep.").catch(console.error);}
  else{
  message.channel.send("You're already dead.")}}}