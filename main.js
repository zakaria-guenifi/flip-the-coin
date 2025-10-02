const coin = document.querySelector('.coin');
const headsImg = document.querySelector('.coin img:first-child');
const tailsImg = document.querySelector('.coin img:last-child');
const shadowImg = document.querySelector('.shadow-img');
const result = document.querySelector('.result');
const randomBtn = document.getElementById('random-btn');


function afterAnimationCleanup() {
  // remove the animation classes from the coin imgs and shadow img
  headsImg.classList.remove("flip-heads");
  tailsImg.classList.remove("flip-tails");
  shadowImg.classList.remove("shadow-effect");

  // enable the random btn
  randomBtn.disabled = false;
  randomBtn.style.opacity = '1';
  randomBtn.style.cursor = 'pointer';
}

function showResultFace(randomNum) {
 
  if (randomNum === 0) {
    result.textContent = "Heads"
    console.count('Heads');
  } else {
    result.textContent = "Tails"
    console.count('Tails');
  }
  result.classList.add("glow");
}

randomBtn.addEventListener("click", () => {
  // adds the animation classes to the coin imgs and shadow img
  headsImg.classList.add("flip-heads");
  tailsImg.classList.add("flip-tails");
  shadowImg.classList.add("shadow-effect");

  // disable random btn until animation ends
  randomBtn.disabled = true;
  randomBtn.style.opacity = '0.64';
  randomBtn.style.cursor = 'not-allowed';

  // remove the glow class from result
  result.classList.remove("glow");

  // reset the rotate X to 180deg in case it was changed by last result
  tailsImg.style.transform = "rotateX(180deg)";

  // generate a random numb to determine the side of the coin
  const randomNum = Math.floor(Math.random() * 2);

  // 0 for heads and 1 for tails
  if (randomNum === 0) {
    setTimeout(() => {
      afterAnimationCleanup();
      showResultFace(randomNum)
    }, 550);// 550ms is the duration of the animation
  } else {
    tailsImg.style.transform = "rotateX(0deg)";
    setTimeout(() => {
      afterAnimationCleanup();
      showResultFace(randomNum)
    }, 550);// 550ms is the duration of the animation
  }
})

// press the coin to flip it
headsImg.addEventListener("click", () => {
  randomBtn.click();
})
tailsImg.addEventListener("click", () => {
  randomBtn.click();
})

// press space or enter bar to flip the coin
document.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "Enter") {
    randomBtn.click();
  }
})