/*Consulta à API*/ 
/*Carregamento dos dados na Tabela ou Card*/
const botao = document.querySelector('#botao-consulta');
botao.addEventListener('click', moverfundo);

function moverfundo() {
  const div = document.getElementById('fundo');
  div.style.transform = 'translate(-150px, -300px)';
}
const botao2 = document.querySelector('#botao-consulta');
botao2.addEventListener('click', mostrartabela);

function mostrartabela() {
  const div = document.getElementById('tabela');
  div.style.display = 'table';
}

const cepInput = document.querySelector('#cep');
const ruaInput = document.querySelector('#rua');
const complementoInput = document.querySelector('#complemento');
const bairroInput = document.querySelector('#bairro');
const localidadeInput = document.querySelector('#localidade');
const ufInput = document.querySelector('#uf');
const dddInput = document.querySelector('#ddd');

  async function procurarCEP(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    
    return data;  
  };

function filtrarTabela(data) {
  cepInput.value = data.cep
  ruaInput.value = data.logradouro;
  complementoInput.value = data.complemento;
  bairroInput.value = data.bairro;
  localidadeInput.value = data.localidade;
  ufInput.value = data.uf;
  dddInput.value = data.ddd;

}
const button = document.querySelector('#botao-consulta');

button.addEventListener('click', async () => {
  const cep = cepInput.value;
  const data = await procurarCEP(cep);

  filtrarTabela(data);
  table.classList.remove('hidden');
});








