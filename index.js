main();

function main() {
    let topScreen = document.getElementsByClassName("section top");
    let bottomScreen = document.getElementsByClassName("section bottom");

    // composição da equação
    let equation = '';

    // lista dos botões da calculadora
    const buttons = document.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];

        button.addEventListener('click', function (event) {
            // função que executa quando um dos botões for clicado

            // identificar botão clicado
            const element = event.target;

            // tipo de botão. número, operador, símbolo, etc
            const className = element.attributes[0].value;

            // valor do botão
            const value = element.innerHTML;

            // adiciona o valor à equação de formas diferentes dependendo do tipo
            if (className === 'number')
                equation += value;
            else if (className === 'operator')
                equation += ` ${value} `;
            else if (className === 'equals') {

                // exibe resultados na tela e no console
                topScreen[0].innerHTML = equation;
                bottomScreen[0].innerHTML = eval(equation);
                console.warn('RESULTADO', eval(equation));
            }

            // para debugar
            console.log(`Valor: ${value}|Tipo: ${className}|Equação ${equation}`);
        });
    }
}
