const mines = document.getElementById('mines');
const reset = document.getElementById('reset');
const count = document.getElementById('counter');
const plus = document.getElementById('plus');

var newNum ; 

if(count.innerHTML === 0) {
    count.style.color = '#fff';
}

plus.addEventListener('click' , function() {
    newNum = Number(count.innerHTML) + 1;
    count.innerHTML = newNum;
    if(Number(count.innerHTML) > 0) {
        count.style.color = 'greenyellow';
    }
});

mines.addEventListener('click' , function() {
    newNum = Number(count.innerHTML) - 1;
    count.innerHTML = newNum;
    if(Number(count.innerHTML) < 0) {
        count.style.color = 'rgb(131, 41, 41)';
    }
});

reset.addEventListener('click' , function() {
    count.innerHTML = 0;
});
