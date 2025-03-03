let display = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');

let buttonArray = Array.from(buttons);
let string ='';

buttonArray.forEach(btn => {

    btn.addEventListener ('click',(e)=>{
        string += e.target.innerHTML;
        display.value = string;


    });

});


