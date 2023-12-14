document.addEventListener("DOMContentLoaded", function() {
    // Função para mostrar o alerta no Botão 1
    function mostrarAlerta() {
        alert('Ops.........');
    }

    // Função para alterar o texto no campo de texto para o texto do botão clicado (Botão 2 ou Botão 3)
    function alterarTextoBotao(event) {
        const botaoClicado = event.target;
        const textoBotao = botaoClicado.textContent;
        document.querySelector("#campoTexto").innerHTML = textoBotao;
    }

    

    // Adicionando listeners aos botões
    document.querySelector("#botao1").addEventListener("click", mostrarAlerta);
    document.querySelector("#botao2").addEventListener("click", alterarTextoBotao);
    document.querySelector("#botao3").addEventListener("click", alterarTextoBotao);
});

function calcular(operador) {
    // Obter os valores dos campos de input
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    // Verificar se os valores são válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    // Realizar a operação selecionada
    var resultado;
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                alert("Não é possível dividir por zero.");
                return;
            }
            break;
        default:
            alert("Operação inválida.");
            return;
    }

    // Exibir o resultado na página
    document.getElementById("resultado").textContent = resultado;
}