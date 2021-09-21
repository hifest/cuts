const form = document.querySelector('.form');
const input = document.querySelector('.form__input')

input.addEventListener('focus', ()=>{
   form.classList.add('form__active') 
});

input.addEventListener('blur', ()=>{
    form.classList.remove('form__active') 
 });
