setTimeout(() => {

    let deg = 90
    let cookie2 = document.getElementById('cookie')

    canh = innerHeight / 2

    cookie2.style.top = canh

    function cookie() {
        cookie2.style.transform = "rotate("+(deg)+"deg)"
        deg += Math.floor((Math.random()* 20) + -10)
    }

document.addEventListener("click", cookie)
    
}, 1000);