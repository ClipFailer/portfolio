let display = document.querySelector('.display');

let buttons = Array.from(document.querySelectorAll('.button'));

buttons.forEach(button => {
    button.addEventListener('click', e => {
        switch(e.target.innerText) {

            case 'AC':
                display.innerText = '0';
                break;

            case '=':
                try {
                    let result = eval(display.innerText).toString();
                    if (result.indexOf('.') > -1) {
                        display.innerText = cutNum(result);
                    } else {
                        display.innerText = result;
                    }
                     
                    
                } catch(e) {
                    display.innerText = e;
                }
                break;

            case '%':
                let passedText = display.innerText + '/100';
                display.innerText = eval(passedText);
                break;

            case '+/-':
                display.innerText = -display.innerText;
                break;

            default:
                if (display.innerText === '0' && e.target.innerText != ".") {
                    display.innerText = e.target.innerText;
                } else {
                    display.innerText += e.target.innerText;
                }
                
        }
    });

    
})

function cutNum(num) { 
    let decimal = num.split('.');
    if (decimal[1].length > 4) {
        num = decimal[0] + '.' + decimal[1].slice(0, 4);
        return num;
    } 
    return display.innerText;
}