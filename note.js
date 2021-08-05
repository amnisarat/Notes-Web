const textarea = document.querySelector('.textarea');
const color = document.querySelector('#color');
const number = document.querySelector('#number');
const notes = document.querySelector('.notes');
const btn = document.querySelector('.btn');

btn.addEventListener("click", (e) => {

    if (textarea.value == "") {
        alert('Please Enter a note.');
        box.remove();
    }

    const box = document.createElement('div');
    const txtBox = document.createElement('label');
    const btnDelete = document.createElement('button')

    box.className = 'box';
    txtBox.className = 'txtBox';
    btnDelete.className = 'btnDelete';

    notes.appendChild(box);

    txtBox.innerHTML = textarea.value;
    txtBox.style.color = color.value;
    txtBox.style.fontSize = number.value + 'px';
    box.appendChild(txtBox);

    btnDelete.innerHTML = 'X';
    box.appendChild(btnDelete);
    btnDelete.addEventListener("click", () => {
        box.remove();
    });
});