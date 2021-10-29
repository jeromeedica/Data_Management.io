alert("Welcome to Jerome's Website");

let btn = document.getElementById('add');

btn.addEventListener('click', () =>{
    var input = document.getElementById('inputText').value,
    container = document.querySelector('.list-container'),
    liNode = document.createElement('li'),
    txtNode = document.createTextNode(input);

    liNode.appendChild(txtNode);
    liNode.style.marginTop = '3px';
    container.appendChild(liNode);

    if (input !== ''){
        console.log(true)
        input = document.getElementById('inputText').value ='';
        liNode.style.color ='rgb(83, 78, 78);'
        liNode.style.textTransform = 'capitalize'
    }else {
       console.log(false)
       liNode.innerText = 'empty!';
       liNode.style.color = 'white';
       liNode.style.background = 'rgb(255, 43, 43)'; 
}});


let btn2 = document.getElementById('delete');

btn2.addEventListener('click', () =>{
    let container = document.querySelector('.list-container');
    container.removeChild(container.lastElementChild);
    
})

let btn3 = document.getElementById('shutdown');

btn3.addEventListener('click', () =>{
    const body = document.body.innerHTML = '';
    alert('bye!')
   
})

