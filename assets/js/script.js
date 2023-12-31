
var timeEl = document.querySelector(".timer");
var score = 0;
var page = 0;
var highScores = document.querySelector('.high-scores');
var cardHeader = document.querySelector('.card-header');
var cardBody = document.querySelector('.card-body');
var cardFooter = document.querySelector('.card-footer');
var message = document.querySelector('#msg');
var inputField = document.querySelector('.input');
var secondsLeft;

//card data object
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
            { text: '<button id="btn1" type="button">Document Object Model</button>', id: 'btn1', correct: true },
            { text: '<button id="btn2" type="button">Data Output Method</button>', id: 'btn2', correct: false },
            { text: '<button id="btn3" type="button">Document Order Mechanism</button>', id: 'btn3', correct: false },
            { text: '<button id="btn4" type="button">Direct Output Module</button>', id: 'btn4', correct: false },
        ],
    },
    {
        heading: '<h2>What is the purpose of the addEventListener method in JavaScript?</h2>',
        body: '',
        footer: [
            { text: '<button id="btn1" type="button">To add a new HTML element</button>', id: 'btn1', correct: false },
            { text: '<button id="btn2" type="button">To register a function to be executed when an event occurs</button>', id: 'btn2', correct: true },
            { text: '<button id="btn3" type="button">To define a new CSS style</button>', id: 'btn3', correct: false },
            { text: '<button id="btn4" type="button">To create a loop in the code</button>:', id: 'btn4', correct: false },
        ],
    },
    {
        heading: '<h2>Which color is the best?</h2>',
        body: '',
        footer: [
            { text: '<button id="btn1" type="button">Orange</button> ', id: 'btn1', correct: true },
            { text: '<button id="btn2" type="button">Orange</button>', id: 'btn2', correct: true },
            { text: '<button id="btn3" type="button">Orange</button>', id: 'btn3', correct: true },
            { text: '<button id="btn4" type="button">Orange</button>', id: 'btn4', correct: true },
        ],
    },
    {
        heading: '<h2>Javascript is an _____ language?</h2>',
        body: '',
        footer: [
            { text: '<button id="btn1" type="button">Object-Oriented</button>', id: 'btn1', correct: true },
            { text: '<button id="btn2" type="button">Object-Based</button>', id: 'btn2', correct: false },
            { text: '<button id="btn3" type="button">Procedural</button>', id: 'btn3', correct: false },
            { text: '<button id="btn4" type="button">None of the above</button>', id: 'btn4', correct: false },
        ],
    },
    {
        heading: '<h2>Which of the following methods is used to access HTML elements using Javascript?</h2>',
        body: '',
        footer: [
            { text: '<button id="btn1" type="button">getElementbyId()</button>', id: 'btn1', correct: false },
            { text: '<button id="btn2" type="button">getElementsByClassName()</button>', id: 'btn2', correct: false },
            { text: '<button id="btn3" type="button">Both A and B</button>', id: 'btn3', correct: true },
            { text: '<button id="btn4" type="button">None of the above</button>', id: 'btn4', correct: false },
        ],
    },
    {
        heading: '<h2>How can a datatype be declared to be a constant type?</h2>',
        body: '',
        footer: [
            { text: '<button id="btn1" type="button">const</button>', id: 'btn1', correct: true },
            { text: '<button id="btn2" type="button">var</button>', id: 'btn2', correct: false },
            { text: '<button id="btn3" type="button">let</button>', id: 'btn3', correct: false },
            { text: '<button id="btn4" type="button">constant</button>', id: 'btn4', correct: false },
        ],
    },
    {
        heading: '<h2>When an operator`s value is NULL, the typeof returned by the unary operator is:</h2>',
        body: '',
        footer: [
            { text: '<button id="btn1" type="button">Boolean</button>', id: 'btn1', correct: false },
            { text: '<button id="btn2" type="button">Undefined</button>', id: 'btn2', correct: false },
            { text: '<button id="btn3" type="button">Object</button>', id: 'btn3', correct: true },
            { text: '<button id="btn4" type="button">Integer</button>', id: 'btn4', correct: false },
        ],
    },
    {
        heading: '<h2>Which function is used to serialize an object into a JSON string in Javascript?</h2>',
        body: '',
        footer: [
            { text: '<button id="btn1" type="button">Stringify()</button>', id: 'btn1', correct: true },
            { text: '<button id="btn2" type="button">Parse()</button>', id: 'btn2', correct: false },
            { text: '<button id="btn3" type="button">Convert()</button>', id: 'btn3', correct: false },
            { text: '<button id="btn4" type="button">None of the above</button>', id: 'btn4', correct: false },
        ],
    },
    {
        heading: '<h2>How to stop an interval timer in Javascript?</h2>',
        body: '',
        footer: [
            { text: '<button id="btn1" type="button">clearInterval</button>', id: 'btn1', correct: true },
            { text: '<button id="btn2" type="button">clearTimer</button>', id: 'btn2', correct: false },
            { text: '<button id="btn3" type="button">intervalOver</button>', id: 'btn3', correct: false },
            { text: '<button id="btn4" type="button">None of the above</button>', id: 'btn4', correct: false },
        ],
    },
    {
        heading: '<h2>Which animal makes the best pet?</h2>',
        body: '',
        footer: [
            { text: '<button id="btn1" type="button">cat</button>', id: 'btn1', correct: true },
            { text: '<button id="btn2" type="button">cat</button>', id: 'btn2', correct: true },
            { text: '<button id="btn3" type="button">cat</button>', id: 'btn3', correct: true },
            { text: '<button id="btn4" type="button">cat</button>', id: 'btn4', correct: true },
        ],
    },
    {
        heading: '<h2>All Done</h2>',
        body: '',
        footer: [
            { text: '<label>Initials: <input type="text" id="name" autocomplete="off"></label>', id: 'input1' },
            { text: '<button type="button" class="button">Submit</button>', id: 'submitBtn' },
        ]
    },
    {
        heading: '<h2>Highscores</h2>',
        body: '<ol></ol>',
        footer: [
            { text: '<button type="button">Go Back</button>', id: 'btn1' },
            { text: '<button type="button">Clear Highscores</button>', id: 'btn2' },
        ],
    },
];


