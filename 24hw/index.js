const input = document.getElementById('toDoInput');
const ul = document.createElement('ul');
const p = document.createElement('p');

function writeList() {
    var toDoValue = document.getElementById('toDoInput').value;
    const li = document.createElement('li');
    const doneButton = document.createElement('button');
    doneButton.innerHTML = ('Done');
    document.querySelector('.toDo').appendChild(ul);
    li.innerText = (toDoValue);
    li.classList.add('isntDone');
    ul.appendChild(li);
    li.appendChild(doneButton);

    function imSoMad() {
        const listLenght = document.querySelectorAll('.isntDone').length;
        p.innerHTML = (listLenght + ' item(s) left');
        document.querySelector('.toDo').appendChild(p);
    }

    function didIt() {
        li.style = 'text-decoration: line-through';
        li.classList.remove('isntDone');
        li.classList.add('isDone');
        imSoMad();
    }
    doneButton.addEventListener('click', didIt);
    imSoMad();
}


input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        writeList();
    }
})
