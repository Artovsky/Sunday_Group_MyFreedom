
function clickFunk() {
    let x = Number(document.getElementById('first').value)
    let y = Number(document.getElementById('second').value)

    function calc(a,b) {
        // return a + b
        let s = document.getElementById('sign').value
        if(s == '+') {
            return a + b
        } else if(s == '-') {
            return a - b
        } else if(s == '*') {
            return a * b
        } else if(s == '/') {
            return a / b
        } else {
            alert('Not a sign')
        }
    }

    alert(calc(x,y))
}





