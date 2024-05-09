var a = Array.from(document.querySelectorAll(`a.page`));
var div = document.querySelectorAll(`.section`);
console.log(a);
for(var rec of a){
    rec.addEventListener(`click`, buttonClick);
}
function buttonClick(e){
    e.preventDefault()                
    for(rec of div){
        rec.classList.add(`hide`)
    }
    div[a.indexOf(e.target)].classList.remove(`hide`);
}