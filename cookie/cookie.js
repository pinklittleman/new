let cookies = 0


setTimeout(() => {

    let deg = 90
    let cookie2 = document.getElementById('cookie')
    let loading = document.getElementById('loading')
    let cookienum = document.getElementById('cookie1')

    canh = innerHeight / 2 - 100

    cookie2.style.top = canh+"px"

    function cookie() {
        cookie2.style.transform = "rotate("+(deg)+"deg)"
        deg += Math.floor((Math.random()* 20) + -10)
        cookies++
        cookienum.innerHTML = cookies
    }

document.addEventListener("click", cookie)

loading.style.visibility = 'hidden'
    
}, 1000);