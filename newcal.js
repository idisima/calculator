let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
console.log(buttons)

buttons.forEach( button => {
    button.addEventListener('click', (a) => {
        switch(a.target.innerText){
            case 'CLR':
                display.innerText = '';
                break;
                case '=':
                    try{
                        display.innerText = eval (display.innerText);
                        console.log(display.innerText)
                    } catch{
                        display.innerText = "Error"
                    }
                    break;  
                        default:display.innerText += a.target.innerText;
        }
    })
})