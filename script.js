const encryptionMap = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const decryptionMap = Object.entries(encryptionMap).map(([key, value]) => [
  value,
  key,
]);

function encryptButtonClicked(rawText) {
  const validateText = inputValidation(rawText);
  return validateText.split("").map(encryptTextArray).join("");
}

function decryptButtonClicked(encryptedText) {
  let decryptedText = inputValidation(encryptedText);
  decryptionMap.forEach(([key, value]) => {
    decryptedText = decryptedText.replaceAll(key, value);
  });
  return decryptedText;
}

const encryptTextArray = (char) => {
  return encryptionMap.hasOwnProperty(char) ? encryptionMap[char] : char;
};

const inputValidation = (input) => {
  return input.toLowerCase();
};


const textArea = document.querySelector(".text-area");
const message = document.querySelector(".output-area");
const text = document.querySelector(".text-notFound")

function removeImageWhenBtnClicked() {
  const element = document.getElementById("output-area");
  element.style.backgroundImage = "url()";
}

function removeTextWhenBtnClicked() {
  const h1 = document.getElementById("aviso-notFound");
  h1.textContent = "";
  const p = document.getElementById("text-notFound");
  p.textContent = "";
}

function showBtnWhenClicked() {
  const btnCopy = document.getElementById("btn-copy")
  btnCopy.style.display = "inline"
}


function btnEncrypt() {
  showBtnWhenClicked()
  removeImageWhenBtnClicked();
  removeTextWhenBtnClicked();
  const textoEncripitado = encryptButtonClicked(textArea.value);
  message.value = textoEncripitado;
  textArea.value = "";
}

function btnDecrypt() {
  const textoEncriptado = decryptButtonClicked(textArea.value);
  message.value = textoEncriptado;
  textArea.value = "";
}

// document.getElementById("output-section").addEventListener("click", function() {
//   console.log('ok');
// })

async function btnCopy() {
  const text = document.getElementById('output-area')
  try {
    navigator.clipboard.writeText(text.value)
  } catch (error) {
    console.log(error.message)
  }
}  
