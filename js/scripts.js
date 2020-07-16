window.addEventListener('load', start);
var globalRedRange = 0;
var globalGreenRange = 0;
var globalBlueRange = 0;

var globalTextRed = 0;
var globalTextBlue = 0;
var globalTextGreen = 0;

function start() {
  initConfigs();
  render();
}

function initConfigs() {
  function queryRanges() {
    globalRedRange = document.querySelector('#redColor');
    globalGreenRange = document.querySelector('#greenColor');
    globalBlueRange = document.querySelector('#blueColor');

    globalTextRed = document.querySelector('#textRedColor');
    globalTextGreen = document.querySelector('#textGreenColor');
    globalTextBlue = document.querySelector('#textBlueColor');
  }
  function initInputs() {
    globalRedRange.value = 0;
    globalGreenRange.value = 0;
    globalBlueRange.value = 0;

    globalTextRed.value = 0;
    globalTextGreen.value = 0;
    globalTextBlue.value = 0;
  }
  queryRanges();
  initInputs();
}

function render() {
  function changeColor() {
    boxResult.style.backgroundColor =
      'rgb(' +
      globalTextRed.value +
      ',' +
      globalTextGreen.value +
      ',' +
      globalTextBlue.value +
      ')';

    boxChoseColor.style.backgroundColor =
      'rgb(' +
      globalTextRed.value +
      ',' +
      globalTextGreen.value +
      ',' +
      globalTextBlue.value +
      ')';

    header1.style.color =
      'rgb(' +
      globalTextRed.value +
      ',' +
      globalTextGreen.value +
      ',' +
      globalTextBlue.value +
      ')';
  }
  function addListeners() {
    globalRedRange.addEventListener('input', function () {
      globalTextRed.value = this.value;
      changeColor();
    });

    globalGreenRange.addEventListener('input', function () {
      globalTextGreen.value = this.value;
      changeColor();
    });

    globalBlueRange.addEventListener('input', function () {
      globalTextBlue.value = this.value;
      changeColor();
    });
  }
  var boxResult = document.querySelector('#resultColor');
  var boxChoseColor = document.querySelector('#choseColors');
  var header1 = document.querySelector('h1');

  addListeners();
  changeColor();
}
