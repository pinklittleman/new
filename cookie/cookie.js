deg = 90

function cookie() {
    let cookie = document.getElementById('cookie')
    cookie.style.transform = "rotate("+(deg)+"deg)"
    deg += Math.floor((Math.random()* 20) + -10)
}

document.addEventListener("click", cookie)