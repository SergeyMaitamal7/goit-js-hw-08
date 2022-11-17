import throttle from 'lodash.throttle';

// Напиши скрипт который будет сохранять
// значения полей в локальное хранилище когда пользователь что-то печатает.

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';
let objectInput = {};

updateTextForm();

form.addEventListener('input', throttle(inputChangelocalStorage, 500));
form.addEventListener('submit', submitRemove);

function inputChangelocalStorage(event) {
  objectInput = { email: input.value, message: textarea.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectInput));
  console.log('localStorage', localStorage);
  return objectInput;
}

function submitRemove(event) {
  event.preventDefault();
  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    console.log('objectInput', objectInput);
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }
  event.currentTarget.reset();
}

function updateTextForm() {
  if (
    localStorage.getItem(LOCALSTORAGE_KEY) &&
    input.value === '' &&
    textarea.value === ''
  ) {
    input.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).email;
    textarea.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).message;
    return input.value, textarea.value;
  }
}
