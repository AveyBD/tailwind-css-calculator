// setting C to clear LCD 
function clear() {
    document.getElementById('outputScreen').value = 0;
}


// Del button 
function del() {
    document.getElementById('outputScreen').value = document.getElementById('outputScreen').value.slice(0, -1);
}
// Making button works 
function display(n) {
    document.getElementById('outputScreen').value += n;
}