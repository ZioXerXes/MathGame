
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
  var seconds = 10;

  var startTimer = function () {
    //seconds = 10;
    const interval = setInterval(() => {
      console.log(seconds);
      //timerSpan.innerHTML = seconds;
      seconds--;
      timerSpan.innerHTML = seconds;
      if (seconds < 0) {
        console.log('WOAH!')
        timerSpan.innerHTML = 'GAME OVER'
        $('#answer').children('input').prop('disabled', true);
        clearInterval(interval);
        //document.getElementById('timer').innerHTML = '<span>0</span>';
        //stopTimer();
      }
    }, 1000);
  };
  

  $('#starter').on('click', function (event) {
    console.log("Starter triggered");
    event.preventDefault();
    seconds=10;
    if ($('#answer').children('input').prop('disabled', true)) {
      $('#answer').children('input').prop('disabled', false);
    };
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
      console.log('You did it!');
      $('.fate').empty();
      $('.fate').append('<p>You did it!</p>');
      seconds += 1;
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