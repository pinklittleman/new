setTimeout(() => {

    let deg = 90
    let cookie2 = document.getElementById('cookie')
    let loading = document.getElementById('loading')

    canh = innerHeight / 2

    cookie2.style.top = canh+"px"

    function cookie() {
        cookie2.style.transform = "rotate("+(deg)+"deg)"
        deg += Math.floor((Math.random()* 20) + -10)
    }

document.addEventListener("click", cookie)

loading.style.visibility = 'hidden'
    
}, 5000);