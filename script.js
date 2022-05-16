const cb = document.getElementById('agreement');
cb.addEventListener('change', () => {
  if (cb.value === 'on') {
    document.getElementById('submit-btn').disabled = false;
    cb.value = 'off';
  } else {
    document.getElementById('submit-btn').disabled = true;
    cb.value = 'on';
  }
});

const login = document.getElementById('login');
login.addEventListener('submit', () => {
  const senha = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  if (senha === '123456' && email === 'tryber@teste.com') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const txtarea = document.querySelector('textarea');
const count = document.getElementById('counter');
txtarea.addEventListener('keyup', () => {
  count.innerHTML = (500 - txtarea.value.length);
});

const values = document.getElementById('evaluation-form');
values.addEventListener('submit', (events) => {
  events.preventDefault();
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const nomeValue = document.getElementById('name-value');
  const email = document.getElementById('input-email').value;
  const emailValue = document.getElementById('email-value');
  const observacoes = document.getElementById('textarea').value;
  const observacoesValue = document.getElementById('observacoes-value');

  // nome
  nomeValue.textContent = (`${nome} ${sobrenome}`);

  // email
  emailValue.textContent = (email);

  // obs
  observacoesValue.textContent = (observacoes);
});

values.addEventListener('submit', (event) => {
  event.preventDefault();

  const notaValue = document.getElementById('nota-value');
  const nota = document.getElementsByName('rate');
  for (let i = 0, { length } = nota; i < length; i += 1) {
    if (nota[i].checked) {
      notaValue.textContent = (nota[i].value);
      break;
    }
  }
});

values.addEventListener('submit', (event) => {
  event.preventDefault();
  const materiasValue = document.getElementById('materias-value');
  const materias = document.getElementsByClassName('subject');

  materiasValue.textContent = ' ';
  for (let i = 0, { length } = materias; i < length; i += 1) {
    if (materias[i].checked) {
      materiasValue.textContent += `${(materias[i].value)}, `;
    }
  }
});

values.addEventListener('submit', (event) => {
  event.preventDefault();
  const casa = document.getElementById('house').value;
  const casaValue = document.getElementById('casa-value');
  const familiaValue = document.getElementById('familia-value');
  const familia = document.getElementsByName('family');

  // casa
  casaValue.textContent = (casa);

  for (let i = 0, { length } = familia; i < length; i += 1) {
    if (familia[i].checked) {
      familiaValue.textContent = (familia[i].value);
      break;
    }
  }
});
