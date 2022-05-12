/*alert(
  "Уважаемые участники курса! Пожалуйста, проверьте задание завтра. Спасибо!"
);*/
/*массивы кнопок англ/шифт/рус в строках*/
const lineButtons1      = ['Esc', '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const lineButtonsShift1 = ['Esc', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];

const lineButtons2      = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'];
const lineButtonsShift2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|'];
const lineButtonsRus2   = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', "ъ", '\\'];

const lineButtons3      = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
const lineButtonsShift3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter'];
const lineButtonsRus3   = ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'];

const lineButtons4      = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'];
const lineButtonsShift4 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '▲', 'Shift'];
const lineButtonsRus4   = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'];

const lineButtons5      = ['Ctrl', 'Win', 'Alt', ' ', '◄', '▼', '►', 'Alt', 'Ctrl'];

const lineKey1    = ['Escape', 'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
const lineKey2    = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'];
const lineKey3    = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
const lineKey4    = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
const lineKey5    = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'AltRight', 'ControlRight'];
const otherKey = ['Escape', 'Backspace', 'Tab', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Keyboard', 'keyboard-line', 'capslock capslock-active'];

let lang = false;
let capslock = false;

let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.appendChild(wrapper);

let textInput = document.createElement("textarea");
let keyboard = document.createElement("div");
let keyboardRow = document.createElement("div");
let footer = document.createElement("div");
textInput.setAttribute("rows", "10");
textInput.setAttribute("cols", "96");

wrapper.appendChild(textInput);
wrapper.appendChild(keyboard);
keyboard.classList.add("keyboard");
keyboardRow.classList.add("keyboard-line");

footer.innerHTML = "<h5>Создано для Windows. Переключение клавиатуры: Alt+Shift</h5>";
wrapper.appendChild(footer);

function changeLanguage() {
  if (lang === true) {
    keyboard.innerHTML = "";
    keyb(lineButtons1, lineKey1);
    keybRu(lineButtonsRus2, lineKey2);
    keybRu(lineButtonsRus3, lineKey3);
    keybRu(lineButtonsRus4, lineKey4);
    keyb(lineButtons5, lineKey5);
  } else {
    keyboard.innerHTML = "";
    keyb(lineButtons1, lineKey1);
    keyb(lineButtons2, lineKey2);
    keyb(lineButtons3, lineKey3);
    keyb(lineButtons4, lineKey4);
    keyb(lineButtons5, lineKey5);
  }
}

function keyb(key, code) {
  let line = "";
  for (i = 0; i < key.length; i++) {
    line += '<button class="' + code[i].toLowerCase() + '">' + key[i] + "</button>";
  }
  document.querySelector(".keyboard").innerHTML +=
    '<div class="keyboard-line">' + line + "</div>";
}

function keybShift(key, code) {
  let line = "";
  for (i = 0; i < key.length; i++) {
    line +=
      '<button class="' +
      code[i].toLowerCase() +
      '">' +
      key[i].toUpperCase() +
      "</button>";
  }
  document.querySelector(".keyboard").innerHTML +=
    '<div class="keyboard-line">' + line + "</div>";
}

function keybRu(key, code) {
  let line = "";
  for (i = 0; i < key.length; i++) {
    line += '<button class="' + code[i].toLowerCase() + '">' + key[i] + "</button>";
  }
  document.querySelector(".keyboard").innerHTML +=
    '<div class="keyboard-line">' + line + "</div>";
}

keyb(lineButtons1, lineKey1);
keyb(lineButtons2, lineKey2);
keyb(lineButtons3, lineKey3);
keyb(lineButtons4, lineKey4);
keyb(lineButtons5, lineKey5);

document.onkeydown = function (e) {
  console.log(e);
  if (!e.repeat) {
    document.querySelector("." + e.code.toLowerCase()).classList.add("active");

    if (!otherKey.includes(e.code)) {
      e.preventDefault();
      textInput.value += e.key;
    }
    if (e.key === "Shift" && lang === false) {
      keyboard.innerHTML = "";
      keyb(lineButtonsShift1, lineKey1);
      keybShift(lineButtonsShift2, lineKey2);
      keybShift(lineButtonsShift3, lineKey3);
      keybShift(lineButtonsShift4, lineKey4);
      keyb(lineButtons5, lineKey5);
    } else if (e.key === "Shift" && lang === true) {
      console.log("meow");
      keyboard.innerHTML = "";
      keyb(lineButtonsShift1, lineKey1);
      keybShift(lineButtonsRus2, lineKey2);
      keybShift(lineButtonsRus3, lineKey3);
      keybShift(lineButtonsRus4, lineKey4);
      keyb(lineButtons5, lineKey5);
    }

    if (e.shiftKey === true && e.altKey === true) {
      lang = !lang;
      console.log(lang);
      changeLanguage();
    }
  }
};

document.onkeyup = function (e) {
  document.querySelector("." + e.code.toLowerCase()).classList.remove("active");

  if (e.key === "Shift" && lang === false) {
    keyboard.innerHTML = "";
    console.log("meow");
    keyb(lineButtons1, lineKey1);
    keyb(lineButtons2, lineKey2);
    keyb(lineButtons3, lineKey3);
    keyb(lineButtons4, lineKey4);
    keyb(lineButtons5, lineKey5);
  }

  if (e.key === "Shift" && lang === true) {
    keyboard.innerHTML = "";
    keyb(lineButtons1, lineKey1);
    keybRu(lineButtonsRus2, lineKey2);
    keybRu(lineButtonsRus3, lineKey3);
    keybRu(lineButtonsRus4, lineKey4);
    keyb(lineButtons5, lineKey5);
  }
};

window.addEventListener("click", function (e) {
  console.log(e.target.className);
  if (!otherKey.find((el) => el.toLowerCase() == e.target.className)) {
    textInput.value += e.target.innerHTML;
  } else if (e.target.className === "backspace") {
    e.preventDefault();
    textInput.value = textInput.value.slice(0, -1);
  } else if (e.target.className === "space") {
    textInput.value += " ";
  } else if (e.target.className.includes("capslock")) {
    document.querySelector(".capslock").classList.toggle("capslock-active");
    capslock = !capslock;
  }
});
