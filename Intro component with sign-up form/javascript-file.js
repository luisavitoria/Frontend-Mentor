//Texto em maiúsculo do botão
const botao = document.getElementById('botao')
botao.style.textTransform = "uppercase"

//Verificar se input está vazio
const form = document.getElementById('form')

const firstName = document.getElementById('firstName')
const classeFirstName = document.querySelector('.class-firstName')

const lastName = document.getElementById('lastName')
const classeLastName = document.querySelector('.class-lastName')

const email = document.getElementById('email')
const classeEmail = document.querySelector('.class-email')

const password = document.getElementById('password')
const classePassword = document.querySelector('.class-password')

form.addEventListener('submit', e => {
  e.preventDefault()

  let firstNameValue = firstName.value 
  let lastNameValue = lastName.value 
  let emailValue = email.value
  let passwordValue = password.value 

  if(firstNameValue == '') {
    classeFirstName.classList.add('erro')
    firstName.placeholder = ''
  }else {
    classeFirstName.classList.remove('erro')
  }

  if(lastNameValue == '') {
    classeLastName.classList.add('erro')
    lastName.placeholder = ""
  }else {
    classeLastName.classList.remove('erro')
  }

  if(!validateEmail(emailValue)) {
    classeEmail.classList.add('erro')
    email.placeholder = 'email@example.com'
  }else {
    classeEmail.classList.remove('erro')
  }

  if(passwordValue == '') {
    classePassword.classList.add('erro')
    password.placeholder = ""
  }else {
    classePassword.classList.remove('erro')
  }

})

function validateEmail(email) {
  return String(email)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}