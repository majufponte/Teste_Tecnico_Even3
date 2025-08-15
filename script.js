const form = document.getElementById('formulario');
const lista = document.getElementById('listaInscritos');
const erro = document.getElementById('mensagemErro');
const inscritos = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();

  if (nome === '' || email === '') {
    erro.textContent = 'Preencha todos os campos.';
    return;
  }

  if (!email.includes('@')) {
    erro.textContent = 'E-mail inválido.';
    return;
  }

  erro.textContent = '';
  inscritos.push({ nome, email });
  atualizarLista();
  form.reset();
});

function atualizarLista() {
  if (inscritos.length === 0) {
    lista.innerHTML = '<p>Nenhum inscrito ainda.</p>';
    return;
  }

  lista.innerHTML = '';
  inscritos.forEach((pessoa, i) => {
    const div = document.createElement('div');
    div.className = 'inscrito';
    div.textContent = `${i + 1}. ${pessoa.nome} (${pessoa.email})`;
    lista.appendChild(div);
  });
}
