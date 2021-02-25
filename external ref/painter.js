// Canvas DOM 元素 
let cvs=document.querySelector('#canvas');
// 取得 Canvas 對應的 Context 物件
let ctx=cvs.getContext('2d');
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

let colorPicker = document.querySelector('#color-picker');
let penSizeSlider = document.querySelector('#pen-size-slider');
let saveImg = document.querySelector('#save');
let eraser = document.querySelector('#eraser');
let drawMode = true;
let clearAll = document.querySelector('#clear-all');
let saveFileName = document.querySelector('#save-filename');
//起始點座標
let x1= 0
let y1= 0

// 終點座標
let x2= 0
let y2= 0

// 宣告一個 hasTouchEvent 變數，來檢查是否有 touch 的事件存在
// const hasTouchEvent = 'ontouchstart' in window ? true : false

// // 透過上方的 hasTouchEvent 來決定要監聽的是 mouse 還是 touch 的事件
// const downEvent = hasTouchEvent ? 'ontouchstart' : 'mousedown'
// const moveEvent = hasTouchEvent ? 'ontouchmove' : 'mousemove'
// const upEvent = hasTouchEvent ? 'touchend' : 'mouseup'

// 宣告 isMouseActive 為滑鼠點擊的狀態，因為我們需要滑鼠在 mousedown 的狀態時，才會監聽 mousemove 的狀態
let isMouseActive = false

// cvs.addEventListener("mousedown", function(e){
//   isMouseActive = true
// })

cvs.addEventListener("mousedown", function(e){
  isMouseActive = true  
  // 取得起點座標
  x1 = e.offsetX
  y1 = e.offsetY
  
  ctx.lineWidth = penSizeSlider.value
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
})

cvs.addEventListener("mousemove", function(e){ // 當滑鼠移動 & mouse active (mosedown)
      if (isMouseActive&drawMode){
      // 取得終點座標
      x2 = e.offsetX
      y2 = e.offsetY
      
      // 開始繪圖
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.strokeStyle = colorPicker.value;
      ctx.stroke();
      
      // 更新起始點座標
      x1 = x2
      y1 = y2
      }else if (isMouseActive&!drawMode){
        x2 = e.offsetX
        y2 = e.offsetY
        
        // 開始繪圖
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
        
        // 更新起始點座標
        x1 = x2
        y1 = y2
      }else{
        return;
      };
});

cvs.addEventListener("mouseup", function(e){
  isMouseActive = false
});

saveImg.addEventListener('click', function(){
    let url = canvas.toDataURL();
    //利用toDataURL() 把canvas轉成data:image
    this.href = url;
    this.download = saveFileName.value;
});

eraser.addEventListener('click', function(){
  drawMode = false;
});

clearAll.addEventListener('click', function(){
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
})

colorPicker.addEventListener('click', function(){
  drawMode = true;
});