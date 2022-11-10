var questionGen = function (activeOperator, activeLimit) {
  console.log(activeOperator + 'questionGen')
  if (activeOperator == '+') {
  console.log('questionGenAdd Triggered');
  if (activeLimit == 10) {
    var a = Math.floor(Math.random()*10)
    var b = Math.floor(Math.random()*10)
    return a + '+' + b
  } else if (activeLimit == 25) {
    var a = Math.floor(Math.random()*25)
    var b = Math.floor(Math.random()*25)
    return a + '+' + b
  } else if (activeLimit == 50) {
    var a = Math.floor(Math.random()*50)
    var b = Math.floor(Math.random()*50)
    return a + '+' + b
  } else if (activeLimit == 100) {
    var a = Math.floor(Math.random()*100)
    var b = Math.floor(Math.random()*100)
    return a + '+' + b
  }
  } else if (activeOperator == '-') {
  console.log('questionGenSubtract Triggered');
  if (activeLimit == 10) {
    var a = Math.floor(Math.random()*10)
    var b = Math.floor(Math.random()*10)
    while (eval(a + '-' + b) < 0) {
      a = Math.floor(Math.random()*10);
      b = Math.floor(Math.random()*10);
      console.log('Here goes');
    }
    return a + '-' + b
  } else if (activeLimit == 25) {
    var a = Math.floor(Math.random()*25)
    var b = Math.floor(Math.random()*25)
    while (eval(a + '-' + b) < 0) {
      a = Math.floor(Math.random()*25);
      b = Math.floor(Math.random()*25);
      console.log('Here goes');
    }
    return a + '-' + b;
  } else if (activeLimit == 50) {
    var a = Math.floor(Math.random()*50)
    var b = Math.floor(Math.random()*50)
    while (eval(a + '-' + b) < 0) {
      a = Math.floor(Math.random()*50);
      b = Math.floor(Math.random()*50);
      console.log('Here goes');
    }
    return a + '-' + b;
  } else if (activeLimit == 100) {
    var a = Math.floor(Math.random()*100)
    var b = Math.floor(Math.random()*100)
    while (eval(a + '-' + b) < 0) {
      a = Math.floor(Math.random()*100);
      b = Math.floor(Math.random()*100);
      console.log('Here goes');
    }
    return a + '-' + b;
  }
  } else if (activeOperator == 'x') {
    if (activeLimit == 10) {
      var a = Math.floor(Math.random()*10)
      var b = Math.floor(Math.random()*10)
      return a + '*' + b
    } else if (activeLimit == 25) {
      var a = Math.floor(Math.random()*25)
      var b = Math.floor(Math.random()*25)
      return a + '*' + b
    } else if (activeLimit == 50) {
      var a = Math.floor(Math.random()*50)
      var b = Math.floor(Math.random()*50)
      return a + '*' + b
    } else if (activeLimit == 100) {
      var a = Math.floor(Math.random()*100)
      var b = Math.floor(Math.random()*100)
      return a + '*' + b
    }
  } else if (activeOperator == '/') {
    if (activeLimit == 10) {
      var a = Math.floor(Math.random()*10)
      var b = Math.floor(Math.random()*10)
      while (eval(a + '/' + b) < 0 || !Number.isInteger(eval(a + '/' + b))) {
        a = Math.floor(Math.random()*10);
        b = Math.floor(Math.random()*10);
        console.log('Here goes');
      }
      return a + '/' + b
    } else if (activeLimit == 25) {
      var a = Math.floor(Math.random()*25)
      var b = Math.floor(Math.random()*25)
      while (eval(a + '/' + b) < 0 || !Number.isInteger(eval(a + '/' + b))) {
        a = Math.floor(Math.random()*25);
        b = Math.floor(Math.random()*25);
        console.log('Here goes');
      }
      return a + '/' + b;
    } else if (activeLimit == 50) {
      var a = Math.floor(Math.random()*50)
      var b = Math.floor(Math.random()*50)
      while (eval(a + '/' + b) < 0 || !Number.isInteger(eval(a + '/' + b))) {
        a = Math.floor(Math.random()*50);
        b = Math.floor(Math.random()*50);
        console.log('Here goes');
      }
      return a + '/' + b;
    } else if (activeLimit == 100) {
      var a = Math.floor(Math.random()*100)
      var b = Math.floor(Math.random()*100)
      while (eval(a + '/' + b) < 0 || !Number.isInteger(eval(a + '/' + b))) {
        a = Math.floor(Math.random()*100);
        b = Math.floor(Math.random()*100);
        console.log('Here goes');
      }
      return a + '/' + b;  }
  };
};

var newProblem = function (activeOperator, activeLimit) {
  console.log("newProblem Triggered")
  console.log(activeOperator + "newPorblem")
  console.log(activeLimit + "newProblem")
  $('.question').empty();
  var operationNow = '';
  var answerBox = $('.question').append('<p>' + questionGen(activeOperator, activeLimit) + '</p>').children('p')
  var squisher = eval(answerBox.html());
  console.log('Squisher = ' + squisher)
  return squisher;
};


$(document).ready(function(){
  var activeOperator = '';
  var activeLimit = '';
  $('.operation').click(function(event){
    $(this).addClass('enabled')
    if ($(this).siblings().hasClass('enabled')) {
      $(this).siblings().removeClass('enabled');
      console.log('Class should be removed')
    };
    activeOperator = $(this).html();
    console.log(activeOperator)
  });
  $('.limit').click(function(event){
    $(this).addClass('enabledLimit');
    if ($(this).siblings().hasClass('enabledLimit')) {
      $(this).siblings().removeClass('enabledLimit');
      console.log('Limit should be removed');
    }
    activeLimit = parseInt($(this).html());
    console.log(activeLimit);
  })
  var timerSpan = document.body.querySelector("#timer");
  var seconds = 10;
  var scoreKeeper = 0;
  var highScore = 0;

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
        console.log(scoreKeeper + "THis is startTimer score")
        if (scoreKeeper > highScore) {
          highScore = scoreKeeper;
          $("#highScore").html(scoreKeeper)
        }
        $('#answer').children('input').prop('disabled', true);
        clearInterval(interval);
      }
    }, 1000);
  };
  

  $('#starter').on('click', function (event) {
    console.log(activeLimit)
    if (!activeOperator) {
      return alert("Choose an operator!")
    }
    if (!activeLimit) {
      return alert("Choose a limit!")
    }
    console.log("Starter triggered");
    event.preventDefault();
    scoreKeeper=0;
    $('#scoreHole').html(scoreKeeper);
    seconds=10;
    if ($('#answer').children('input').prop('disabled', true)) {
      $('#answer').children('input').prop('disabled', false);
    };
    startTimer();
    newProblem(activeOperator, activeLimit);
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
      console.log('CORRECT!');
      $('.fate').empty();
      $('.fate').append('<p>You did it!</p>');
      scoreKeeper += 1;
      $('#scoreHole').html(scoreKeeper);
      seconds += 1;
      inputSelector.val('')
      $('.question').empty();
      return newProblem(activeOperator, activeLimit)
    } else {
      console.log('You suck!');
      $('.fate').empty();
      $('.fate').append('<p>Incorrect. Please try again! Good luck!</p>');
      inputSelector.val('')
    }
  })
});