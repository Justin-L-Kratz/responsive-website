const btn = document.getElementById('btn');
const menu = document.getElementById('modal-nav');

btn.addEventListener('click', ()=>{
    menu.style.display = 'block';
});

function hide(){
    menu.style.display = 'none';
}