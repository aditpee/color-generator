const rangeInputs = document.querySelectorAll('input[type="range"]')
const numberInputs = document.querySelectorAll('input[type="number"]')
const hexInput = document.querySelector(".hexa-input")


rangeInputs.forEach(input => input.addEventListener('input', handleInputChange))
numberInputs.forEach(input => input.addEventListener('input', handleInputChange))

hexInput.addEventListener("input", handleResultColorHexa)

function handleInputChange(e) {
  let target = e.target
  const min = target.min
  const max = target.max
  const val = target.value

  if (e.target.type !== 'range') { 
      target = e.target.previousElementSibling

      if(val > parseInt(max) ) {
        e.target.value = max
      }
    }   
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    
    const currentGenerator = target.parentNode.parentNode.parentNode
    
    if(currentGenerator.id == 'rgb-generator') {
      handleResultColorRGB()
    } else if(currentGenerator.id == 'hsl-generator') {
      handleResultColorHSL(target)
    }
}


function handleResultColorRGB() {
  const redSlider = document.getElementById('redslider')
  const greenSlider = document.getElementById('greenslider')
  const blueSlider = document.getElementById('blueslider')

  
  const resultColor = document.querySelector('.result-color')
  
  resultColor.style = `background-color: rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value});`
}

function handleResultColorHSL(target) {
  const hueSlider = document.getElementById('hueslider')
  const satSlider = document.getElementById('satslider')
  const lightSlider = document.getElementById('lightslider')
  
  
  const resultColor = document.querySelector('.result-color')
  
  resultColor.style = `background-color: hsl(${hueSlider.value}, ${satSlider.value}%, ${lightSlider.value}%);`

  if(target.id == 'hueslider') {
    target.style.backgroundImage = `linear-gradient(hsl(${target.value}, 100%, 50%), hsl(${target.value}, 100%, 50%))`
    document.documentElement.style.setProperty('--hue-thumb', `hsl(${target.value}, 100%, 50%)`)
  }
}
// `(hsl(${target.value}, 100%, 50%)`

function handleResultColorHexa() {
  const resultColor = document.querySelector('.result-color')
  if(hexInput.value == '') {  
    resultColor.style.backgroundColor = `#fff`
  } 
  resultColor.style.backgroundColor = `#${hexInput.value}`
}

