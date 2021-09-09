main();

function main() {
    
    // composição da equação
    const equation = [];

    // parte superior e inferior da tela de saída
    let top = document.getElementsByClassName('section top')[0];
    let bottom = document.getElementsByClassName('section bottom')[0];
    // lista dos botões da calculadora
    const buttons = document.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        let event = button.event;

        button.addEventListener('click', onButtonClick);
    }

    // função que executa quando um dos botões for clicado
    function onButtonClick(event) {
        // identificar botão clicado
        const element = event.target;

        // tipo de botão: número, operador, símbolo, etc
        const className = element.attributes['class'].value;

        addValuesToEquation(element, className, equation);

        let equationString = formatEquation(equation);

        if (className === 'erase') {
            if (isEquationResult(equation))
                displayEquationOnTop('');
            else
                eraseLastElement(equation);
        }

        updateBottomHalf(equationString);

        if (className === 'equals') {
            let result = eval(equationString);
            if (!Number.isInteger(result))
                result = Number(result).toFixed(2);

            displayEquationOnTop(equationString);
            updateBottomHalf(result);
            equation = [result];
            console.info('RESULTADO', result);
        }
    
        if (className === 'clear') {
            equation.splice(0, equation.length);
            displayEquationOnTop(equation);
            updateBottomHalf(0);
        }

        console.log(`|Equação ${equation}`);
    }

    // adiciona o valor à equação de formas diferentes, dependendo do tipo
    function addValuesToEquation(element, className, equation) {
        const value = element.innerHTML;
        let lastElement = equation[equation.length - 1];

        if (className === 'number') {
            if (typeof lastElement === 'undefined')
                equation.push(`${value}`);
            else if (!isNaN(lastElement)) {
                const lastElementIndex = equation.indexOf(lastElement);
                equation[lastElementIndex] = lastElement += value;
            }
            else if (isNaN(lastElement))
                equation.push(value);
        }

        if (className === 'operator') {
            equation.push(`${value}`);
        }

        // para debugar
        console.log(`|Valor: ${value}| Tipo: ${className}`);
    }

    function formatEquation(currentEquation) {
        let toBeDisplayed = [...currentEquation];
        if (isEquationResult(toBeDisplayed))
            return toBeDisplayed[0];
        if (toBeDisplayed[0] === 0)
            return '';

        return toBeDisplayed.join(' ');
    }

    function eraseLastElement(currentEquation) {
        currentEquation.pop();
    }

    function displayEquationOnTop(equationString) {
        top.innerHTML = equationString;
    }

    function updateBottomHalf(joinedElements) {
        bottom.innerHTML = joinedElements;
    }

    function isEquationResult(currentEquation) {
        return (currentEquation.length === 1 && currentEquation[0] !== 0);
    }
}