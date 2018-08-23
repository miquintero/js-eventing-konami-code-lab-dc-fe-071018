const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0

function init() {
  const body = document.getElementbyId('body')

  const key = parseInt(e.detail || e.which);

  body.addEventListener("keydown", e => {
    if (e.which === code) {
    return e.preventDefault()
    }
  }

  if (key === code.length) {
    alert("You did awesome!");

    index = 0;
  }
else {
  index = 0;
}
}
