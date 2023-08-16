function HTML() {
  function movingElems(selector) {
    const toBeMoved = Array.from(document.querySelector(selector).querySelectorAll('[data-move]')),
          parents = toBeMoved.map(item => item.parentElement)

    toBeMoved.forEach((elem, i) => {
      const [dest, bp] = elem.dataset.move.split(' '),
            svgs = document.querySelectorAll('.header__login svg path')
      const mql = window.matchMedia(`(max-width: ${bp}px)`)
      function change() {
        if (mql.matches) {
          document.querySelector(dest).append(elem)
          svgs.forEach(path => path.setAttribute('fill', '#10B981'))
        } else {
          parents[i].append(elem)
          svgs.forEach(path => path.setAttribute('fill', 'white'))
        }
      }

      change()

      mql.addEventListener('change', change)

    })
  }

  movingElems('.header')

  const burger = document.querySelector('.burger')
  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    document.querySelector('.menu').classList.toggle('active')
  })
}

function rotation() {
  new CircleType(document.querySelector('#circled')).radius(220)
  document.querySelector('.intro__circled-title').style.transform = 'rotate(-20deg)'
}

function slider({selector, btns} = {}) {
  const [prev, next] = btns.map(sel => document.querySelector(sel)),
        slides = [...document.querySelector(selector).children]
  let slideIndex = 0

  const hideSlides = () => {
    slides.forEach(slide => {
      slide.classList.add('hide')
    })
  }

  const showSlide = i => {
    hideSlides()
    slides[i].classList.remove('hide')
  } 

  const plusSlide = i => {
    slideIndex += i
    if (slideIndex < 0) {
      slideIndex = slides.length - 1
    } 

    if (slideIndex >= slides.length) {
      slideIndex = 0
    }
    // console.log(slideIndex)
    showSlide(slideIndex)
  }

  hideSlides()
  showSlide(slideIndex)
  prev.addEventListener('click', () => {
    plusSlide(-1)
    slides[slideIndex].classList.remove('fadeInRight')
    slides[slideIndex].classList.add('fadeInLeft')
  })
  next.addEventListener('click', () => {
    plusSlide(1)
    slides[slideIndex].classList.remove('fadeInLeft')
    slides[slideIndex].classList.add('fadeInRight')
  })
}

window.addEventListener('DOMContentLoaded', () => {
  HTML()
  rotation()
  slider({btns: ['#prev', '#next'], selector: '.launches__slider .container'})
})

//btns: {prev: '#prev', next: '#next'}