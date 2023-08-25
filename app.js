let rules = document.getElementById("rules"); //rules button
let closeRules = document.getElementById("closeRules"); //close rules button
let rulesNotice = document.getElementById("rulesNotice"); //rules notice

// function to topen rules notice
const openRulesNoice = () => {
  rulesNotice.style.visibility = "visible";
};
// fucnction to close rules notice
const closeRulesFunc = () => {
  rulesNotice.style.visibility = "hidden";
};

rules.onclick = openRulesNoice;
closeRules.onclick = closeRulesFunc;
