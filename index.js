const li = document.getElementsByClassName("list-group-item");

for(let i = 0;i<li.length;i++)
{
    li[i].style.fontWeight = "bold";
}
li[2].style.backgroundColor = "green";