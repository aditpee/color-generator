const title = document.getElementById('title');
const title1 = title.querySelectorAll('span')[0]
const title2 = title.querySelectorAll('span')[1]


title1.innerHTML = wrapTextSpan(title1.textContent)
title2.innerHTML = wrapTextSpan(title2.textContent)

const titleText1 = title1.querySelectorAll('span')
const titleText2 = title2.querySelectorAll('span')
titleText1.forEach(char => animationTextHover(char))
titleText2.forEach(char => animationTextHover(char))


function wrapTextSpan(text) {
    let result = ''
    for(char of text) {
        result += `<span>${char}</span>`
    
    }
    return result
}

function animationTextHover(char) {
    char.addEventListener('mouseover', function() {
        char.classList.add('active')
        if(char.nextElementSibling !== null && char.previousElementSibling !== null) {
            char.nextElementSibling.classList.add('next-active')
            char.previousElementSibling.classList.add('prev-active')
        } else if (char.nextElementSibling !== null && char.previousElementSibling == null ) {
            char.nextElementSibling.classList.add('next-active')
        } else if (char.nextElementSibling == null && char.previousElementSibling !== null ) {
            char.previousElementSibling.classList.add('prev-active')
        }  
    })
    char.addEventListener('mouseleave', function() {
        char.classList.remove('active')
        if(char.nextElementSibling !== null && char.previousElementSibling !== null) {
            char.nextElementSibling.classList.remove('next-active')
            char.previousElementSibling.classList.remove('prev-active')
        } else if (char.nextElementSibling !== null && char.previousElementSibling == null ) {
            char.nextElementSibling.classList.remove('next-active')
        } else if (char.nextElementSibling == null && char.previousElementSibling !== null ) {
            char.previousElementSibling.classList.remove('prev-active')
        }  
    })
}


