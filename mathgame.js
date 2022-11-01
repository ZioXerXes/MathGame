
var questionGen = function () {
  console.log('questionGen Triggered');
  var a = Math.floor(Math.random()*10)
  var b = Math.floor(Math.random()*10)
  return a + '+' + b
}


var newProblem = function () {
  console.log("newProblem Triggered")
  $('.question').empty();
  var answerBox = $('.question').append('<p>' + questionGen() + '</p>').children('p')
  var squisher = eval(answerBox.html());
  console.log('Squisher = ' + squisher)
  return squisher;
};

$(document).ready(function(){

  $('#starter').on('click', function (event) {
    console.log("Starter triggered");
    event.preventDefault();
    newProblem()
    //var answerHole = newProblem();
    //console.log(answerHole + 'meow' + answerHole)

  })

  $('#answer').on('submit', function (event) {
    console.log('Answer Submit')
    event.preventDefault();
    inputSelector = $(this).children('[name=userAnswer]');
    var cleanAnswer = parseInt(inputSelector.val());
    console.log(cleanAnswer)
    
    $.answerHole = eval($('.question').children('p').html())

    console.log('answerHole = ' + $.answerHole)
    if (cleanAnswer == $.answerHole) {
      console.log('You did it!');
      $('.fate').empty();
      $('.fate').append('<p>You did it!</p>');
      inputSelector.val('')
      $('.question').empty();
      //$('.question').append('<p>' + questionGen() + '</p>').children('p')
      return newProblem()
    } else {
      console.log('You suck!');
      $('.fate').empty();
      $('.fate').append('<p>You suck!</p>');
      inputSelector.val('')
    }
  })
});