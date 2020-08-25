///// Get ID obj /////

function getId(id){
    let idElem = document.getElementById(id);
    return idElem;
}


let LB = getId('Left');
let SL = getId('Slide');
let RB = getId('Right');

///// Event function /////
let Move = function(eventObj){
    console.log(eventObj.clientX, eventObj.clientY);
    
    let screenWidth = window.screen.availWidth;
    let blockWidth = screenWidth*0.5;
    let changePercentage = (blockWidth - eventObj.clientX)/blockWidth;
    console.log(changePercentage);
    SL.style.position = 'fixed';
    SL.style.left = blockWidth-(blockWidth*changePercentage) + 'px';
    SL.style.cursor = 'e-resize'
    LB.style.width = blockWidth-(blockWidth*changePercentage) + 'px';
    RB.style.width = screenWidth+(blockWidth*changePercentage) + 'px';
    




}

let Drag = function(){
    SL.style.backgroundColor='grey'
    document.addEventListener('mousemove', Move);

}

let Drop = function(){
    SL.style.backgroundColor='rgb(75, 73, 73)'
    document.removeEventListener('mousemove', Move);

}

///// Add to Tag /////

SL.addEventListener('mousedown', Drag); 
SL.addEventListener('mouseup', Drop);
