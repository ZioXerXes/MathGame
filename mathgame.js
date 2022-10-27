$(document).ready(function(){
  
  var questionGen = function () {  
    var a = Math.floor(Math.random()*10)
    var b = Math.floor(Math.random()*10)
    return a + '+' + b
  }


  var squisher = eval($('.question').append('<p>' + questionGen() + '</p>').children('p').html())
  console.log(squisher);

  $('#answer').on('submit', function (event) {
    event.preventDefault();
    inputSelector = $(this).children('[name=userAnswer]');
    var cleanAnswer = parseInt(inputSelector.val());
    
    if (cleanAnswer == squisher) {
      console.log('You did it!');
      $('.fate').empty();
      $('.fate').append('<p>You did it!</p>');
      inputSelector.val('');
      $('.question').empty()
      return questionGen()
    } else {
      console.log('You suck!');
      $('.fate').empty();
      $('.fate').append('<p>You suck!</p>');
    }
  })
});