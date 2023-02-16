const loginBtn = document.getElementById('login');
const inputEmailLogin = document.getElementById('email');
const inputSenhaLogin = document.getElementById('senha');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const counter = document.getElementById('counter');
const textarea = document.getElementById('textarea');
const sectionForm = document.getElementById('forms');
const evaluationForm = document.getElementById('evaluation-form');

const verifyLogin = () => {
  if (inputEmailLogin.value === 'tryber@teste.com' && inputSenhaLogin.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
};

const enableSubmitBtn = () => {
  submitBtn.disabled = !agreement.checked;
};

// Inspiração: https://pt.stackoverflow.com/questions/25753/como-fazer-um-contador-de-caracteres-de-uma-textarea
const countLetters = () => {
  const maxLength = 500;
  const textLength = textarea.value.length;
  counter.innerText = maxLength - textLength;
};

// Inspiração para obter os valores do checkbox: https://pt.stackoverflow.com/questions/83463/pegar-valores-checkbox-com-javascript
const getSubjects = () => {
  const arraySubjects = [];
  const subject = document.getElementsByName('subject');
  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked) {
      arraySubjects.push(subject[index].value);
    }
  }
  return arraySubjects.join(', ');
};

// Inspiração para obter os valores do radio: https://pt.stackoverflow.com/questions/82968/pegar-valor-de-um-button-radio
const getData = () => {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;

  const dataObj = {
    Nome: `${name} ${lastName}`,
    Email: document.getElementById('input-email').value,
    Casa: document.getElementById('house').value,
    Família: document.querySelector('input[name=family]:checked').value,
    Matérias: getSubjects(),
    Avaliação: document.querySelector('input[name=rate]:checked').value,
    Observações: textarea.value,
  };
  return dataObj;
};

const showData = () => {
  const dataObj = getData();
  evaluationForm.style.display = 'none';
  const formData = document.createElement('form');
  formData.id = 'form-data';
  sectionForm.appendChild(formData);
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  const keys = Object.keys(dataObj);
  for (let index = 0; index < keys.length; index += 1) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = `${keys[index]}: ${dataObj[keys[index]]}`;
    formData.appendChild(paragraph);
  }
};

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
});

window.onload = () => {
  loginBtn.addEventListener('click', verifyLogin);
  agreement.addEventListener('change', enableSubmitBtn);
  textarea.addEventListener('input', countLetters);
  submitBtn.addEventListener('click', showData);
};