function check() {
  const confirm = document.getElementById('agreement');
  if (confirm.checked) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
}
check();

function validateForm() {
  const password = document.forms('myForm')('password').value;
  const email = document.forms('myForm')('email').value;

  if (password === '123456' && email === 'tryber@teste.com') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

validateForm();
