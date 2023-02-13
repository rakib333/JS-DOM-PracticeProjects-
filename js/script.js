function changeRandomColor() {
    const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
    const colorIndex = parseInt(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[colorIndex];
    
}


function makePink() {
    document.body.style.backgroundColor = 'pink';
}


document.getElementById('make-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
})