const tagsWrapper = document.querySelector('#tags')
const textArea = document.querySelector('#textarea')
textArea.focus()

textArea.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    setTimeout(() => {
      event.target.value = ''
    }, 10)
    randomSelect()
  }
  createTags(event.target.value)
})

function createTags(inputValue) {
  const tags = inputValue
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim())
  console.log(tags)

  tagsWrapper.innerHTML = '' // insted of this we should use debouce function for performance

  tags.forEach((tag) => {
    const tagSpan = document.createElement('span')
    tagSpan.classList.add('tag')
    tagSpan.innerText = tag
    tagsWrapper.appendChild(tagSpan)
  })
}

function randomSelect() {
  const times = 30
  const highlightInterval = setInterval(() => {
    const randomTag = pickRandomTag()
    highlightTag(randomTag)
    setTimeout(() => {
      unHighlightTag(randomTag)
    }, 100)
  }, 100)

  setTimeout(() => {
    clearInterval(highlightInterval)
    setTimeout(() => {
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
    }, 100)
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}
function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}

// html pre tag   to define preformatted text
