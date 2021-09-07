main();

function main() {
    let topScreen = document.getElementsByClassName("section top")[0];
    let bottomScreen = document.getElementsByClassName("section bottom")[0];

    // composição da equação
    let equation = [];
    let equationForDisplay = [];
    let joinedMembers = '';
    let result = 0;

    // lista dos botões da calculadora
    const buttons = document.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];

        button.addEventListener('click', function (event) {
            // função que executa quando um dos botões for clicado

            // identificar botão clicado
            const element = event.target;

            // tipo de botão. número, operador, símbolo, etc
            const className = element.attributes['class'].value;

            // valor do botão
            const value = element.innerHTML;

            // ultimo elemento da equação
            let lastElement = equation[equation.length - 1];


            // adiciona o valor à equação de formas diferentes dependendo do tipo
            if (className === 'number') {
                if (typeof lastElement === 'undefined')
                    equation.push(`${value}`);
                else if (!isNaN(lastElement)) {
                    equation.pop();
                    equation.push(lastElement += value);
                }
                else if (isNaN(lastElement))
                    equation.push(value);
            }

            if (className === 'operator') {
                equation.push(`${value}`);
            }

            if (className === 'operator power')
            {
                let base = lastElement;
                equation.push()
            }

            if (className === 'erase') {
                if (equation.length === 1) {
                    equation = [0];
                    topScreen.innerHTML = '';
                }
                else
                    equation.pop();
            }

            equationForDisplay = [...equation];
            joinedMembers = equationForDisplay.join(' ');
            bottomScreen.innerHTML = joinedMembers;

            if (className === 'equals') {
                // exibe resultados na tela e no console
                let result = eval(joinedMembers);
                topScreen.innerHTML = joinedMembers;
                bottomScreen.innerHTML = result;
                console.info('RESULTADO', result);

                // Reseta o array da equação e adiciona o resultado
                equation = [result];
            }

            if (className === 'clear') {
                equation.splice(0, equation.length);
                topScreen.innerHTML = '';
                result = 0;
                bottomScreen.innerHTML = result;
            }

            // para debugar
            console.log(`Valor: ${value}| Tipo: ${className}| Equação ${equation}`);
        });
    }
}
