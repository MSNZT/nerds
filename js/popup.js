const popup = document.querySelector('.modal');
const openPopupModal = document.querySelector('.btn-contacts');
const closePopupModal = document.querySelector('.btn-close');
const loginForm = popup.querySelector('.feedback');
const loginLogin = popup.querySelector('.modal-name');
const emailEmail = popup.querySelector('.modal-email');
const textText = popup.querySelector('.modal-text');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

openPopupModal.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('modal-feedback');

  if (storage) {
    loginLogin.value = storage;
    emailEmail.focus();
  } else {
    loginLogin.focus();
  }
});

closePopupModal.addEventListener('click', function() {
  popup.classList.remove('modal-feedback');
  popup.classList.remove('modal-error');
});

loginForm.addEventListener('submit', function (evt) {
  if (!loginLogin.value || !emailEmail.value ||!textText.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', loginLogin.value);
    }
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal-feedback')) {
      evt.preventDefault();
      popup.classList.remove('modal-feedback');
      popup.classList.remove('modal-error');
    }
  }
});

