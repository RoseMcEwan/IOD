let selectedOperation = '';

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');

const result = document.getElementById('result');
const selectedOperationText =
    document.getElementById('selectedOperation');

document
    .getElementById('add')
    .addEventListener('click', () => {
        selectedOperation = '+';
        selectedOperationText.textContent =
            'Selected operation: +';
    });

document
    .getElementById('subtract')
    .addEventListener('click', () => {
        selectedOperation = '-';
        selectedOperationText.textContent =
            'Selected operation: -';
    });

document
    .getElementById('multiply')
    .addEventListener('click', () => {
        selectedOperation = '*';
        selectedOperationText.textContent =
            'Selected operation: *';
    });

document
    .getElementById('divide')
    .addEventListener('click', () => {
        selectedOperation = '/';
        selectedOperationText.textContent =
            'Selected operation: /';
    });

document
    .getElementById('equals')
    .addEventListener('click', () => {

        const num1 = Number(num1Input.value);
        const num2 = Number(num2Input.value);

        let answer;

        switch (selectedOperation) {

            case '+':
                answer = num1 + num2;
                break;

            case '-':
                answer = num1 - num2;
                break;

            case '*':
                answer = num1 * num2;
                break;

            case '/':
                answer = num1 / num2;
                break;

            default:
                result.textContent =
                    'Please select an operation';
                return;
        }

        result.textContent = `Result: ${answer}`;
    });

document
    .getElementById('clear')
    .addEventListener('click', () => {

        num1Input.value = '';
        num2Input.value = '';

        selectedOperation = '';

        selectedOperationText.textContent =
            'Selected operation: None';

        result.textContent = 'Result:';
    });