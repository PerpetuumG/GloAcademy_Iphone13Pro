const links = document.querySelectorAll('.header-menu__item a')
const fullChar = document.querySelector('.card-details__link-characteristics')

seamless.polyfill()

links.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault()
        const id = element.getAttribute('href').substring(1)
        const section = document.getElementById(id)

        if(section) {
            seamless.elementScrollIntoView(section, {
                behavior: 'smooth',
                block: 'start'
            })
        } else {
            seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                behavior: "smooth",
                block: "center",
                inline: "center",
            })
        }
    })
})

fullChar.addEventListener('click', (event) => {
    event.preventDefault()
    const fullCharId = fullChar.getAttribute('href').substring(1)
    const fullCharSection = document.getElementById(fullCharId)

    seamless.elementScrollIntoView(fullCharSection, {
        behavior: 'smooth',
        block: 'start'
    })
})

