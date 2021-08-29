main();

function main() {
    let equation = '';
    const buttons = document.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];

        button.addEventListener('click', function (event) {
            const element = event.target;
            const className = element.attributes[0].value;
            const value = element.innerHTML;

            if (className === 'number')
                equation += value;
            else if (className === 'operator')
                equation += ` ${value} `;
            else if (className === 'equals')
                console.warn('RESULTADO', eval(equation));

            console.log(`Valor: ${value}|Tipo: ${className}|Equação ${equation}`);
        });
    }
}
