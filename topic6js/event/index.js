var sendButton = document.querySelector('#sendButton')
var signInButton = document.querySelector('#signInButton')
var handleText = document.querySelector('#handleText')
var textLength = document.querySelector('#textLength')
sendButton.ondblclick = start;

function start(){
        console.log('Function Click bas verdi')
    }
    
    signInButton.addEventListener("change", function(params){})
    
    
    var fullName = document.querySelector('#fullName')


    fullName.addEventListener('input', function(e){
        var inputTag = e.target;
         //console.log(inputTag);
         handleText.innerHTML = 'Full Name: ' + inputTag.value;
         textLength.innerHTML = inputTag.value.length;
    })


    fullName.addEventListener('keydown', function(e){
       // console.log(e);
    })

fullName.addEventListener('copy', function(e){
    console.log(fullName.value + " bu text kopyalandi");
})    