let cookies = 0
let multiplier = 1, adding = 1
let clicked = false, multi
let deg = 90, cookie2, loading2, cookienum

const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}


async function loading(){
    cookie2 = document.getElementById('cookie')
    loading2 = document.getElementById('loading')
    cookienum = document.getElementById('cookie2')
    canh = innerHeight / 2 - 100
    cookie2.style.top = canh+"px"
}

async function cookie(){
    loading2.style.visibility = 'hidden'
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
}

function click2(){
    clicked = true
}

setInterval(() => {
    console.log(clicked)
}, 100);