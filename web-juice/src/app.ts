import random from 'lodash/random'

window.addEventListener("DOMContentLoaded", () => {
  console.log("We done loaded")
  const $start = document.getElementById("start")
  $start.addEventListener("click", spawnPopup)
})

function spawnPopup() {
  const $el = document.createElement('div')
  $el.className = 'window'
  console.log("Spawning popup")

  $el.style.left = `${random(0, 70)}vw`;
  $el.style.top = `${random(0, 70)}vh`;
  console.log(`${random(0, 70)}vw;`, $el.style.left, $el.style.top)

  $el.addEventListener("click", (e) => {
    $el.remove()
  })
  document.body.appendChild($el)
}