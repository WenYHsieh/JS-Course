let bg = document.querySelector('body')
function transformation(){
    bg.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
}