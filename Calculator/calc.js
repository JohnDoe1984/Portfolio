(function(document) {

    var currentOperation = wrap(noop); // last selected operation

    /**
     * The function simply returns the argument that was passed to it
     * @param {Что угодно} operand 
     */
    function noop(operandA, operandB) {
        return operandB;
    }

    /**
     * A function that wraps the function passed to it and returns a new function that can be used
     * @param {Функция которую надо выполнить} operation Must take two arguments
     */
    function wrap(operation) {
        currentOperation && currentOperation.call && currentOperation();
        var result = getResult();
        return function() {
            var input = Number.parseFloat(getInput() || 0);
            setResult(operation(result, input));
            setInput('');
        }
    }

    /**
     * To simplify adding event listeners
     * @param {CSS селектор} selector 
     * @param {Имя события} event 
     * @param {Функция которая обрабатывает событие} listener 
     */
    function addListener(selector, event, listener) {
        var el = document.querySelector(selector);
        el.addEventListener(event, listener);                  
    }

    /**
     *  Here hang all the handlers                          
     */
    function addEventListeners() {
        addListener('#num-1', 'click', handleNumClick);
        addListener('#num-2', 'click', handleNumClick);
        addListener('#num-3', 'click', handleNumClick);
        addListener('#num-4', 'click', handleNumClick);
        addListener('#num-5', 'click', handleNumClick);
        addListener('#num-6', 'click', handleNumClick);
        addListener('#num-7', 'click', handleNumClick);
        addListener('#num-8', 'click', handleNumClick);
        addListener('#num-9', 'click', handleNumClick);
        addListener('#num-0', 'click', handleNumClick);
        addListener('#point', 'click', handleNumClick);

        addListener('#add', 'click', handleOperation);
        addListener('#equal', 'click', handleOperation);
        addListener('#subtract', 'click', handleOperation);
        addListener('#multiply', 'click', handleOperation);
        addListener('#divide', 'click', handleOperation);
        addListener('#back', 'click', handleOperation);
        addListener('#clean', 'click', handleOperation);
        addListener('#radical', 'click', handleOperation);
        addListener('#percent', 'click', handleOperation);
    }

    /**
     * Processing operation
     * When it is necessary to process a new operation, it is necessary to call the previous
     * To do this, wrap the operation in wrap and save it in a variable
     * @param {*} event 
     */
    function handleOperation(event) {
        var operation = event.target.dataset.operation;
        switch(operation) {
            case 'add':
                currentOperation = wrap(add);
                break;
            case 'subtract':
                currentOperation = wrap(subtract);
                break;
            case 'multiply':
                currentOperation = wrap(multiply);
                break;
            case 'divide':
                currentOperation = wrap(divide);
                break;
            case 'equal':
                currentOperation = wrap(equal);
                break;
            case 'clean':
                clean();
                break;
            case 'back':
                back();
                break;
            case 'percent':
                currentOperation = wrap(percent);
                break;
            case 'radical':
                currentOperation = wrap(radical);
                break;              
            default:
                currentOperation = wrap(equal);
            }
        }

    function handleNumClick(event) {
        var num = getInput().toString();
        num = num + event.target.dataset.number;
        setInput(num);
    }

    /**           INPUT - RESULT             **/

    function getInput() {
        return (document.getElementById("input").value); 
    }

    function setInput(input) {
        var element = document.getElementById('input');
        element.value = input;
    }

    function getResult() {
        return Number.parseFloat(Number.parseFloat(document.getElementById('result').innerText || 0).toFixed(2));
    }

    function setResult(result) {
        var element = document.getElementById('result');
        element.innerText = result && result.toFixed ? result.toFixed(2) : result;
    }

    /**         OPERATIONS                **/

    function add(operandA, operandB) {
        return operandA + operandB;
    }

    function subtract(operandA, operandB) {
        return operandA - operandB;
    }

    function multiply(operandA, operandB) {
        return operandA * operandB;
    }

    function divide(operandA, operandB) {
        return operandA / operandB;
    }

    function equal(operandA) {
        return operandA;
    }

    function radical(operandA) {
        return operandA **0.5;
    }

    function percent(operandA, operandB) {
        return operandA / operandB * 100;
    }

    function clean() {
        setResult('');
        setInput('');
    }
    
    function back() {
        var input = getInput();
        if (input) {
            setInput(input.substring(0, input.length-1));
        }   
    }

    addEventListeners();

})(document);