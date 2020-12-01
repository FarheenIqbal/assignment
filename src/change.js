window.onload = init
function init() {
  const images = document.getElementsByTagName('img')
  for (let i = 0; i < images.length; i++) {
    images[i].onmouseover = changeImage
    images[i].onmouseout = changeImageBack
  }
}

function changeImage(event) {
  const image = document.getElementById(event.target)
  const id = image.getAttribute('id')
  if (id) {
    image.src = `${id}change.jpg`
  }
}

function changeImageBack(event) {
  const image = document.getElementById(event.target)
  const id = image.getAttribute('id')
  if (id) {
    image.src = `${id}.jpg`
  }
}
