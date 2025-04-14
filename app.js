const btnMenu = document.querySelector('.btn-rond-menu');
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');

btnMenu.addEventListener('click', () => {

    ligne.classList.toggle('active')
    nav.classList.toggle('menu-visible')

})

if (window.matchMedia('(max-width: 1300px)')) {

    allItemNav.forEach(item => {

        item.addEventListener('click', () => {

            nav.classList.toggle('menu-visible')
            ligne.classList.toggle('active');

        })
    } )

}

// Aimation écriture

const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim, {
    loop:false,
    deleteSpeed: 20
})

typewriter
.pauseFor(1800)
.changeDelay(20)
.typeString('Moi c\'est Chancelle Ravelosoa')
.pauseFor(300)
.typeString('<strong>, Développeur Full-Stack</strong> !')
.pauseFor(1000)
.deleteChars(13)
.typeString('<span style="color: #27ae60;"> CSS</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color:#EA39FF;"> PHP</span> !')
.pauseFor(1000)
.deleteChars(6)
.typeString('<span style="color:#FF6910;"> JavaScript</span> !')
.start()



