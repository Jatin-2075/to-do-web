const task_enter = document.querySelector('#task_enter')
const task_done= document.querySelector('#task_done')
const task_remove = document.querySelector('#task_remove')
const ul = document.querySelector('#ul_not')

const enter_button = document.querySelector('#enter_button')
const done_button = document.querySelector('#done_button')
const remove_button = document.querySelector('#remove_button')

enter_button.addEventListener('click', function(){
    const task = task_enter.value;
    const count = ul.children.length + 1;
    if(task.trim() === ""){
        alert("enter a valid task")
    } else{
        const li = document.createElement('li')
        li.innerHTML = `${count} =>  ${task}`; 
        ul.appendChild(li);
    }
})

done_button.addEventListener('click', function(){
    const don = parseInt(task_done.value);
    const done = don - 1;
    const li = document.querySelectorAll('li');
    const input_done = li[done];
    

    input_done.style.textDecoration = "line-through";
    input_done.style.color = "red";

    li.innerHTML = `${input_done}`;
    ul.appendChild(li);
    
})

remove_button.addEventListener('click', function(){
    const inde = parseInt(task_remove.value);
    const index = inde - 1;
    const lidone = ul.querySelectorAll('li');
    lidone[index].remove();
})