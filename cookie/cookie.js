let cookies = 0
let multiplier = 1, adding = 1
let clicked = false, multi
let deg = 90
let cookie2 = document.getElementById('cookie')
let loading = document.getElementById('loading')
let cookienum = document.getElementById('cookie2')
canh = innerHeight / 2 - 100
cookie2.style.top = canh+"px"
loading.style.visibility = 'hidden'

function cookie() {
    cookie2.style.transform = "rotate("+(deg)+"deg)"
    deg += Math.floor((Math.random()* 20) + -10)
    Math.floor(cookies += adding * multiplier)
    cookienum.innerHTML = cookies
    if(cookies >= 100){
        document.getElementById('mult').style.visibility = 'visible'
        if (clicked === true) {
            cookies -= 100
            multiplier += 2
            clicked = false
        }
    }
    else{
        document.getElementById('mult').style.visibility = 'hidden'
    }
}

function click2(){
    clicked = true
}

setInterval(() => {
    console.log(clicked)
}, 100);