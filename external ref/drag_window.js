///// Get ID obj /////

function getId(id){
    let idElem = document.getElementById(id);
    return idElem;
}


let LB = getId('Left');
let SL = getId('Slide');
let RB = getId('Right');
let MB = getId('Main');

///// Event function /////
let Move = function(eventObj){
    console.log(eventObj.clientX, eventObj.clientY);
    // 螢幕寬度
    //let screenWidth = window.screen.availWidth;
    // 左右block寬度
    //let blockWidth = screenWidth*0.5;
    // 移動改變的距離
    //let changeDistance = blockWidth - eventObj.clientX;
    let changeDistance = (500 - eventObj.clientX);
    let clientXPosition = eventObj.clientX;
    console.log(changeDistance);
    /*
    console.log(clientXPosition);
    if (clientXPosition >= 998){
        clientXPosition = 998;
    }//一個點(設定不能拉過去的座標X)，就把object.clientX設定為那個座標X
    */
    SL.style.position = 'fixed';
    SL.style.left = 500-changeDistance + 'px';
    SL.style.cursor = 'e-resize'
    LB.style.width = (500-changeDistance) + 'px';
    RB.style.width = (500+changeDistance) + 'px';


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
