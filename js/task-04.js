
let counterValue = 0;
const counter = document.querySelector('#counter');
const span = document.querySelector('#value');

counter.addEventListener('click', onSomeClick);

function onSomeClick (e){
    const tar = e.target;
    if (tar.dataset.action === 'increment'){
        increment();
    }
    if (tar.dataset.action === 'decrement'){
        decrement();
    }
}

function decrement (){
    counterValue --;
    span.innerText = `${counterValue}`;
}
function increment (){
    counterValue++;
    span.innerText = `${counterValue}`;
}


