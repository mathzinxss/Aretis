// Dados iniciais para os gráficos
let categoriasDespesas = ['Alimentação', 'Transporte', 'Moradia', 'Lazer', 'Outros'];
let dadosDespesas = [0, 0, 0, 0, 0];

let categoriasGanhos = ['Salário', 'Freelance', 'Outros'];
let dadosGanhos = [0, 0, 0];

// Inicialização do gráfico de Despesas
var ctxDespesas = document.getElementById('graficoDespesas').getContext('2d');
var chartDespesas = new Chart(ctxDespesas, {
  type: 'pie',
  data: {
    labels: categoriasDespesas,
    datasets: [{
      label: 'Despesas',
      data: dadosDespesas,
      backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffcd56', '#ff9f40']
    }]
  }
});

var chartDespesas = new Chart(ctxDespesas, {
  type: 'pie',
  data: {
    labels: categoriasDespesas,
    datasets: [{
      label: 'Despesas',
      data: dadosDespesas,
      backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffcd56', '#ff9f40']
    }]
  },
  options: {
    animation: {
      duration: 0 // Desativa a animação
    }
  }
});


// Inicialização do gráfico de Ganhos
var ctxGanhos = document.getElementById('graficoGanhos').getContext('2d');
var chartGanhos = new Chart(ctxGanhos, {
  type: 'bar',
  data: {
    labels: categoriasGanhos,
    datasets: [{
      label: 'Ganhos',
      data: dadosGanhos,
      backgroundColor: ['#4caf50', '#ff9800', '#03a9f4']
    }]
  }
});

// Função para atualizar os gráficos
function atualizarGraficos(valor, categoria, tipo) {
  if (tipo === 'Despesa') {
    let index = categoriasDespesas.indexOf(categoria);
    if (index !== -1) {
      dadosDespesas[index] += valor;
    } else {
      categoriasDespesas.push(categoria);
      dadosDespesas.push(valor);
    }
    chartDespesas.update();
  } else if (tipo === 'Ganho') {
    let index = categoriasGanhos.indexOf(categoria);
    if (index !== -1) {
      dadosGanhos[index] += valor;
    } else {
      categoriasGanhos.push(categoria);
      dadosGanhos.push(valor);
    }
    chartGanhos.update();
  }
}

// Captura os valores do formulário e adiciona na tabela
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();  // Impede o envio do formulário

  let tipo = document.getElementById('tipo').value;
  let descricao = document.getElementById('descricao').value;
  let valor = parseFloat(document.getElementById('valor').value);
  let categoria = document.getElementById('categoria').value;

  if (descricao && valor && categoria && tipo) {
    let tabela = document.getElementById('tabelaTransacoes').getElementsByTagName('tbody')[0];
    let novaLinha = tabela.insertRow();
    let celulaDescricao = novaLinha.insertCell(0);
    let celulaCategoria = novaLinha.insertCell(1);
    let celulaTipo = novaLinha.insertCell(2);
    let celulaValor = novaLinha.insertCell(3);
    let celulaAcao = novaLinha.insertCell(4);

    celulaDescricao.textContent = descricao;
    celulaCategoria.textContent = categoria;
    celulaTipo.textContent = tipo;
    celulaValor.textContent = `R$ ${valor.toFixed(2)}`;

    let btnRemover = document.createElement('button');
    btnRemover.className = 'btn btn-danger btn-sm';
    btnRemover.textContent = 'Remover';
    btnRemover.onclick = function() {
      tabela.deleteRow(novaLinha.rowIndex - 1);
      atualizarGraficos(-valor, categoria, tipo);
    };
    celulaAcao.appendChild(btnRemover);

    atualizarGraficos(valor, categoria, tipo);
    document.querySelector('form').reset();
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});

// Categorias separadas por tipo
const categorias = {
  'Ganho': ['Salário', 'Freelance', 'Outros'],
  'Despesa': ['Alimentação', 'Transporte', 'Moradia', 'Lazer', 'Outros']
};

// Atualiza as categorias com base no tipo selecionado
document.getElementById('tipo').addEventListener('change', function() {
  let tipoSelecionado = this.value;
  let categoriaSelect = document.getElementById('categoria');
  categoriaSelect.innerHTML = '';

  categorias[tipoSelecionado].forEach(function(categoria) {
    let option = document.createElement('option');
    option.value = categoria;
    option.text = categoria;
    categoriaSelect.appendChild(option);
  });
});
