const selectorAnimation = document.querySelectorAll('.animation');

const active = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
}
const itemObserve = new IntersectionObserver(active);
for(let i=0; i < selectorAnimation.length; i++){
    itemObserve.observe(selectorAnimation[i]);
}