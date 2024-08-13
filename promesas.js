/* fetch('https://rickandmortyapi.com/api/character')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(`Algo malio sal: ${error}`))
  .finally(() => console.log('Haya error o no, muestro este mensaje')) */

async function callApi (url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(`Algo malio sal: ${error}`)
  } finally {
    console.log('Haya error o no, muestro este mensaje')
  }
}

callApi('https://rickandmortyapi.com/api/character')
