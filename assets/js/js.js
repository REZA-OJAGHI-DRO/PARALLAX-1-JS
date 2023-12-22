let txt = document.getElementById('txt')
    let main = document.querySelectorAll('main')[0]
    let h3 = document.getElementsByClassName('h3')
    let s2 = document.getElementsByClassName('s2')[0]
    let img = document.querySelector('.s2>figure>img')

    main.addEventListener('scroll', (e) => {
        let st = e.target.scrollTop
        txt.innerHTML = st
        h3[0].style.top = -(st / 3) + 'px'
        h3[2].style.top = -(st / 3) + 'px'
        h3[1].style.bottom = -(st / 3) + 'px'
        h3[3].style.bottom = -(st / 3) + 'px'
        if (st > 400) {
            s2.style.left = -(st / 3) + 'px'

        }

        // *****


        // ****
        const pics = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg']

        if (st < 1300) {
            img.src = 'assets/img/' + pics[0]
        } else if (st > 1300 && st < 1600) {
            img.src = 'assets/img/' + pics[1]
        } else if (st > 1600 && st < 1900) {
            img.src = 'assets/img/' + pics[2]
        } else if (st > 1900 && st < 2200) {
            img.src = 'assets/img/' + pics[3]
        } else if (st > 2200 && st < 2500) {
            img.src = 'assets/img/' + pics[4]
        } else if (st > 2500 && st < 2800) {
            img.src = 'assets/img/' + pics[5]
        } else if (st > 2800 && st < 3100) {
            img.src = 'assets/img/' + pics[6]
        } else if (st > 3100 && st < 3400) {
            img.src = 'assets/img/' + pics[7]
        } else if (st > 3400 && st < 3700) {
            img.src = 'assets/img/' + pics[8]
        }

        let s3 = document.getElementsByClassName('s3')[0]
        let s3div1 = document.getElementById('s3div1')
        let _li = document.querySelectorAll('.ul>li')
        let _ul = document.getElementsByClassName('ul')[0]
        let img2 = document.querySelector('.s3>article>figure>img')
        const pics2 = ['10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png',
            '19.png',
            '20.png', '21.png', '22.png'
        ]

        const style = [
            'transform:translateY(-20%) scale(1);width:500px; height:600px; top: 11.5rem; left:40rem;',
            'transform:translateY(-25%) scale(1);  top: 11.5rem; left:8.5rem;',
            'transform:translateY(-25%) scale(.5); width:500px; height:900px;  top: 5rem; left:40rem;',
            'transform:translateY(-25%) scale(.3); width:1500px; height:1000px;  top: 0rem; left:-20rem;',
            'transform:translateY(-25%) scale(.3); width:1500px; height:1000px;  top: 0rem; left:20rem;',
            'transform:translateY(-25%) scale(.15); width:1600px; height:3200px;  top: -30rem; left:30rem;',
            'transform:translateY(-25%) scale(.2); width:1500px; height:1200px;  top: -10rem; left:-10rem;',
            'transform:translateY(-25%) scale(.2); width:2500px; height:4000px;  top: -38rem; left:-50rem;',
            'transform:translateY(-25%) scale(.1); width:3500px; height:4000px;  top: -45rem; left:-30rem;',
            'transform:translateY(-25%) scale(.3); width:2000px; height:2000px;  top: -10rem; left:-15rem;',
            'transform:translateY(-25%) scale(1); width:1500px; height:1000px;  top: 0rem; left:0rem;',
            'transform:translateY(-25%) scale(.3); width:1500px; height:1200px;  top: -10rem; left:0rem;',
            'transform:translateY(-25%) scale(.2); width:1500px; height:1800px;  top: -10rem; left:30rem;'
        ]

        s3.style.left = -(st / 50) + 'px'
        if (st > 5900) {
            s3div1.style.left = 0
        } else if (st < 5800)(
            s3div1.style.left = 0 + '%'
        )
        if (st > 5900) {
            s3.style.zIndex = 190
        } else if (st < 5900) {
            s3.style.zIndex = 92
        }
        _li.forEach((val, i) => {
            val.addEventListener('mouseenter', (e) => {
                img2.src = 'assets/img/' + pics2[i]
                img2.style = style[i]
            })

        })
        _li.forEach((val, i) => {
            val.addEventListener('mouseleave', (e) => {
                img2.src = 'assets/img/23.png'
                img2.style = style[i]
            })

        })
    })

    let x=1
    let i=document.getElementById('i')
    let menu=document.getElementById('menu')
    let art=document.getElementById('article')
    i.addEventListener('click',(e)=>{
        if(x%2){
            menu.style.width=91+'%'
            art.style.top=30+'rem'
        }else{
            menu.style.width=0+'%'
            art.style.top=0+'rem'
        }
        x++
        
    })