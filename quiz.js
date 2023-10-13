const animals = [
	{
		name: 'elephant',
		image: 'aset/img/gajah.png',
		incompleteName: 'el_phant',
		lessLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
	},
	{
		name: 'giraffe',
		image: 'https://i.imgur.com/3Nq3iaA.jpg',
		incompleteName: 'g_raffe',
		lessLetters: ['b', 'c', 'd', 'e', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
	},
	{
		name: 'penguin',
		image: 'https://i.imgur.com/6ymh49s.jpg',
		incompleteName: 'pen_uin',
		lessLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'o', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'],
	}
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next-btn');

function startQuiz() {
	showQuestion();
	nextButton.addEventListener('click', nextQuestion);
}

function showQuestion() {
	quizContainer.innerHTML = '';

	const animal = animals[currentQuestion];

	const image = document.createElement('img');
	image.src = animal.image;

	const incompleteName = animal.incompleteName.split('');
	const letters = animal.lessLetters;

	const lettersContainer = document.createElement('div');
	lettersContainer.classList.add('letters-container');

	letters.forEach(letter => {
		const letterButton = document.createElement('button');
		letterButton.innerHTML = letter;
		letterButton.addEventListener('click', function() {
			if (letter === incompleteName[2]) {
				score++;
				letterButton.classList.add('correct');
			} else {
				letterButton.classList.add('incorrect');
			}
			lettersContainer.classList.add('answered');
		});
		lettersContainer.appendChild(letterButton);
	});

	const nameContainer = document.createElement('div');
	nameContainer.classList.add('name-container');

	incompleteName.forEach(letter => {
		const letterDiv = document.createElement('div');
		if (letter === '_') {
			letterDiv.classList.add('missing');
		} else {
			letterDiv.innerHTML = letter;
		}
		nameContainer.appendChild(letterDiv);
	});

	quizContainer.appendChild(image);
	quizContainer.appendChild(nameContainer);
	quizContainer.appendChild(lettersContainer);
}

function nextQuestion() {
	currentQuestion++;
	if (currentQuestion < animals.length) {
		showQuestion();
	} else {
		endQuiz();
	}
}

function endQuiz() {
	quizContainer.innerHTML = '';

	const result = document.createElement('p');
	result.innerHTML = `You got ${score} out of ${animals.length} questions correct!`;

	quizContainer.appendChild(result);
	nextButton.style.display = 'none';
}

startQuiz();
