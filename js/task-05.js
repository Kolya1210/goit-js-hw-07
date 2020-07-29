

const noInputValue = 'незнакомец';
const inp = document.querySelector('#name-input');
const out = document.querySelector('#name-output');

inp.addEventListener('input', onInput);

function onInput(e){
    out.textContent = inp.value === ''?noInputValue:inp.value;
}
