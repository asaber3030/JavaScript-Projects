const empty = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const nums = "1234567890";
const syms = "!@#$%^&()}{[]/*-+='.,><?";

const passwordLength = document.getElementById('password-length');
const upperCase = document.getElementById('password-uppercase');
const lowerCase = document.getElementById('password-lowercase');
const numbers = document.getElementById('password-number');
const symbols = document.getElementById('password-symbols');
const submit = document.getElementById('gen');

const password = document.getElementById('password-value');

const copy = document.getElementById('copy');

submit.addEventListener('click', () => {
  let initialPassword = empty;
  (upperCase.checked) ? initialPassword += uCase: "";
  (lowerCase.checked) ? initialPassword += lCase: "";
  (numbers.checked) ? initialPassword += nums: "";
  (symbols.checked) ? initialPassword += syms: "";

  password.value = generatePassword(passwordLength.value, initialPassword);
  console.log(password.innerHTML.length);
});

function generatePassword(length, password1) {
  let pass = "";
  for (let i = 0, n = password1.length; i < length; i++) {
    pass += password1.charAt(Math.floor(Math.random() * n));
  }
  return pass;
}

copy.addEventListener('click', () => {
  if (password.value == '') {
    alert('Generate password');
  } else {
    password.select();
    document.execCommand("copy");
    alert('Copied');
  }
});








