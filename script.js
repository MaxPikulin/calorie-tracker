const calsIn100Input = document.querySelector('.calsIn100');
const gramsInput = document.querySelector('.grams');
const myCalsInput = document.querySelector('.myCals');
const memoInput = document.querySelector('input.memo');
const resultDiv = document.querySelector('.result');
const addBtn = document.querySelector('.addBtn');
const rowsUl = document.querySelector('.rowsUl');
const totalDiv = document.querySelector('.total');

let calorieTracker = {
  today: [],
};

let calsIn100 = calsIn100Input.value;
let grams = gramsInput.value;
let myCals = myCalsInput.value;

function updateValues() {
  calsIn100 = calsIn100Input.value;
  grams = gramsInput.value;
  myCals = myCalsInput.value;
}

function myCalsHandler() {
  updateValues();
  if (calsIn100 && myCals) {
    gramsInput.value = Math.floor(100 / (calsIn100 / myCals));
  }
}

function gramsHandler() {
  updateValues();
  if (calsIn100 && grams) {
    myCalsInput.value = Math.ceil(calsIn100 * grams / 100);
  }
}

function addBtnHandler() {
  updateValues();
  calorieTracker.today.push(myCals);
  totalHandler();
  rowsUl.innerHTML = `<li>${myCals}</li>` + rowsUl.innerHTML;
}

function totalHandler() {
  totalDiv.innerHTML = calorieTracker.today.reduce((acc, curr) => +acc + +curr);
}

myCalsInput.addEventListener('keyup', myCalsHandler);
gramsInput.addEventListener('keyup', gramsHandler);
addBtn.addEventListener('click', addBtnHandler);
// calsIn100Input.addEventListener('keyup', calsIn100Handler);