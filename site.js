

(async() => {

const p = document.querySelector('p')

const url='https://swapi.dev/api/films/1'
const data = await fetch(url)
const json = await data.json()

const formattedCrawl = json.opening_crawl.replaceAll('\r\n', '<br>')

p.innerHTML = formattedCrawl

})()