function HTML() {
  const toBeMoved = Array.from(document.querySelectorAll('[data-move]'))
  const parents = toBeMoved.map(item => item.parentElement)
  function change(arg) {
    if (arg) {
      toBeMoved.forEach(item => {
        const dest = document.querySelector(item.dataset.move)
        dest.append(item)
      })
    } else {
      toBeMoved.forEach((item, i) => parents[i].append(item))
    }
  }

  if (document.documentElement.offsetWidth <= 1084) {
    change(true)
    const paths = [...document.querySelector('.header__login svg').children]
    paths.forEach(item => {
      item.setAttribute('fill', '#10B981')
    })
  } else {
    change(false)
    const paths = [...document.querySelector('.header__login svg').children]
    paths.forEach(item => {
      item.setAttribute('fill', 'white')
    })
  }

  window.addEventListener('resize', () => {
    const w = document.documentElement.offsetWidth
    if (w <= 1084) {
      change(true)
      const paths = [...document.querySelector('.header__login svg').children]
      paths.forEach(item => {
        item.setAttribute('fill', '#10B981')
      })
    } else {
      change(false)
      const paths = [...document.querySelector('.header__login svg').children]
      paths.forEach(item => {
        item.setAttribute('fill', 'white')
      })
    }
  })

  const burger = document.querySelector('.burger')
  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    document.querySelector('.menu').classList.toggle('active')
  })
}

window.addEventListener('DOMContentLoaded', () => {
  HTML()
})