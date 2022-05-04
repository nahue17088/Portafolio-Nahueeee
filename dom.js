let count = 0;

document.getElementById('btn-increment').onclick = function(){
    count+=1;
    document.getElementById('countLabel').innerHTML = count;
}


document.getElementById('btn-reset').onclick = function(){
    count=0;
    document.getElementById('countLabel').innerHTML = count;
}

document.getElementById('btn-decrement').onclick = function(){
    count-=1;
    document.getElementById('countLabel').innerHTML = count;
}
