const div = document.createElement('div');
const text = document.createTextNode('Hello');

const item = document.getElementById('items');

div.appendChild(text);

const main = document.getElementById('main');

main.insertBefore(div,item);


const li0 = document.createElement("li");
const text1 = document.createTextNode("Hello");
li0.appendChild(text1);
li0.className = "list-group-item";
const li1 = document.querySelector('.list-group-item:first-child');
item.insertBefore(li0,li1);