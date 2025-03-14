const counters = document.querySelectorAll('.counter')

const updateCounter = (counter) => {
  const target = +counter.getAttribute('data-target')
  const currentCounterValue = +counter.innerText
  const increment = target / 200
  console.log(increment)
  if (currentCounterValue < target) {
    counter.innerText = `${Math.ceil(currentCounterValue + increment)}`
    setTimeout(() => {
      updateCounter(counter)
    }, 1)
  } else {
    counter.innerText = `${target}`
  }
}

counters.forEach((counter) => {
  counter.innerText = '0' // you  can remove this value cause empty value is 0
  updateCounter(counter)
})
