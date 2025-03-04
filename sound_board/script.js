const sounds = ['applause', 'boo', 'gasp', 'sad', 'tada', 'victory', 'wrong']
const buttons = document.querySelector('.buttons')

sounds.forEach((sound) => {
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerText = sound
  btn.addEventListener('click', () => playSound(sound))
  buttons.appendChild(btn)
})

function playSound(sound) {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound)
    song.pause()
    song.currentTime = 0
  })
  document.getElementById(sound).play()
}
