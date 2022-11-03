
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

  var timerSpan = document.body.querySelector("#timer");
  var milliseconds = 1000;
  var timer = null;
  
  var stopTimer = function () {
    window.clearInterval(timer);
    timer = null;
    milliseconds = 1000;
  };

  var startTimer = function () {
    if (!timer) {
      timer = setInterval(function () {
        timerSpan.innerHTML = --milliseconds;
        if (milliseconds === 0) {
          console.log('WOAH!')
          //document.getElementById('timer').innerHTML = '<span>0</span>';
          stopTimer();
        }
      }, 1);
      }
    };
  

  $('#starter').on('click', function (event) {
    console.log("Starter triggered");
    event.preventDefault();
    startTimer();
    newProblem();
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
      console.log(milliseconds.charAt[0])
      console.log('You did it!');
      $('.fate').empty();
      $('.fate').append('<p>You did it!</p>');
      milliseconds += 100;
      inputSelector.val('')
      $('.question').empty();
      return newProblem()
    } else {
      console.log('You suck!');
      $('.fate').empty();
      $('.fate').append('<p>You suck!</p>');
      inputSelector.val('')
    }
  })
});