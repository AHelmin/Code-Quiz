//TODO
//add a listener for highscores header box  and add logic to build page from that
//build highScore page with JSON parse
//stop the display of the #msg at scorePage and highScorePage
//switch heading keys in object to inclue the html h2 tag and remove it from .card-header in html
//can add the header section with two divs to remove the empty tags and write them with JS

var timeEl = document.querySelector(".timer");
var score = 0;
var page = 0;
var highScores = document.querySelector('.high-scores');
var cardHeader = document.querySelector('.card-header');
var cardBody = document.querySelector('.card-body');
var cardFooter = document.querySelector('.card-footer');
// var button1 = document.querySelector('.card-footer .'btn1'');
// var button2 = document.querySelector('.card-footer .'btn2'');
// var button3 = document.querySelector('.card-footer .'btn3'');
// var button4 = document.querySelector('.card-footer .btn4');
var message = document.querySelector('#msg');
var inputField = document.querySelector('.input');
var secondsLeft = 75;

var pageData = [
    {
        heading: '<h2>Coding Quiz Challenge</h2>',
        body: '<p>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>',
        footer: '<button type="button">Start Code Quiz</button>',
    },
    {
        heading: '<h2>What does DOM stand for in JavaScript?</h2>',
        body: '',
        footer: [
            { text: '<button type="button">Document Object Model</button>', id: 'btn1', correct: true },
            { text: '<button type="button">Data Output Method</button>', id: 'btn2', correct: false },
            { text: '<button type="button">Document Order Mechanism</button>', id: 'btn3', correct: false },
            { text: '<button type="button">Direct Output Module</button>', id: 'btn4', correct: false },
        ],
    },
    {
        heading: '<h2>What is the purpose of the addEventListener method in JavaScript?</h2>',
        body: '',
        footer: [
            { text: '<button type="button">To add a new HTML element</button>', id: 'btn1', correct: false },
            { text: '<button type="button">To register a function to be executed when an event occurs</button>', id: 'btn2', correct: true },
            { text: '<button type="button">To define a new CSS style</button>', id: 'btn3', correct: false },
            { text: '<button type="button">To create a loop in the code</button>:', id: 'btn4', correct: false },
        ],
    },
    {
        heading: '<h2>Which color is the best?</h2>',
        body: '',
        footer: [
            { text: '<button type="button">Orange</button> ', id: 'btn1', correct: true },
            { text: '<button type="button">Orange</button>', id: 'btn2', correct: true },
            { text: '<button type="button">Orange</button>', id: 'btn3', correct: true },
            { text: '<button type="button">Orange</button>', id: 'btn4', correct: true },
        ],
    },
    {
        heading: '<h2>Javascript is an _____ language?</h2>',
        body: '',
        footer: [
            { text: '<button type="button">Object-Oriented</button>', id: 'btn1', correct: true },
            { text: '<button type="button">Object-Based</button>', id: 'btn2', correct: false },
            { text: '<button type="button">Procedural</button>', id: 'btn3', correct: false },
            { text: '<button type="button">None of the above</button>', id: 'btn4', correct: false },
        ],
    },
    {
        heading: '<h2>Which of the following methods is used to access HTML elements using Javascript?</h2>',
        body: '',
        footer: [
            { text: '<button type="button">getElementbyId()</button>', id: 'btn1', correct: false },
            { text: '<button type="button">getElementsByClassName()</button>', id: 'btn2', correct: false },
            { text: '<button type="button">Both A and B</button>', id: 'btn3', correct: true },
            { text: '<button type="button">None of the above</button>', id: 'btn4', correct: false },
        ],
    },
    {
        heading: '<h2>How can a datatype be declared to be a constant type?</h2>',
        body: '',
        footer: [
            { text: '<button type="button">const</button>', id: 'btn1', correct: true },
            { text: '<button type="button">var</button>', id: 'btn2', correct: false },
            { text: '<button type="button">let</button>', id: 'btn3', correct: false },
            { text: '<button type="button">constant</button>', id: 'btn4', correct: false },
        ],
    },
    {
        heading: '<h2>When an operator`s value is NULL, the typeof returned by the unary operator is:</h2>',
        body: '',
        footer: [
            { text: '<button type="button">Boolean</button>', id: 'btn1', correct: false },
            { text: '<button type="button">Undefined</button>', id: 'btn2', correct: false },
            { text: '<button type="button">Object</button>', id: 'btn3', correct: true },
            { text: '<button type="button">Integer</button>', id: 'btn4', correct: false },
        ],
    },
    {
        heading: '<h2>Which function is used to serialize an object into a JSON string in Javascript?</h2>',
        body: '',
        footer: [
            { text: '<button type="button">Stringify()</button>', id: 'btn1', correct: true },
            { text: '<button type="button">Parse()</button>', id: 'btn2', correct: false },
            { text: '<button type="button">Convert()</button>', id: 'btn3', correct: false },
            { text: '<button type="button">None of the above</button>', id: 'btn4', correct: false },
        ],
    },
    {
        heading: '<h2>How to stop an interval timer in Javascript?</h2>',
        body: '',
        footer: [
            { text: '<button type="button">clearInterval</button>', id: 'btn1', correct: true },
            { text: '<button type="button">clearTimer</button>', id: 'btn2', correct: false },
            { text: '<button type="button">intervalOver</button>', id: 'btn3', correct: false },
            { text: '<button type="button">None of the above</button>', id: 'btn4', correct: false },
        ],
    },
    {
        heading: '<h2>Which animal makes the best pet?</h2>',
        body: '',
        footer: [
            { text: '<button type="button">cat</button>', id: 'btn1', correct: true },
            { text: '<button type="button">cat</button>', id: 'btn2', correct: true },
            { text: '<button type="button">cat</button>', id: 'btn3', correct: true },
            { text: '<button type="button">cat</button>', id: 'btn4', correct: true },
        ],
    },
    {
        heading: '<h2>All Done</h2>',
        body: 'Your score is ' + score + '.',
        footer: [
            { text: '<label>Initials:<input type="text" id="name></label>', id: 'input1' },
            { text: '<button type="button">Submit</button>' },
        ]
    },
    {
        heading: '<h2>Highscores</h2>',
        body: '',
        footer: [
            { text: '<button type="button">Go Back</button>', id: 'btn1' },
            { text: '<button type="button">Clear Highscores</button>', id: 'btn2' },
        ],
    },
];



