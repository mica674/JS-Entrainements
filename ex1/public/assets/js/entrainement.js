// Exercice 1
let inputForm = document.querySelectorAll('input');
let button = inputForm[2];

button.addEventListener('click', (event)=>{
    event.preventDefault();
    
    inputForm[0].classList.remove('borderGreen', 'borderRed');
    inputForm[1].classList.remove('borderGreen', 'borderRed');
    
    inputForm.forEach((value)=>{
        if (inputForm[0].value === inputForm[1].value) {
            value.classList.add('borderGreen');
        }
        else {
            value.classList.add('borderRed');
        }
    })
})