
const inp = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

inp.addEventListener('input', sizeControl);

function sizeControl(e){
    const size = event.target.value;

    span.style.fontSize = size + 'px';
}