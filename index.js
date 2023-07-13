const secondli = document.querySelectorAll('.list-group-item:nth-child(2)');
secondli[0].style.color = "green";

// or

// const secondli = document.querySelectorAll(".list-group-item");
// secondli[1].style.color = "green";

const oddLi = document.querySelectorAll('.list-group-item:nth-child(odd)');
for(let i = 0;i<oddLi.length;i++)
{
    oddLi[i].style.backgroundColor = "green";
}