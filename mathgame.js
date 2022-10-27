var a = Math.floor(Math.random()*10)
var b = Math.floor(Math.random()*10)
var answer = a+b;

var questionGen = function () {  
  return a + '+' + b
}

$(document).ready(function(){
  $('.question').append('<p>' + questionGen() + '</p>');
  console.log(a)
  console.log(b)
  console.log(answer)
});