import random from 'lodash/random'
import "xp.css/dist/XP.css";

window.addEventListener("DOMContentLoaded", () => {
  console.log("We done loaded")
  const $start = document.getElementById("start")
  $start.addEventListener("click", spawnPopup)
})

function spawnPopup() {
  const $el = document.createElement('div')
  // TODO: lol, use a templating language
  $el.innerHTML = `
  <div class="title-bar">
    <div class="title-bar-text">Title</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"></button>
    </div>
  </div>
  <div class="window-body">
    <p>There's so much room for activities!</p>
  </div>`;
  $el.className = 'window'
  console.log("Spawning popup")

  $el.style.left = `${random(0, 70)}vw`;
  $el.style.top = `${random(0, 70)}vh`;
  console.log(`${random(0, 70)}vw;`, $el.style.left, $el.style.top)

  $el.addEventListener("click", (e) => {
    const hide = $el.animate(
      [
        { transform: "scale(1)"},
        { transform: "scale(0)"}
      ],
      {
       duration: 400
      }
    )
    hide.onfinish = () => $el.remove()
  })
  document.body.appendChild($el)
  $el.animate(
    [
      { transform: "scale(0)"},
      { transform: "scale(1)"}
    ],
    {
      duration: 200
    }
  )
  //screenshake()
} 

function screenshake($el?: HTMLElement) {
  ($el || document.body).animate(
    [
      { transform: "translate(1px, 1px) rotate(0deg)" },
      { transform: "translate(-1px, -1px) rotate(-1deg)" },
      { transform: "translate(-1px, 0px) rotate(1deg)" },
      { transform: "translate(0px, 1px) rotate(0deg)" },
      { transform: "translate(1px, -1px) rotate(1deg)" },
      { transform: "translate(-1px, 1px) rotate(-1deg)" },
      { transform: "translate(-2px, 1px) rotate(0deg)" },
      { transform: "translate(2px, 1px) rotate(-1deg)" },
      { transform: "translate(-1px, -1px) rotate(1deg)" },
      { transform: "translate(0px, 1px) rotate(0deg)" },
      { transform: "translate(0px, -1px) rotate(-1deg)" },
    ],
    {
      duration: 20,
    }
  );
}