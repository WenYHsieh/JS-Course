let data = [];
let todos = document.querySelector('#todos');

function render(){
    let ul = document.querySelector('ul');
    
    ul.innerHTML='';
    data.forEach(function(text, index){
        let li = document.createElement('li');
        let removeBtn = document.createElement("button");
        removeBtn.innerHTML = 'X';
        removeBtn.className = 'remove-btn';
        removeBtn.addEventListener('click', function(){data.splice(index, 1); render();})
        li.innerHTML = text;
        ul.append(li);
        li.append(removeBtn);
 
    });
};

// function init(){
//     data = ['one','two','one','two','one','two',
//     'one','two','one','two','one','two','one','two',
//     'one','two','one','two','one','two','one','two'];
//     render();
// };

function add(){
    if (todos.value != ''){
        data.push(todos.value);
        todos.value='';
        render();
    }
    
};


function clearAll(){
    data = [];
    todos.value='';
    render();
};
// init();
