// Bullet system
ga.lib.BulletSystem=class{ 
    // 定義每回合子彈整體的變化
    constructor(){ // 子彈準備讓她隨便跑出來，沒有固定座標點
        this.bullets=[];
    }
    update(){
        if (ga.game.cycle%8 === 0){
            this.bullets.push(new ga.lib.Bullet());
        }
        // 每一回合塞一顆子彈
        
        for (let i=0; i<this.bullets.length; i++){
            let dead = this.bullets[i].update();
            if (dead){
                this.bullets.splice(i, 1);
                i--; 
            }
        }
    }
    draw(){
        for (let i=0; i<this.bullets.length; i++){
            this.bullets[i].draw();
        }
    }
};

ga.lib.Bullet=class{
    // 定義每回合子彈的參數改變
    constructor(){
        let seed=Math.random();
        if (seed<0.25){ // 左到右
            this.x=0;
            this.y=Math.random()*ga.ctx.canvas.height;
            this.vx=Math.random()*2+0.5; // 0.5~2.5
            this.vy=Math.random()*1-0.5; // -0.5~0.5
            
        }else if (seed<0.5){ // 右到左
            this.x=ga.ctx.canvas.width;
            this.y=Math.random()*ga.ctx.canvas.height;
            this.vx=-1*Math.random()*2+0.5; // -0.5~-2.5
            this.vy=Math.random()*1-0.5; // -0.5~0.5

        }else if (seed<0.75){ // 上到下
            this.x=Math.random()*ga.ctx.canvas.width;
            this.y=0
            this.vx=Math.random()*1-0.5; 
            this.vy=Math.random()*2+0.5; 
        }else{ // 下到上
            this.x=Math.random()*ga.ctx.canvas.width;
            this.y=ga.ctx.canvas.height;
            this.vx=Math.random()*1-0.5; 
            this.vy=-1*Math.random()*2+0.5; 
        }
        this.size=1.5;
    }
    update(){
        if (parseInt(ga.game.cycle/8) <= 100){
            this.x+=this.vx;
            this.y+=this.vy;
        }else{
            this.vx+=Math.random()*0.02-0.01;
            this.vy+=Math.random()*0.02-0.01;
            this.x+=this.vx;
            this.y+=this.vy;
        }

        return this.x<0 || this.x>ga.ctx.canvas.width ||
                this.y<0 ||this.y>ga.ctx.canvas.height;
    }
    draw(){
        ga.ctx.save();
        ga.ctx.fillStyle='white';
        ga.ctx.beginPath();
        ga.ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        ga.ctx.fill();
        ga.ctx.restore();
    }
}




// 定義在物件底下的class，首字要大寫
ga.lib.Plane=class{
    constructor(){
        // 一開始擺在畫面的正中間
        this.x=ga.ctx.canvas.width/2;
        this.y=ga.ctx.canvas.height/2;
        this.size=20;
        this.speed = 3;
    }

    update(){
        let key = ga.game.key;
        let speed = this.speed;        

        if(key.space){
            speed*=2; // 變成兩倍
        }
        if(key.left){
            this.x -= speed;
        }
        if(key.top){
            this.y -= speed;
        }
        if(key.right){
            this.x += speed;
        }
        if(key.bottom){
            this.y += speed;
        }

        if (this.x>cvs.width){
            this.x = cvs.width
        }
        if (this.x<0){
            this.x = 0
        }
        if (this.y>cvs.height){
            this.y = cvs.height
        }
        if (this.y<0){
            this.y = 0
        }

        return false;
    }

    draw(){
        ga.ctx.save(); // 儲存 "當前" 的canvas設定: 如透明度，筆刷...
        ga.ctx.drawImage(
            ga.res.imgs.plane,
            this.x-this.size/2,
            this.y-this.size/2,
            this.size,
            this.size
        );
        if (ga.game.key.space){ // 按空白建開啟後燃氣
            ga.ctx.drawImage(
            ga.res.imgs.explosion,
            this.x-4,
            this.y+10, 
            12, 12

        )
        }

        ga.ctx.restore(); // 取回上面儲存的設定 -> 如此才能把每一次的繪圖獨立出來不互相影響
    }
}