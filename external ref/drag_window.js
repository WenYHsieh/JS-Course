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
    console.log(screenWidth)
    let blockWidth = screenWidth*0.5;
    let slideDistance = blockWidth - eventObj.clientX;
    SL.style.position = 'fixed';
    SL.style.left = blockWidth-slideDistance + 'px';
    SL.style.cursor = 'e-resize'
    //LB.style.width = blockWidth-slideDistance + 'px';
    //RB.style.width = blockWidth+slideDistance + 'px';


}

let Drag = function(){
    document.addEventListener('mousemove', Move);

}

let Drop = function(){
    document.removeEventListener('mousemove', Move);

}

///// Add to Tag /////

SL.addEventListener('mousedown', Drag); 
SL.addEventListener('mouseup', Drop);
