const form = document.querySelector('.form');
const input = document.querySelector('.form__input')

input.addEventListener('focus', ()=>{
   form.classList.add('form__active') 
});

input.addEventListener('blur', ()=>{
    form.classList.remove('form__active') 
 });
const burger = document.querySelector('.burger-bar')


burger.addEventListener('click',()=>{
   document.querySelector('.burger').classList.toggle('active')
});

