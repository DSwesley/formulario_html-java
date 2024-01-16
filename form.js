
// Na atividade prática deste módulo, você irá praticar todos os conceitos aprendidos. Se tiver dúvidas, retome o passo a passo nas aulas.
// 1) Crie um formulário HTML que possua dois campos numéricos:
// campo A
// campo B
// 2) Insira um botão para submeter o formulário.
// 3) Crie uma validação no JavaScript, na qual o formulário será válido caso o número B seja maior que o número A.
// 4) Exiba uma mensagem positiva para o usuário quando o formulário for válido e uma mensagem negativa quando for inválido.
// 5) Suba no Github no repositório do curso em uma branch chamada exercicio_html_js.




const form = document.getElementById('form');              // declarei a variavel para o formulario
const campoA = document.getElementById('campo-a')          // declarei a variavel para o campo A
const campoB = document.getElementById('campo-b')          // declarei a variavel para o campo B
const errorA = document.querySelector('.error-a');         // declarei a variavel para a vizualizacao do erro campo A
const errorB = document.querySelector('.error-b');         // declarei a variavel para a vizualizacao do erro campo B
const sucesso = document.querySelector('.permissao');      // declarei a variavel para enviar em caso de sucesso

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const valorA = parseInt(campoA.value);                 // declarei a variavel 'valorA' apenas receba numero inteiro, apesar de ser type-number no html
    const valorB = parseInt(campoB.value);                 // declarei a variavel 'valorB' apenas receba numero inteiro, apesar de ser type-number no html

    if (valorB < valorA) {
                                                           // caso A for maior que B ->
        errorB.style.display = 'block';
        sucesso.textContent = 'O valor B precisa ser maior que o valor A';
    } 
    else if (valorB === valorA) {
                                                           // para o valor nao ser igual ->
        errorB.style.display = 'block';
        sucesso.style.display = 'block';
        sucesso.textContent = 'Digite um valor diferente';
    }else {
                                                           // Em caso de sucesso ->
        errorB.style.display = 'none';
        sucesso.textContent = 'Parabens!';
        campoA.value = '';                                 // para limpar o campo A ao enviar
        campoB.value = '';                                 // para limpar o campo B ao enviar

    }
});