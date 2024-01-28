let R = Math.floor(Math.random()* 100)
let message =document.getElementById('message')
function guess(number) {
    console.log(number)
    if (number>R) {
        message.innerText = "daha kicik reqem daxil edin!"
    }
    else if (number<R){
        message.innerText = "daha boyuk reqem daxil edin!"
    }
    else {
        message.innerText ="duz tapdiniz!"
    }
}
































































