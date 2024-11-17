let user = 0;
let comp = 0;
const choice = document.querySelectorAll(".choice");
let userscore = document.querySelector(".userscore");
let compscore = document.querySelector(".compscore");
let showres = document.querySelector(".showres");
const opt = ["stone", "paper", "scissors"];

const compchoice = (opt) => {
  let randm = Math.floor(Math.random() * 3);
  return opt[randm];
};

choice.forEach((c) => {
  c.addEventListener("click", () => {
    const cid = c.getAttribute("id");
    if (cid === compchoice(opt)) {
      showres.innerHTML = "It's a draw";
    } else {
      if (cid === "stone") {
        if (compchoice(opt) === "paper") {
          showres.innerHTML = "Computer chose paper, Computer wins";
          comp++;
        } else {
          showres.innerHTML = "Computer chose scissor, User wins";
          user++;
        }
      } else if (cid === "paper") {
        if (compchoice(opt) === "scissors") {
          showres.innerHTML = "Computer chose scissor, Computer wins";
          comp++;
        } else {
          showres.innerHTML = "Computer chose stone, User wins";
          user++;
        }
      } else if (cid === "scissors") {
        if (compchoice(opt) === "stone") {
          showres.innerHTML = "Computer chose stone, Computer wins";
          comp++;
        } else {
          showres.innerHTML = "Computer chose paper, User wins";
          user++;
        }
      }
    }
    userscore.innerHTML = user;
    compscore.innerHTML = comp;
  });
});


