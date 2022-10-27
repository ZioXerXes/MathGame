var questionGen = function () {
  return Math.floor(Math.random()*10) + '+' + Math.floor(Math.random()*10)
}

$(document).ready(function(){
  $('.question').append('<p>' + questionGen() + '</p>');
});