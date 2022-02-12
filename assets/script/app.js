// setting C to clear LCD 


function clear(){
    document.getElementById('outputScreen').value = "";
}

function display(n) {
    document.getElementById('outputScreen').value += n;
}