document.addEventListener('DOMContentLoaded', function() {
	var modals = document.querySelectorAll('.modal');
	M.Modal.init(modals);
});

const lClose = document.querySelector('#idlogin-close');
const sClose = document.querySelector('#idsignup-close');
lClose.addEventListener('click', (e) => {
  var instance = M.Modal.getInstance(document.querySelector('#idlogin'));
  instance.close();
});
sClose.addEventListener('click', (e) => {
  var instance = M.Modal.getInstance(document.querySelector('#idsignup'));
  instance.close();
});

firebase.auth().onAuthStateChanged(user => {
  if(user) {
    window.location = 'main.html'; //If User is logged in, redirect to main page
  }
});