const directoryElement = document.getElementById("directory");
const directoryLetters = document.querySelectorAll('.directory img');
const contentImages = document.querySelectorAll('.content img');

directoryLetters.forEach((letter, index) => {
    letter.addEventListener('click', () => {
        directoryElement.style.backgroundColor = "black";

        // Revert back to original background color after 0.1 seconds
        setTimeout(() => {
            directoryElement.style.backgroundColor = "#D5F1F8";
        }, 10);

        contentImages[index].scrollIntoView(false, { behavior: 'smooth' });
    });
});
