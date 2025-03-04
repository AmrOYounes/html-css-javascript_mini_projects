const jokeWrapper = document.querySelector('.joke')
const jokeBtn = document.querySelector('.btn')
getNewJoke()
jokeBtn.addEventListener('click', getNewJoke)

async function getNewJoke() {
  const config = {
    // method:'GET'
    headers: {
      Accept: 'application/json',
    },
  }
  //old way using .then .catch
  // fetch('https://icanhazdasdsdjoke.com/', {
  //   // method:'GET'
  //   headers: {
  //     Accept: 'application/json',
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((result) => {
  //     console.log(result)

  //     jokeWrapper.innerText = result.joke
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  try {
    const response = await fetch('https://icanhazdadjoke.com', config)
    const result = await response.json()
    jokeWrapper.innerText = result.joke
  } catch (err) {
    console.log(err)
  }
}
