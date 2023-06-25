// slider  generator
let generatorFocus = 0;
const colorGenerator = document.querySelectorAll('.color-generator')
const nextArrow = document.querySelectorAll('.next-arrow')
const prevArrow = document.querySelectorAll('.previous-arrow')


nextArrow.forEach(arrow => arrow.addEventListener('click', changeGeneratorPanel))
prevArrow.forEach(arrow => arrow.addEventListener('click', changeGeneratorPanel))

function changeGeneratorPanel(e) {
    hideContent()
    changeGeneratorFocus(e.target)
    showContent()
    resetColor()
}

function changeGeneratorFocus(arrow) {
    if(arrow.classList.contains('next-arrow') || arrow.parentNode.classList.contains('next-arrow')) {
        generatorFocus ++
        if(generatorFocus > colorGenerator.length - 1) {
          generatorFocus = 0
        }
    } else if(arrow.classList.contains('previous-arrow') || arrow.parentNode.classList.contains('previous-arrow')) {
        generatorFocus --
        if(generatorFocus < 0) {
          generatorFocus = colorGenerator.length - 1
        }
    }
}

function hideContent() {
    const prevGenerator = colorGenerator[generatorFocus]
    prevGenerator.setAttribute('tabindex', -1)
}

function showContent() {
    const currentGenerator = colorGenerator[generatorFocus]
    currentGenerator.setAttribute('tabindex', 0)
}

function resetColor() {
  const resultColor = document.querySelector('.result-color')
  resultColor.style.backgroundColor = `#fff`
}
