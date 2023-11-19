"use strict";
document.getElementById("textForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var enteredText = document.getElementById("textInput").value;

  updateStyledText(enteredText);
});

document.getElementById("boldCheckbox").addEventListener("change", function () {
  updateStyledText();
});

document.getElementById("italicCheckbox").addEventListener("change", function () {
  updateStyledText();
});

document.getElementById("underlineCheckbox").addEventListener("change", function () {
  updateStyledText();
});

document.getElementById("leftAlignCheckbox").addEventListener("change", function () {
  updateStyledText();
});

function updateStyledText(text) {
  var styledText = document.getElementById("styledText");
  var newText = text || styledText.innerHTML;

  if (document.getElementById("boldCheckbox").checked) {
    newText = "<strong>" + newText + "</strong>";
  }

  if (document.getElementById("italicCheckbox").checked) {
    newText = "<em>" + newText + "</em>";
  }

  if (document.getElementById("underlineCheckbox").checked) {
    newText = "<u>" + newText + "</u>";
  }

  if (document.getElementById("leftAlignCheckbox").checked) {
    styledText.style.textAlign = "left";
  } else {
    styledText.style.textAlign = "center";
  }

  styledText.innerHTML = newText;
}

var checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    if (!this.checked) {
      updateStyledText();
    }
  });
});
