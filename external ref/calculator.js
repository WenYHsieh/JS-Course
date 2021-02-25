let input = document.querySelector('#input-number');
let inputArr = [];
let currentNumber = [];
let currentOperator;
let positiveSign = true;
let operators = {0:{operator:'+',name:'add'},
                 1:{operator:'-',name:'subtract'},
                 2:{operator:'*',name:'multiply'},
                 3:{operator:'/',name:'divide'}};
let allClear = document.querySelector('#ancillary-btn-clear');
let percentage = document.querySelector('#ancillary-btn-percentage');



function reset(){
    inputArr = [];
    currentNumber = [];
    positiveSign = true;
    input.value = '';
};

allClear.addEventListener('click', reset);

percentage.addEventListener('click', function(){

    input.value = (input.value)*0.01;
});

for (let i=0; i<10; i++){
    document.querySelector('#number-btn-'+i.toString()).addEventListener('click', 
    function(){
        // 檢查是不是連續兩個 0 一起出現在開頭
        // 正數 00, 000, ...; 負數 -00, -000,... -> 非 0 or - 還沒出現 0 最多只能按一次
        inputArr.push(i);
        const found = inputArr.some(r=> [1,2,3,4,5,6,7,8,9].indexOf(r) >= 0)
        if ((found == false) && (inputArr[0] != '-' && inputArr[1] == 0) || (inputArr[0] == '-' && inputArr[2] == 0)){ // 啥都沒，有-, 有0, 都有
            // >0 not exist
            inputArr.pop()
        }
        render();
    });
}


document.querySelector('#ancillary-btn-point').addEventListener('click',
    function(){

        inputArr.push('.');
        if (inputArr[0] == '.' || (inputArr[0] == '-' && inputArr[1] == '.')){
            inputArr.splice(inputArr.indexOf('.'), 0, 0);
        }
        render();
    }
    
)

document.querySelector('#ancillary-btn-sign').addEventListener('click',
    function(){

        positiveSign = !positiveSign; // 按奇數次 -> 負數 -> 前面加負號
        if (positiveSign == false){
            inputArr.unshift('-');
        }
        if (positiveSign == true && inputArr[0] == '-'){ // 按偶數次(沒按) -> 正數 -> 去除前面負號 or 跳過
            inputArr.shift();
        }
        render();
    }
)

for (let key in operators){
    document.querySelector('#operator-btn-'+operators[key].name).addEventListener('click', 
        function(){
            currentOperator = operators[key].operator;
            currentNumber.push(parseFloat(input.value));
            input.value = '';
            inputArr = [];
            
        }
    );
}


document.querySelector('#operator-btn-equal').addEventListener('click', 
    function(){
        currentNumber.push(parseFloat(input.value));
        input.value = eval(currentNumber.join(currentOperator)) // eval(string -> 'operation')-> output of operation
        currentNumber = [];
        currentNumber.push(input.value);

    }
);

//　更新顯示數值
function render(){
    input.value = inputArr.join(''); // 運算的時候再轉float
    
}

