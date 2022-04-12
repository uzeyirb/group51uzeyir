console.log(window);

window.onmousemove = function(e){
    console.log(e);
}

document.querySelector('#refreshButton').addEventListener('click', function() {
    window.location.reload()
    console.log("refresh oldu");
})