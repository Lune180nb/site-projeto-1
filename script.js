
let btnNav = document.getElementById("btn-nav")
let btnVoltar = document.getElementById("voltarBtn")
let menuResponsivo = document.getElementById("menu-responsivo-id")
let overlay = document.getElementById("overlay")
let link = document.querySelectorAll(".link-nav")


  function mostrarMenu(){
  menuResponsivo.classList.toggle("ativo")

  btnNav.classList.toggle("fechado")

  btnVoltar.classList.toggle("fechado")
  overlay.classList.toggle("ativo")
}

link.forEach(i => {
  i.addEventListener("click", () => {
    mostrarMenu()
  })
})

overlay.addEventListener("click", () => {
  mostrarMenu()
})

btnVoltar.addEventListener("click", () => {
  mostrarMenu()
  })


btnNav.addEventListener("click", () => {
  mostrarMenu()
})





