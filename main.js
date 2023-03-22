const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');


const generateTemplate = toDo =>{
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${toDo}</span>
            <i class="fa-solid fa-trash delete"></i>
    </li>
    `;
    list.innerHTML+=html;
}


addForm.addEventListener('submit', e =>{
    e.preventDefault();
    const toDo = addForm.add.value.trim();
    // console.log(toDo);
    if(toDo.length >0){
        generateTemplate(toDo);
        addForm.reset();
    }
})

list.addEventListener('click', e=>{
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})

const filterTodos = term =>{
    // console.log(term);
    // console.log(list.children);
    // console.log(Array.from(list.children));


    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
}

search.addEventListener('keyup', ()=>{
    const term = search.value.trim().toLowerCase();
    // console.log(term);
    filterTodos(term);
})