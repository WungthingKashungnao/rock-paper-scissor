let rules = document.getElementById("rules"); //rules button
let closeRules = document.getElementById("closeRules"); //close rules button
let rulesNotice = document.getElementById("rulesNotice"); //rules notice
let rockSelected = document.getElementById("rock");
let scissorSelected = document.getElementById("scissor");
let paperSelected = document.getElementById("paper");
let main = document.querySelector("main");
let innerLose = document.getElementsByClassName("innerLose")[0];
let innerWin = document.getElementsByClassName("innerWin")[0];
// function to topen rules notice
const openRulesNoice = () => {
  rulesNotice.style.visibility = "visible";
};
// fucnction to close rules notice
const closeRulesFunc = () => {
  rulesNotice.style.visibility = "hidden";
};

const playAgain = () => {
  main.innerHTML = "";
  return (main.innerHTML = `
      <div class="play">
          <button onclick='playGameStart(id)' id="rock" class="rock btn-choice" data-choice="rock">
            <div><img src="/images/rock.png" alt="" /></div>
            <img src="./images/Line1.png" alt="" class="line1" />
          </button>
          <button onclick='playGameStart(id)' id="scissor" class="scissor btn-choice" data-choice="scissor">
            <div><img src="/images/scissor.png" alt="" /></div>
            <img src="./images/Line2.png" alt="" class="line2" />
          </button>
          <button onclick='playGameStart(id)' id="paper" class="paper btn-choice" data-choice="paper">
            <div><img src="/images/paper.png" alt="" /></div>
            <img src="./images/Line3.png" alt="" class="line3" />
          </button>
        </div>
      `);
};

// function executed when the user click on any of the rock paper scissor
const playGameStart = (id) => {
  /*
    1= rock
    2= scissor
    3=paper
    */
  let pcChoice = Math.floor(Math.random() * 3 + 1); //generating choice for the pc
  let pcChoiceName; //this varibale is going to store the choice name of pc
  let myChoice = id;
  //   here we assign the pc choice to the varaibale pcChoiceName
  if (pcChoice === 1) {
    pcChoiceName = "rock";
  } else if (pcChoice === 2) {
    pcChoiceName = "scissor";
  } else if (pcChoice === 3) {
    pcChoiceName = "paper";
  }

  //   rendering result based on the result of win, lose or tieup
  if (pcChoiceName === myChoice) {
    // tie up condition

    //  styling the border of the choices
    if (pcChoiceName === "rock") {
      innerLose.style.backgroundColor = "#0074b6";
      innerWin.style.backgroundColor = "#0074b6";
    } else if (pcChoiceName === "paper") {
      innerLose.style.backgroundColor = "#ffa943";
      innerWin.style.backgroundColor = "#ffa943";
    } else if (pcChoiceName === "scissor") {
      innerLose.style.backgroundColor = "#bd00ff";
      innerWin.style.backgroundColor = "#bd00ff";
    }

    main.innerHTML = "";
    return (main.innerHTML = `
    <div class="tieUp">
        <div class="userPickTieUp">
          <p class="tieUpText">YOU PICKED</p>
          <div>
            <img src="/images/${id}.png" alt="" />
          </div>
        </div>
        <div class="pcPickTieUp">
          <p class="tieUpText">PC PICKED</p>
          <div>
            <img src="/images/${pcChoiceName}.png" alt="" />
          </div>
        </div>
        <div class="tieUpResText">
          <h3>TIE UP</h3>
          <button onclick='playAgain()'>REPLAY</button>
        </div>
      </div>
    `);
  } else if (
    (myChoice === "rock" && pcChoiceName === "scissor") ||
    (myChoice === "paper" && pcChoiceName === "rock") ||
    (myChoice === "scissor" && pcChoiceName === "paper")
  ) {
    // winning condition
    main.innerHTML = "";
    return (main.innerHTML = `
    <div class="gameResult winningGame">
        <div class="userPick">
          <div class="fistInner">
            <div class="secondInner">
              <div class="innerWin">
                <div class="resPlay">
                  <img src="./images/${id}.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <p class="userPickText">YOU PICKED</p>
        </div>
        <div class="computerPick">
          <div class="innerLose">
            <div class="resPlay"><img src="./images/${pcChoiceName}.png" alt="" /></div>
          </div>
          <p class="pcPickText">PC PICKED</p>
        </div>
        <div class="winResultText">
          <h3>YOU WIN</h3>
          <p>AGAINST PC</p>
          <button onclick='playAgain()'>PLAY AGAIN</button>
        </div>
      </div>
    `);
  } else if (
    (myChoice === "scissor" && pcChoiceName === "rock") ||
    (myChoice === "rock" && pcChoiceName === "paper") ||
    (myChoice === "paper" && pcChoiceName === "scissor")
  ) {
    // losing condition
    main.innerHTML = "";
    return (main.innerHTML = `
    <div class="gameResult losingGame">
        <div class="computerPick">
          <div class="innerLose">
            <div class="resPlay"><img src="./images/${pcChoiceName}.png" alt="" /></div>
          </div>
          <p class="pcPickText">PC PICKED</p>
        </div>

        <div class="userPick">
          <div class="fistInner">
            <div class="secondInner">
              <div class="innerWin">
                <div class="resPlay">
                  <img src="./images/${id}.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <p class="userPickText">YOU PICKED</p>
        </div>

        <div class="winResultText">
          <h3>YOU LOST</h3>
          <p>AGAINST PC</p>
          <button onclick='playAgain()'>PLAY AGAIN</button>
        </div>
      </div>
    `);
  }
};

rules.onclick = openRulesNoice;
closeRules.onclick = closeRulesFunc;
rockSelected.onclick = () => playGameStart(rockSelected.id);
scissorSelected.onclick = () => playGameStart(scissorSelected.id);
paperSelected.onclick = () => playGameStart(paperSelected.id);
