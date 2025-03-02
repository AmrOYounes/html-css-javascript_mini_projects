const bg = document.querySelector('.bg')
const text = document.querySelector('.loading-text')

let load = 0

function blurring() {
  load++
  if (load > 99) {
    clearInterval(loadingImgInterval)
  }
  text.innerText = `${load}%`
  text.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const loadingImgInterval = setInterval(blurring, 30)

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
