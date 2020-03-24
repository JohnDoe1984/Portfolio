function insert(num) {
    document.form.textView.value = document.form.textView.value + num;
    result();
}

function parents () {
    let exp = document.form.textView.value;
    if (exp) {
        document.form.textView.value = `(${exp})`;
    }
    result();
}


function clean() {
    document.form.textView.value = "";
    result();
}

function back() {
   let exp = document.form.textView.value;
   document.form.textView.value = exp.substring(0, exp.length-1);
}

function equal() {
    let exp = document.form.textView.value;
    if(exp) {
        document.form.textView.value = eval(exp);
    }
}

function result() {
    let result = document.querySelector('.result');
    let exp = document.form.textView.value;
    if (exp) {
        result.innerText = `=${eval(exp)}`;
    } else {
        result.innerText = '';
    }
}

// Allow to enter symbols with a physical keyboard
// Add to html>input tag: onkeydown="return checkKey(event.key)" autofocus
function checkKey(key) {
    if (event.key == 'Enter' || event.code == 'NumpadEnter') {
        equal();
        result();
    }
    if (event.code == 'Delete') {
        clean();
        result();
    }
    result();
    return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-' || key == '*' || key == '/' || key == 'ArrowLeft' || key == 'ArrowRight' || key == '.' || key == 'Backspace';
}