let newDiv = document.createElement('div');
newDiv.className = 'insert';
newDiv.innerHTML = "hello new div";
newDiv.style.background='pink';
newDiv.style.fontSize='200px';

// insert the div at the end
// document.body.append(newDiv); 


// other ways to insert

// 1) insert the div at starting of the body
document.body.prepend(newDiv);

// 2) insert before

console.log(document.body);