//writes all the pageData to the card in the HTML
function writePage() {
    if (page === 1) {
        setTime();
    }
    cardHeader.innerHTML = pageData[page].heading;
    if (page === pageData.length - 2) {
        //adds remaining seconds left to final score
        score += secondsLeft;
        cardBody.innerHTML = `<p>Your score is ${score}.</p>`
    } else {
        cardBody.innerHTML = pageData[page].body;
    }
    //uses map to return an array of the text data in a pageData index, then make it a string to write the HTML
    cardFooter.innerHTML = '';
    if (pageData[page].footer && Array.isArray(pageData[page].footer)) {
        var textArr = pageData[page].footer.map(function (text) {
            return text.text
        })
        cardFooter.innerHTML = textArr.join('');
    } else {
        cardFooter.innerHTML = pageData[page].footer
    }
    //modify the style for the all done page to display these buttons inline
    if (page === pageData.length - 1) {
        cardFooter.style = "display: flex; justify-content: space-around";
    } else {
        cardFooter.style = "text-align: center"
    }
};

//this listener is the core of this web app, it listens for clicks based on the conditionals
cardFooter.addEventListener("click", function (event) {
    if (event.target.innerText === 'Start Code Quiz') {
        page++;
        writePage();
    } else if (event.target.innerText === 'Submit') {
        //tells the local storage to be displayed as an arr of objects
        var userScore = JSON.parse(localStorage.getItem('userScore') || '[]');
        var userInput = document.getElementById('name').value;
        var currentUserScore = {
            initials: userInput,
            points: score,
        };
        //add current score to the array
        userScore.push(currentUserScore);
        localStorage.setItem('userScore', JSON.stringify(userScore));
        page = 12;
        writePage();
        scorePageBuildHighscores();
    } else if (event.target.innerText === 'Go Back') {
        score = 0;
        page = 0;
        writePage();
    } else if (event.target.innerText === 'Clear Highscores') {
        localStorage.clear();
        page = 12;
        writePage();
    } else {
        var clickedButton = event.target.id;
        var currentPage = pageData[page];
        for (var i = 0; i < currentPage.footer.length; i++) {
            if (currentPage.footer[i].id === clickedButton) {
                if (currentPage.footer[i].correct) {
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
                writePage();
            }
        }
    }
})

//sets timer on the webpage
function setTime() {
    secondsLeft = 75;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.innerHTML = '<h1>Timer: ' + secondsLeft + ' seconds remaining!</h1>'
        if (secondsLeft <= 0 || page === pageData.length - 2) {
            clearInterval(timerInterval);
            page = pageData.length - 2;
            writePage();
        }
    }, 1000)
};

function scorePageBuildHighscores() {
    var userScore = JSON.parse(localStorage.getItem('userScore') || '[]');
    var orderedList = document.querySelector('.card-body ol');
    if (Array.isArray(userScore)) {
        for (var i = 0; i < userScore.length; i++) {
            if (userScore[i]) {
                var listItem = document.createElement('li');
                listItem.textContent = userScore[i].initials + '  ' + userScore[i].points;
                orderedList.appendChild(listItem);
            }
        }
    }
}

highScores.addEventListener('click', function () {
    page = pageData.length - 1;
    writePage();
    scorePageBuildHighscores();
});

writePage();


