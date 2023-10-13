const hewan = [
  {
      id: "rusa",
      img: "aset/img/hewan/rusa.png",
      audio: "aset/audio/Hewan/rusa.wav",
      nama: "Rusa",
      description: "Rusa adalah hewan herbivora yang memiliki tanduk indah. Mereka memiliki bulu berwarna cokelat dan tubuh yang ramping.",
      food: "Rusa biasanya memakan rumput, daun-daunan, tunas, dan buah-buahan. Mereka juga sering mengunjungi sungai atau danau untuk minum air."
    },
    {
      id: "kuda",
      img: "aset/img/hewan/kuda.png",
      audio: "aset/audio/Hewan/kuda.wav",
      nama: "Kuda",
      description: "Kuda adalah hewan mamalia berkuku yang telah lama menjadi teman manusia. Mereka memiliki tubuh yang besar, kaki panjang, dan ekor yang lebat.",
      food: "Kuda adalah herbivora, mereka memakan rumput, daun-daunan, jerami, dan biji-bijian. Mereka juga membutuhkan air yang cukup."
    },
    {
      id: "sapi",
      img: "aset/img/hewan/sapi.png",
      audio: "aset/audio/Hewan/sapi.wav",
      nama: "Sapi",
      description: "Sapi adalah hewan ternak yang umum dipelihara untuk daging dan susu. Mereka memiliki tubuh besar dengan tanduk yang khas pada beberapa jenisnya.",
      food: "Sapi adalah hewan herbivora dan memakan rumput, jerami, daun-daunan, dan biji-bijian. Mereka juga memerlukan air yang cukup."
    },
    {
      id: "kelinci",
      img: "aset/img/hewan/kelinci.png",
      audio: "aset/audio/Hewan/kelinci.wav",
      nama: "Kelinci",
      description: "Kelinci adalah hewan kecil yang lucu dengan telinga panjang. Mereka memiliki gigi tajam yang terus tumbuh sepanjang hidupnya.",
      food: "Kelinci adalah herbivora dan memakan rumput, daun-daunan, sayuran, dan biji-bijian. Mereka juga suka mengunyah serat kasar untuk menjaga gigi mereka tetap rapi."
    },
    {
      id: "babi",
      img: "aset/img/hewan/babi.png",
      audio: "aset/audio/Hewan/babi.wav",
      nama: "Babi",
      description: "Babi adalah hewan mamalia omnivora dengan tubuh yang besar dan gemuk. Mereka memiliki hidung yang panjang dan cakar yang kuat.",
      food: "Babi adalah hewan omnivora, mereka memakan berbagai jenis makanan seperti biji-bijian, rumput, akar-akaran, serangga, dan makanan sisa manusia."
      },
      {
      id: "tupai",
      img: "aset/audio/Hewan/tupai.wav",
      audio: "aset/audio/Hewan/babi.wav",
      nama: "Tupai",
      description: "Tupai adalah hewan kecil yang lincah dan memiliki ekor yang panjang. Mereka sering melompat dari satu pohon ke pohon lainnya dengan lincahnya.",
      food: "Tupai adalah hewan omnivora, mereka memakan berbagai jenis makanan seperti biji-bijian, buah-buahan, serangga, telur burung, dan nektar bunga."
      },
      {
      id: "ayam",
      img: "aset/audio/Hewan/ayam.wav",
      audio: "aset/audio/Hewan/ayam.wav",
      nama: "Ayam",
      description: "Ayam adalah hewan unggas yang umumnya dipelihara untuk daging dan telur. Mereka memiliki sayap pendek dan paruh yang kuat.",
      food: "Ayam adalah hewan omnivora, mereka memakan berbagai jenis makanan seperti biji-bijian, serangga, cacing, daun-daunan, dan makanan sisa manusia."
      },
      {
      id: "domba",
      img: "aset/img/hewan/domba.png",
      audio: "aset/audio/Hewan/domba.wav",
      nama: "Domba",
      description: "Domba adalah hewan ternak yang umum dipelihara untuk daging, wol, dan kulitnya. Mereka memiliki bulu yang lebat dan dijaga dalam kawanan.",
      food: "Domba adalah hewan herbivora, mereka memakan rumput, daun-daunan, jerami, dan biji-bijian. Mereka juga membutuhkan air yang cukup."
      },
      {
      id: "burung_hantu",
      img: "aset/img/hewan/burung_hantu.png",
      audio: "aset/audio/Hewan/burung_hantu.wav",
      nama: "Burung Hantu",
      description: "Burung Hantu adalah burung malam yang memiliki kemampuan terbang hening dan penglihatan yang tajam di kegelapan. Mereka memiliki bulu tebal dan paruh tajam.",
      food: "Burung Hantu adalah karnivora, mereka memakan hewan kecil seperti tikus, kelinci, burung, serangga, dan reptil kecil."
      },
      {
      id: "rakun",
      img: "aset/img/hewan/rakun.png",
      audio: "aset/audio/Hewan/rakun.wav",
      nama: "Rakun",
      description: "Rakun adalah hewan omnivora yang dikenal dengan maskotnya yang lucu dan bulunya yang belang-belang. Mereka memiliki cakar yang kuat dan ekor yang lebat.",
      food: "Rakun adalah hewan omnivora, mereka memakan berbagai jenis makanan seperti ikan, serangga, buah-buahan, biji-bijian, dan makanan sisa manusia."
      }
];



const id = sessionStorage.getItem('selectedHewanId');

const matchingHewan = hewan.find(h => h.id === id);

// Display the description of the matching hewan object
if (matchingHewan) {
    const contentContainer = document.getElementById("content-container");
    const imgElement = document.getElementById("pict");
    const nameElement = document.getElementById("name");
    const descriptionElement = document.getElementById("description");
    const foodElement = document.getElementById("food");

    imgElement.src = matchingHewan.img;
    nameElement.textContent = matchingHewan.nama;
    descriptionElement.textContent = matchingHewan.description;
    foodElement.textContent = matchingHewan.food;

    // SOUND
    const audioPath = matchingHewan.audio;
    const audio = new Audio(audioPath);

    contentContainer.addEventListener("click", () => {
      audio.currentTime = 0;
      audio.play();
    });
    
} else {
    console.log("No matching hewan found.");
}
