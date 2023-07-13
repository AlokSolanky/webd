

const li_space = document.querySelector(".list-group");

li_space.addEventListener('click',(e)=>
{
    if(e.target.classList.contains('delete'))
    {
        li_space.removeChild(e.target.parentElement);
    }
})


for(let i = 0;i<li_space.children.length;i++)
{
    let del_button = document.createElement('button');
    del_button.setAttribute(
      "class",
      "btn btn-primary btn-sm float-right edit"
    );
    del_button.setAttribute('title','edit your task');

    del_button.appendChild(document.createTextNode('+'))
    li_space.children[i].appendChild(del_button);

}