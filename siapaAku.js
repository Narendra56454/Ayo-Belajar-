const animal = [
    {
      name: "Rusa",
      description: "Aku adalah hewan herbivora yang memiliki tanduk indah. Aku memiliki bulu berwarna cokelat dan tubuh yang ramping.",
      pict: "aset/img/hewan/rusa.png",
      correct: "aset/img/hewan_card/rusa.png"
    },
    {
      name: "Ayam",
      description: "Aku adalah hewan unggas yang umumnya dipelihara untuk daging dan telur. Aku memiliki sayap pendek dan paruh yang kuat.",
      pict: "aset/img/hewan/ayam.png",
      correct: "aset/img/hewan_card/ayam.png"
    },
    {
      name: "Domba",
      description: "Aku adalah hewan ternak yang umum dipelihara untuk daging, wol, dan kulitnya. Aku memiliki bulu yang lebat dan dijaga dalam kawanan.",
      pict: "aset/img/hewan/domba.png",
      correct: "aset/img/hewan_card/domba.png"
    },
    {
      name: "Burung Hantu",
      description: "Aku adalah burung malam yang memiliki kemampuan terbang hening dan penglihatan yang tajam di kegelapan. Aku memiliki bulu tebal dan paruh tajam.",
      pict: "aset/img/hewan/burung_hantu.png",
      correct: "aset/img/hewan_card/burung_hantu.png"
    },
    {
      name: "Kelinci",
      description: "Aku adalah hewan kecil yang lucu dengan telinga panjang. Aku memiliki gigi tajam yang terus tumbuh sepanjang hidupnya.",
      pict: "aset/img/hewan/kelinci.png",
      correct: "aset/img/hewan_card/kelinci.png"
    }
  ];
  
  const choices = [
    {
      img: "aset/img/hewan_card/ayam.png",
      name: "Ayam"
    },
    {
      img: "aset/img/hewan_card/rusa.png",
      name: "Rusa"
    },
    {
      img: "aset/img/hewan_card/domba.png",
      name: "Domba"
    },
    {
      img: "aset/img/hewan_card/kelinci.png",
      name: "Kelinci"
    },
    {
      img: "aset/img/hewan_card/burung_hantu.png",
      name: "Burung Hantu"
    }
  ];
  
  let counter = 0;
  let flag = 0;
  
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
  
    const clueImg = document.getElementById("pict");
    const clueDesc = document.getElementById("desc");
    const imgChoiceA = document.getElementById("imgA");
    const imgChoiceB = document.getElementById("imgB");
    const imgChoiceC = document.getElementById("imgC");
    const imgChoiceD = document.getElementById("imgD");
  
    const choiceA = document.getElementById("a");
    const choiceB = document.getElementById("b");
    const choiceC = document.getElementById("c");
    const choiceD = document.getElementById("d");
  
    while (counter === flag) {
      counter = Math.floor(Math.random() * animal.length);
    }
  
    flag = counter;
  
    clueImg.src = animal[counter].pict;
    clueDesc.textContent = animal[counter].description;
  
    const answerChoices = [choices[0], choices[1], choices[2], choices[3]];
    const correctAnswer = {
      img: animal[counter].correct,
      name: animal[counter].name
    };
    answerChoices.push(correctAnswer);
    shuffleArray(answerChoices);
  
    const uniqueImages = [];
    answerChoices.forEach(choice => {
      if (!uniqueImages.includes(choice.img)) {
        uniqueImages.push(choice.img);
      }
    });
  
    imgChoiceA.src = uniqueImages[0];
    imgChoiceB.src = uniqueImages[1];
    imgChoiceC.src = uniqueImages[2];
    imgChoiceD.src = uniqueImages[3];
  
    imgChoiceA.alt = answerChoices.find(choice => choice.img === uniqueImages[0]).name;
    imgChoiceB.alt = answerChoices.find(choice => choice.img === uniqueImages[1]).name;
    imgChoiceC.alt = answerChoices.find(choice => choice.img === uniqueImages[2]).name;
    imgChoiceD.alt = answerChoices.find(choice => choice.img === uniqueImages[3]).name;
  
    choiceA.addEventListener('click', function () {
      checkAnswer(choiceA);
    });
  
    choiceB.addEventListener('click', function () {
      checkAnswer(choiceB);
    });
  
    choiceC.addEventListener('click', function () {
      checkAnswer(choiceC);
    });
  
    choiceD.addEventListener('click', function () {
      checkAnswer(choiceD);
    });
  }
  

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  

  function checkAnswer(choice) {
    const chosenAnimal = choice.querySelector('img').alt;
    const alert = document.getElementById('alert');
    const alertHeader = document.getElementById('alert-header');
    const alertDesc = document.getElementById('alert-desc');
    const confBtn = document.getElementById('confirm-btn');

    const audio1 = new Audio('aset/audio/Success and Fail SFX/success.mp3');
    const audio2 = new Audio('aset/audio/Success and Fail SFX/fail.mp3');

    if (chosenAnimal === animal[counter].name) {
      audio.pause();

      alert.style.backgroundImage = "url(aset/img/correct_decoration.png)";
      alertHeader.textContent = "Hebat!"
      alertDesc.textContent = "Jawaban kamu sudah benar";
      confBtn.innerHTML = "Lanjut";
      document.getElementById("alert-overlay").style.display = "block";
      document.getElementById("alert").style.display = "block";

      audio1.play();
    } 
    else {
      audio.pause();
      
      alert.style.backgroundImage = "url(aset/img/wrong_decoration.png)";
      alertHeader.textContent = "Aww!"
      alertDesc.textContent = "Jawaban kamu kurang tepat";
      confBtn.innerHTML = "Coba Lagi";
      flag = flag - 1;
      document.getElementById("alert-overlay").style.display = "block";
      document.getElementById("alert").style.display = "block";

      audio2.play();
    }
  }
  
  startGame();