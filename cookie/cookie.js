deg = 90

function cookie() {
    let cookie = document.getElementById('cookie')
    cookie.style.transform = "rotate("+(deg)+"deg)"
    deg += 90
}

document.addEventListener("click", cookie)