let cookies = 0
let multiplier = 1
let adding = 1

setTimeout(() => {

    let deg = 90
    let cookie2 = document.getElementById('cookie')
    let loading = document.getElementById('loading')
    let cookienum = document.getElementById('cookie2')

    canh = innerHeight / 2 - 100

    cookie2.style.top = canh+"px"

    function cookie() {
        cookie2.style.transform = "rotate("+(deg)+"deg)"
        deg += Math.floor((Math.random()* 20) + -10)
        Math.floor(cookies += adding * multiplier)
        cookienum.innerHTML = cookies
        if(cookies >= 100){
            document.getElementById('mult').style.visibility = 'visible'
            cookies -= 100
            multiplier += 0.2
        }
        else{
            document.getElementById('mult').style.visibility = 'hidden'
        }
    }

document.addEventListener("click", cookie)

loading.style.visibility = 'hidden'
    
}, 1000);
