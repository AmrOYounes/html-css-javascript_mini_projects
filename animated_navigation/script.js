const navButton = document.getElementById('toggle')
navButton.addEventListener('click', () => {
  navButton.parentNode.classList.toggle('active')
})
