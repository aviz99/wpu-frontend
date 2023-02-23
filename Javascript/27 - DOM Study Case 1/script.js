const buttonColor = document.getElementById('bChangeColor');
buttonColor.addEventListener('click', function() {
    // document.body.style.backgroundColor = 'salmon';
    // document.body.setAttribute('class', 'salmon-red');
    document.body.classList.toggle('salmon-red');
});

const bRandomColor = document.createElement('button');
const textButton = document.createTextNode('Random Color');
bRandomColor.appendChild(textButton);
bRandomColor.setAttribute('type', 'button');
buttonColor.after(bRandomColor);

bRandomColor.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

const sRed = document.querySelector('input[name=sRed]');
const sGreen = document.querySelector('input[name=sGreen]');
const sBlue = document.querySelector('input[name=sBlue]');

sRed.addEventListener('input', function() {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value; 
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sGreen.addEventListener('input', function() {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value; 
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sBlue.addEventListener('input', function() {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value; 
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


document.body.addEventListener('mousemove', function(event) {
    // posisi mouse
    // console.log(event.clientX);
    // ukuran browser
    // console.log(window.innerWidth);
    const posX = Math.round(( event.clientX / window.innerWidth ) * 255);
    const posY = Math.round(( event.clientY / window.innerHeight ) * 255);
    document.body.style.backgroundColor = 'rgb(' + posX + ',' + posY + ',100)';
});