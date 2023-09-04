const passwordLengthEl = document.querySelector("#password-length");
const includeSymbolsEl = document.querySelector("#include-symbols");
const includeUppercaseEl = document.querySelector("#include-uppercase");
const includeNumbersEl = document.querySelector("#include-numbers");
const includeLowercaseEl = document.querySelector("#include-lowercase");
const excludeSimilarEl = document.querySelector("#exclude-similar");
const generateButtonEl = document.querySelector("#generate-button");
const passwordEl = document.querySelector("#password");

let numbers = [];
let upperCases = [];
let lowerCases = [];
let symblosArr = [];
let symblos = "!@#$%^&*()_-+=[]{}|;:<>,.?/";
var similarCharacters = ["0", "O", "1", "l", "2", "Z", "5", "S", "8", "B"];

const getChars = () => {
  for (let i = 48; i < 58; i++) {
    numbers.push(String.fromCharCode(i));
  }
  for (let i = 65; i < 91; i++) {
    upperCases.push(String.fromCharCode(i));
  }
  for (let i = 97; i < 123; i++) {
    lowerCases.push(String.fromCharCode(i));
  }
  for (let i = 0; i < symblos.length; i++) {
    symblosArr.push(symblos[i]);
  }
};

getChars();

const geratePassword = () => {
  let chars = [];
  let password = "";

  if (includeNumbersEl.checked) {
    chars = chars.concat(numbers);
  }
  if (includeUppercaseEl.checked) {
    chars = chars.concat(upperCases);
  }
  if (includeLowercaseEl.checked) {
    chars = chars.concat(lowerCases);
  }
  if (includeSymbolsEl.checked) {
    chars = chars.concat(symblosArr);
  }
  if (excludeSimilarEl.checked) {
    similarCharacters.forEach((char) => {
      chars = chars.filter((e) => e != char);
    });
  }

  if (chars.length == 0 || passwordLengthEl.value == "") {
    aviso()
  } else {
    for (let i = 0; i < passwordLengthEl.value; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }

    passwordEl.innerHTML = password;
  }
};

generateButtonEl.addEventListener("click", geratePassword);


const aviso = ()=>{
    alert("É necessario selecionar pelo menos uma opção e um tamanho valido")
}