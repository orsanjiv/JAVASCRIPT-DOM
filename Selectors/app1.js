// let mainHeading = document.getElementById('main-heading');
// mainHeading.innerHTML = 'heading 2';
// mainHeading.textContent = 'heading 3';

// let items = document.getElementsByClassName('list-items');
// for(let i = 0; i<items.length;i++){
//     items[i].innerHTML = 'PUBG';
//     items[i].style.backgroundColor = 'yellow';
// }

// let list = document.getElementsByTagName('li');
// list[0].style.color = 'yellow';
// list[1].style.color = 'green';
// for(let i = 0; i<list.length;i++){
//     list[i].innerHTML = 'PUBG';
//     list[i].style.backgroundColor = 'yellow';
// }

let que = document.querySelector('#main-heading');
que.innerHTML = 'query heading';

// let que2 = document.querySelectorAll('li:nth-child(odd)'); orr
let que2 = document.querySelectorAll('.list-items:nth-child(odd)');
let que3 = document.querySelectorAll('.list-items:nth-child(odd)');
for(var i = 0 ; i<que2.length; i++){
    que2[i].style.color = 'yellow';
    que3[i].style.color = 'red';
}
