const wrapper = document.querySelector('.parallax-wrapper')
const planets = document.querySelectorAll('.parallax-planet')
const floatingRocks = document.querySelectorAll('.parallax-floating-rock')
const glimmer = document.querySelector('.parallax-glimmer')


wrapper.addEventListener('mousemove', e => {
  let horizontal = e.clientX / parseInt(getComputedStyle(wrapper).width)
  let vertical = e.clientY / parseInt(getComputedStyle(wrapper).height)

  planets[0].style.transform = calculateTranslate(horizontal, vertical, 0, 20)

  planets[1].style.transform = calculateTranslate(horizontal, vertical, 0, 80)

  // ? 每块漂浮岩石形成差异化
  floatingRocks[0].style.transform = calculateTranslate(horizontal, vertical, 35, 20)
  floatingRocks[1].style.transform = calculateTranslate(horizontal, vertical, 10, 15)
  floatingRocks[2].style.transform = calculateTranslate(horizontal, vertical, 0, 0)
  floatingRocks[3].style.transform = calculateTranslate(horizontal, vertical, 18, 30)
  floatingRocks[5].style.transform = calculateTranslate(horizontal, vertical, 10, 20)

  // ! 左边最小的漂浮岩石特殊处理
  let offset1 = Math.floor(Math.random() * 2 + 1)
  let offset2 = Math.floor(Math.random() * 2 + 1)
  floatingRocks[4].style.transform = calculateTranslate(horizontal, vertical, offset1, offset2)

  floatingRocks[6].style.transform = calculateTranslate(horizontal, vertical, 10, 5)
})

function calculateTranslate(horizontal, vertical, horizontalOffset, verticalOffset=0) {
  if (vertical <= 0 || vertical >= 1) {
    return `translate(0, 0)`
  } else {
    return `translate(${horizontal * horizontalOffset / 0.5}px, ${vertical * verticalOffset / 0.5}px)`;
  }
}
