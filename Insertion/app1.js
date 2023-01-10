let newDiv = document.createElement('div');
newDiv.className = 'insert';
newDiv.innerHTML = "hello new div";
newDiv.style.background='pink';
newDiv.style.fontSize='200px';

// document.body.append(newDiv);
// other ways to insert
document.body.prepend(newDiv);
console.log(document.body);