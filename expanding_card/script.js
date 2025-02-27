const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses(panel)
    panel.classList.toggle('active')
  })
})

function removeActiveClasses(clickedPannel) {
  panels.forEach((panel) => {
    if (panel !== clickedPannel) panel.classList.remove('active')
  })
}
