//make timer
//start quiz button must start the timer and fill in the card with the first question and it must also load a timer 
//must make some coding quiz questions

var pageData = [
    {
        heading: 'Coding Quiz Challenge',
        body: 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!',
        btn1: 'Start Code Quiz',
    },
    {
        heading: 'What does DOM stand for in JavaScript?',
        body: '',
        btn1: 'Document Object Model',
        btn2: 'Data Output Method',
        btn3: 'Document Order Mechanism',
        btn4: 'Direct Output Module',
    },
    {
        heading: 'What is the purpose of the addEventListener method in JavaScript?',
        body: '',
        btn1: 'To add a new HTML element',
        btn2: 'To register a function to be executed when an event occurs',
        btn3: 'To define a new CSS style',
        btn4: 'To create a loop in the code',
    },
]

var timeEl = document.querySelector(".timer");
var secondsLeft = 75;
var score;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = 'Timer: ' + secondsLeft + ' seconds remain'

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endPage();//will need to declare end page
        }
    }, 1000)
};
function startPage() {
    document.querySelector('.card-header h2').innerHTML = pageData[0].heading;
    document.querySelector('.card-body p').innerHTML = pageData[0].body;
    document.querySelector('.card-footer .btn1').innerHTML = pageData[0].btn1;
    document.querySelector('.card-footer .btn2').style.display = 'none';
    document.querySelector('.card-footer .btn3').style.display = 'none';
    document.querySelector('.card-footer .btn4').style.display = 'none';
    var button1 = document.querySelector('.card-footer .btn1');
    button1.addEventListener("click", function () {
        questionPage();
        setTime();
    })
}

var j = 1
function questionPage() {
    document.querySelector('.card-header h2').innerHTML = pageData[j].heading;
    document.querySelector('.card-body p').innerHTML = pageData[j].body;
    document.querySelector('.card-footer .btn1').innerHTML = pageData[j].btn1;
    document.querySelector('.card-footer .btn2').style = 'display: block; margin: auto; margin-bottom: 20px; padding: 5px';
    document.querySelector('.card-footer .btn3').style = 'display: block; margin: auto; margin-bottom: 20px; padding: 5px';
    document.querySelector('.card-footer .btn4').style = 'display: block; margin: auto; margin-bottom: 20px; padding: 5px';
    document.querySelector('.card-footer .btn2').innerHTML = pageData[j].btn2;
    document.querySelector('.card-footer .btn3').innerHTML = pageData[j].btn3;
    document.querySelector('.card-footer .btn4').innerHTML = pageData[j].btn4;
    var button1 = document.querySelector('.card-footer .btn1');
    var button2 = document.querySelector('.card-footer .btn2');
    var button3 = document.querySelector('.card-footer .btn3');
    var button4 = document.querySelector('.card-footer .btn4');
    button1.addEventListener("click", function () {
        if (j === 16) {
            scorePage()
        } else {
            j++;
            return questionPage();
        }
    })
}
startPage();