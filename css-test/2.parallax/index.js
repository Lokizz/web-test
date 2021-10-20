const wrapper = document.querySelector('.parallax-wrapper')
wrapper.addEventListener('mousemove', () => {
  console.log(getComputedStyle(wrapper)['width'])
  console.log(getComputedStyle(wrapper)['height'])
})