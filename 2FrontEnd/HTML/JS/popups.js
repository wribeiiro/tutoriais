//Alert

window.alert("Algum texto");

alert("Eu sou uma caixa de alerta!");

//Confirm

window.confirm("algum texto");

if (confirm("Pressione um botão!")) {
  txt = "Você pressionou OK!";
} else {
  txt = "Você pressionou Cancel!";
} 

//Prompt

window.prompt("algum texto","Texto default");

var person = prompt("Favor entrar seu nome", "Ribamar FS");

if (person == null || person == "") {
  txt = "Usuário cancelou o prompt.";
} else {
  txt = "Olá " + person + "! Como está você hoje?";
} 

