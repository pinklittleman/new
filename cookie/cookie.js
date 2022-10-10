let deg = 90
let cookie = document.getElementById('cookie')

canh = innerHeight / 2

cookie.style.top = canh

function cookie() {
    cookie.style.transform = "rotate("+(deg)+"deg)"
    deg += Math.floor((Math.random()* 20) + -10)
}

document.addEventListener("click", cookie)