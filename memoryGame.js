const alertBox = document.getElementById('alert');
const alertText = document.getElementById('alert-desc');

const list = [
    {
        name: "Anjing",
        img: "aset/img/hewan/ayam.png"
    },
    {
        name: "Kucing",
        img: "aset/img/hewan/babi.png"
    },
    {
        name: "Gajah",
        img: "aset/img/hewan/tupai.png"
    },
    {
        name: "kudanil",
        img: "aset/img/hewan/kuda.png"
    },
];

let flippedCards = [];
let matchedCards = [];
let tempArray = [...list];
let tempArray2 = [...list];
let pickedList = [];

const back = document.getElementById('back_btn');
    const audio = document.getElementById('backgroundAudio');
    const audioControl = document.getElementById('audioControl');

    back.addEventListener('click', function() {
      window.location.href = 'quizList.html';
  });

  audioControl.addEventListener('click', function() {
      if (audio.paused) {
          audio.play();
          audioControl.src = 'aset/img/sound_on_icon.png';
      } else {
          audio.pause();
          audioControl.src = 'aset/img/sound_off_icon.png';
      }
  });

function startGame() {
    audio.play();
    
    document.getElementById("alert").style.display = "none";
    document.getElementById("alert-overlay").style.display = "none";

    flippedCards = [];
    matchedCards = [];

    tempArray = [...list];
    tempArray2 = [...list];
    pickedList = [];

    let size = list.length;
    for (let i = 0; i < size; i++) {
        let randomIndex = Math.floor(Math.random() * tempArray.length);
        pickedList.push(tempArray[randomIndex]);
        tempArray.splice(randomIndex, 1);

        randomIndex = Math.floor(Math.random() * tempArray2.length);
        pickedList.push(tempArray2[randomIndex]);
        tempArray2.splice(randomIndex, 1);
    }

    pickedList.sort(() => Math.random() - 0.5);

    const board = document.getElementById("board");
    board.innerHTML = ""; // Clear the board

    for (let i = 0; i < pickedList.length; i++) {
        const card = createCardElement(pickedList[i]);
        board.appendChild(card);
    }
}

function createCardElement(cardData) {
    const card = document.createElement("div");
    card.classList.add("card");

    const imgFrontContainer = document.createElement("div");
    imgFrontContainer.classList.add("imgFront");

    const imgFront = document.createElement("img");
    imgFront.src = cardData.img;

    imgFrontContainer.appendChild(imgFront);
    card.appendChild(imgFrontContainer);

    const imgBackContainer = document.createElement("div");
    imgBackContainer.classList.add("imgBack");

    const imgBack = document.createElement("img");
    imgBack.src = "aset/img/ballon.png";

    imgBackContainer.appendChild(imgBack);
    card.appendChild(imgBackContainer);

    card.addEventListener("click", function () {
        if (!card.classList.contains("flipped")) {
            revealCard(card);
        }
    });

    return card;
}

function revealCard(card) {
    const audio1 = new Audio('aset/audio/Success and Fail SFX/success.mp3');
    if (!card.classList.contains("flipped")) {
        card.classList.add("flipped");
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            const firstCard = flippedCards[0];
            const secondCard = flippedCards[1];
            const firstImg = firstCard.querySelector(".imgFront img");
            const secondImg = secondCard.querySelector(".imgFront img");

            if (firstImg.src === secondImg.src) {
                matchedCards.push(firstCard, secondCard);
                flippedCards = [];
                if (matchedCards.length === pickedList.length) {
                    audio.pause();
                    setTimeout(function () {
                        showAlert("Hebat!", "Kamu luar biasa");
                    }, 400);
                    audio1.play();
                }
            } else {
                setTimeout(function () {
                    firstCard.classList.remove("flipped");
                    secondCard.classList.remove("flipped");
                    flippedCards = [];
                }, 1000);
            }
        }
    }
}

function showAlert(header, message) {
    const alertHeader = document.getElementById('alert-header');
    const alertDesc = document.getElementById('alert-desc');
    const confBtn = document.getElementById('confirm-btn');

    alertHeader.textContent = header;
    alertDesc.textContent = message;
    confBtn.innerHTML = "Main Lagi";

    document.getElementById("alert-overlay").style.display = "block";
    document.getElementById("alert").style.display = "block";
}

function resetBoard() {
    document.getElementById("alert-overlay").style.display = "none";
    document.getElementById("alert").style.display = "none";
    startGame();
}

document.getElementById("confirm-btn").addEventListener("click", resetBoard);

startGame();
