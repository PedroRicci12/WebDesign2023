let lstButtons = document.querySelectorAll('button');
let x = 10;
let nome = 'João';

/*for (let i = 0; i < lstButtons.length; i++) {
    lstButtons[i].addEventListener('click', function() {
        myFunction(stButtons[i].value);
    });
}

function myFunction(content) {
    console.log(content);
}
*/

/*for (let i = 0; i < lstButtons.length; i++) {
    lstButtons[i].addEventListener('click', function() {
        console.log(lstButtons[i].value);
    });
}*/

for (let button of lstButtons) {
    button.addEventListener('click', function() {
        if (button.value == 1) {
            document.querySelector('#img1').src = "imgs/Vert.png";
        }
    });
}