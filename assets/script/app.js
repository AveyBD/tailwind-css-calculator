// setting C to clear LCD 
function clr() {
    document.getElementById('outputScreen').value = '';
}

// Del button 
function del() {
    document.getElementById('outputScreen').value = document.getElementById('outputScreen').value.slice(0, -1);
}
// Making button works 
function display(n) {
    document.getElementById('outputScreen').value += n;
}

// making the calculaton 
function calc(){
    document.getElementById('outputScreen').value = eval(document.getElementById('outputScreen').value);
}