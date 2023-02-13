document.getElementById('update-text').addEventListener('click', function () {
    const oldText = document.getElementById('header-update');
    oldText.style.backgroundColor = 'red';
    oldText.innerText = 'The header is updated';
})


// show input value
document.getElementById('updated-name').addEventListener('click', function () {
    const updateH2 = document.getElementById('show-name');
    const getName = document.getElementById('get-name');
    const inputValue = getName.value;
    
    updateH2.innerText =`Your name is: ${inputValue}`;

    getName.value = '';


})