function writePage() {
    cardHeader.innerHTML = pageData[page].heading;
    cardBody.innerHTML = pageData[page].body;
    // inputField.style.display = 'none'
    cardFooter.innerHTML = '';
    if (pageData[page].footer && Array.isArray(pageData[page].footer)) {
        var textArr = [];
        pageData[page].footer.forEach(function (text) {
            if (text.value) {
                textArr.push(text.value);
                console.log(textArr);
                // var buttons = textArr.toString();
            }
        })
        cardFooter.innerHTML = textArr.join('');
    } else {
        cardFooter.innerHTML = pageData[page].footer
    }
};


// button2.style.display = 'none';
// button3.style.display = 'none';
// button4.style.display = 'none';


cardFooter.addEventListener("click", function (event) {
    if (page === 1) {
        setTime();
    }
    if (event.target.innerText === 'Start Code Quiz') {
        page++;
        writePage();
    } else if (event.target.innerText === 'Submit') {
        //need JSON stringify info
        var userInput = document.getElementById('name').value;
        var userScore = {
            initials: userInput,
            points: score,
        };
        localStorage.setItem('userScore', JSON.stringify(userScore));
        page = 12;
    } else if (event.target.innerText === 'Go Back') {
        page = 0;
    } else {
        if (event.target.correct) {
            message.textContent = 'You are correct!';
            score += 5;
        } else {
            message.textContent = 'Wrong answer!';
            secondsLeft -= 10;
        }
        if (page < pageData.length - 3) {
            page++;
        } else {
            page = 11;
        }
    }
})

