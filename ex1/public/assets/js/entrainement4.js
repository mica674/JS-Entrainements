        // // Exercice 1
        // let inputForm = document.querySelectorAll('input');
        // let button = inputForm[2];

        // button.addEventListener('click', (event)=>{
        //     event.preventDefault();
        //     if (inputForm[0].value === inputForm[1].value) {
        //         inputForm.forEach((value)=>{
        //             value.classList.add('borderGreen');
        //         })
        //     alert('Good job !');
        //     } else {
        //         inputForm.forEach((value)=>{
        //             value.classList.add('borderRed');
        //     })
        //     alert('T\'es une grosse merde !');
        // }
        // })

// // Exercice 2
// let regexText = new RegExp('^[a-zA-Zàäéèëüû]+$');
// let regexEmail = new RegExp('^[a-zA-Z0-9\._\-]+@[a-zA-Z0-9_\-]+\.[a-zA-Z]{2,5}$');
// let regexAge = new RegExp('^[0-9]{1,3}$');

// let inputFirstname = document.getElementById('firstname');
// let inputLastname = document.getElementById('lastname');
// let inputEmail = document.getElementById('email');
// let inputAge = document.getElementById('age');

// let smallFirstname = document.getElementById('smallFirstname');
// let smallLastname = document.getElementById('smallLastname');
// let smallEmail = document.getElementById('smallEmail');
// let smallAge = document.getElementById('smallAge');

// inputFirstname.addEventListener('change', ()=>{

//     smallFirstname.classList.add('d-none');
//     inputFirstname.classList.remove('borderRed');
//     inputFirstname.classList.remove('borderGreen');

//     if(regexText.test(inputFirstname.value) == false){
//         smallFirstname.classList.remove('d-none');
//         inputFirstname.classList.add('borderRed');
//     }
//     else if (regexText.test(inputFirstname.value) == true){
//         inputFirstname.classList.add('borderGreen');
//     }
// })
// inputLastname.addEventListener('change', ()=>{

//     smallLastname.classList.add('d-none');

//     if(regexText.test(inputLastname.value) == false){
//         smallLastname.classList.remove('d-none');
//     }
// })
// inputEmail.addEventListener('change', ()=>{

//     smallEmail.classList.add('d-none');

//     if(regexEmail.test(inputEmail.value) == false){
//         smallEmail.classList.remove('d-none');
//     }
// })
// inputAge.addEventListener('change', ()=>{

//     smallAge.classList.add('d-none');

//     if(regexAge.test(inputAge.value) == false){
//         smallAge.classList.remove('d-none');
//     }
// })

// // Exercice 3



// Exercice 4
let values = document.querySelectorAll('input');
let appreciateAvg = document.getElementById('appreciateAvg');
let appreciate = document.getElementById('appreciate')
let btn = document.getElementById('submit');
let average = 0;

function fnAvg(values) {
    let sum = 0;
    let avg = 0;
    values.forEach(val=>{
        sum += Number(val.valueAsNumber);
    });
    avg = sum/values.length;
    return avg;
}

// console.log('Moyenne = ' + avg);

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    average = fnAvg(values);
    appreciateAvg.innerHTML = 'Moyenne = ' + average;
    if (average < 8) {
        appreciate.innerHTML = 'T\'es nul retourne à l\'école !'
    } else if (average < 12) {
        appreciate.innerHTML = 'Bof peux mieux faire'
    } else if (average < 20) {
        appreciate.innerHTML = 'Presque bien'
    } else if (average = 20) {
        appreciate.innerHTML = 'Tricheur'
    }
    console.log(appreciateAvg.innerHTML);
})