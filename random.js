document.getElementById('generate').onclick = function(e){
    e.preventDefault();
    let x = Math.random();
    document.getElementById('random-label').innerHTML = x;
}