// Yasmin Siqueira Lobo
document.getElementById('adicionarLinha').addEventListener('click', function() {
   
    var tabela = document.getElementById('minhaTabela').getElementsByTagName('tbody')[0];

   
    var novaLinha = tabela.insertRow();

   
    var novaCelula1 = novaLinha.insertCell(0);
    var novaCelula2 = novaLinha.insertCell(1);
    var novaCelula3 = novaLinha.insertCell(2);

    novaCelula1.innerHTML = 'Novo Dado 1';
    novaCelula2.innerHTML = 'Novo Dado 2';
    novaCelula3.innerHTML = 'Novo Dado 3';

    var linhas = tabela.getElementsByTagName('tr');
    for (var i = 0; i < linhas.length; i++) {
        if (i % 2 === 0) {
            linhas[i].style.backgroundColor = '#ffffff';
        } else {
            linhas[i].style.backgroundColor = '#f2f2f2';
        }
    }
});
