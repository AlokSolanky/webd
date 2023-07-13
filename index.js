const form = document.forms['addForm'];
const li_space = document.querySelector(".list-group");
form.addEventListener('submit',(e)=>
{
    e.preventDefault();

    let item_val = document.getElementById('item').value;
    let desc_val = document.getElementById('description').value;

    const newLi = document.createElement('li');
    newLi.setAttribute('class','list-group-item');
    const newText = document.createTextNode(`${item_val} : ${desc_val}`);
    newLi.appendChild(newText);

    let del_button = document.createElement("button");
    del_button.setAttribute("class", "btn btn-danger btn-sm float-right delete");
    del_button.setAttribute("title", "Delete your task");

    del_button.appendChild(document.createTextNode("X"));
    newLi.appendChild(del_button);

    let edit_button = document.createElement("button");
    edit_button.setAttribute(
      "class",
      "btn btn-primary btn-sm float-right edit"
    );
    edit_button.setAttribute("title", "Edit your task");

    edit_button.appendChild(document.createTextNode("+"));
    newLi.appendChild(edit_button);


    li_space.appendChild(newLi);


})


  




li_space.addEventListener('click',(e)=>
{
    if(e.target.classList.contains('delete'))
    {
        li_space.removeChild(e.target.parentElement);
    }
})



const filter_btn = document.getElementById('filter');

filter_btn.addEventListener('keyup',(e)=>{
    let to_search = e.target.value.toLowerCase();
    let lis = li_space.getElementsByTagName('li');

    Array.from(lis).forEach((item)=>
    {
        
        if(item.firstChild.textContent.toLowerCase().includes(to_search))
        {
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }

    })
})