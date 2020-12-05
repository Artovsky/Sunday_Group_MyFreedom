
function clickFunc(){
    function randomFunc(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    alert(randomFunc(0, 1000))
}