

const inp = document.querySelector('#validation-input');




inp.addEventListener('blur', inputHandler);

function inputHandler(event){
   const inpTextLength = event.target.value.length;
   console.log(event.target.dataset.length);
   const isValid = (inpTextLength == event.target.dataset.length);

   if (isValid){
       event.target.classList.remove('invalid');
       event.target.classList.add('valid');
   }
   else{
    event.target.classList.remove('valid');
    event.target.classList.add('invalid');
   }
};






    