function setTime() {

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.innerHTML = '<h1>Timer: ' + secondsLeft + ' seconds remain</h1>'

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            scorePage();
        }
    }, 1000)
};

highScores.addEventListener('click', function () {
    page = 12;
    writePage();
});

writePage();


// button2.addEventListener("click", function (event) {
//     if (event.target.innerText === 'Clear Highscores') {
//         localStorage.clear();
//     } else {

//         if (pageData[page].'btn2'.correct) {
//             message.textContent = 'You are correct!'
//             score += 5;
//         } else {
//             message.textContent = 'Wrong answer!';
//             secondsLeft -= 10;
//         }
//         if (page < pageData.length - 3) {
//             page++;
//             displayPage();
//         } else {
//             scorePage();
//         }
//     }
// });

// button3.addEventListener("click", function () {
//     if (pageData[page].'btn3'.correct) {
//         message.textContent = 'You are correct!'
//         score += 5;
//     } else {
//         message.textContent = 'Wrong answer!';
//         secondsLeft -= 10;
//     }
//     if (page < pageData.length - 3) {
//         page++;
//         displayPage();
//     } else {
//         scorePage();
//     }
// });

// button4.addEventListener("click", function () {
//     if (pageData[page].btn4.correct) {
//         message.textContent = 'You are correct!'
//         score += 5;
//     } else {
//         message.textContent = 'Wrong answer!';
//         secondsLeft -= 10;
//     }
//     if (page < pageData.length - 3) {
//         page++;
//         displayPage();
//     } else {
//         scorePage();
//     }
// });





// function displayPage() {
//     cardHeader.innerHTML = pageData[page].heading;
//     cardBody.innerHTML = pageData[page].body;
//     inputField.style.display = 'none';
//     cardFooter.innerHTML = pageData[page].'btn1'.text;
//     button2.style = 'display: block; margin: auto; margin-bottom: 20px; padding: 5px';
//     button3.style = 'display: block; margin: auto; margin-bottom: 20px; padding: 5px';
//     button4.style = 'display: block; margin: auto; margin-bottom: 20px; padding: 5px';
//     button2.innerHTML = pageData[page].'btn2'.text;
//     button3.innerHTML = pageData[page].'btn3'.text;
//     button4.innerHTML = pageData[page].btn4.text;
//     // if (secondsLeft <= 0) {
//     //     scorePage();
//     // }
// };

// function questionPage() {
//     setTime();
//     page = 1;
//     displayPage();
// };

// function scorePage() {
//     timeEl.style.display = 'none';
//     cardHeader.innerHTML = pageData[11].heading;
//     cardBody.innerHTML = 'Your score is ' + score + '.';
//     cardFooter.style = 'display: inline; margin: auto; margin-right: 50px; margin-bottom: 20px; padding: 5px';
//     inputField.style = 'display: inline; margin: auto; margin-left: 50px; margin-bottom: 20px; padding: 5px';
//     cardFooter.innerHTML = pageData[11].'btn1'.text;
//     button2.style.display = 'none'
//     button3.style.display = 'none'
//     button4.style.display = 'none'

// };

// function highScorePage() {
//     var highScoreData = JSON.parse(localStorage.getItem('userScore'));
//     cardHeader.innerHTML = pageData[12].heading;
//     cardBody.innerHTML = //need to figure out how to split these
//         inputField.style.display = 'none';
//     cardFooter.style = 'display: inline; margin: auto; margin-right: 50px; margin-bottom: 20px; padding: 5px';
//     cardFooter.innerHTML = pageData[12].'btn1'.text;
//     button2.style = 'display: inline; margin: auto; margin-left: 50px; margin-bottom: 20px; padding: 5px';
//     button2.innerHTML = pageData[12].'btn2'.text;
// }

