const panels = document.querySelectorAll('.panel') // '.' - все панели епта, если без . то только первую панель возьмет

panels.forEach((panel) => {
    panel.addEventListener('click', () => { // прослушиватель событий при щелчке
        removeActiveClasses() // ф-я удалять активный класс с других (она ниже)
        panel.classList.add('active') // класс меняется (добавлется) на активный
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}