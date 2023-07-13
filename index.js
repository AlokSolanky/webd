const li = document.getElementsByClassName("list-group-item");

const li1 = document.getElementsByTagName("li");

for(let i = 0;i<li.length;i++)
{
    
    li[i].style.backgroundColor = "green";
}

for(let i = 0;i<li1.length;i++)
{
    li1[i].style.color = "red";
}