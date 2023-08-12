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

window.addEventListener('DOMContentLoaded', () => {
  HTML()
  rotation()
})