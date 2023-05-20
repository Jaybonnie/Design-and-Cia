// Valitation forms
(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })
()

//listagem de produtos por javascript
const produtos = [
  {
    id: 1,
    imageURL: "thumb_tv_p1e_43_1_1.png",
    name: "Televisão XIAOMI P1E 43",
    price: 1799.99
  },
  {
    id: 2,
    imageURL: "celular-sansung.jpg",
    name: "Celular Samsung A70",
    price: 2199.90
  },
  {
    id: 3,
    imageURL: "notebook-dell.avif",
    name: "Notebook Dell I5 11th",
    price: 3490.99
  },
  {
    id: 4,
    imageURL: "gabinete-gamer.jpg",
    name: "Gabinete Rise",
    price: "279,99"
  },
  {
    id: 5,
    imageURL: "geforce.jpg",
    name: "NVIDIA Geforce RTX3060",
    price: "2259,99"
  },
  {
    id: 6,
    imageURL: "mouse-redragon.jpg",
    name: "Mouse Redragon Cobra",
    price: "96,99"
  },
  {
    id: 7,
    imageURL: "cadeira-gamer.jpg",
    name: "Cadeira Gamer Fox Racer",
    price: "1089,90"
  },
  {
    id: 8,
    imageURL: "teclado-hyperx.jpg",
    name: "Teclado Mecânico",
    price: "199,99"
  },
  {
    id: 9,
    imageURL: "som-logitech.jpg",
    name: "Som Multimidia Logitech Z607",
    price: "599,99"
  },
  {
    id: 10,
    imageURL: "mousepad.jpg",
    name: "Mousepad Husky Black Avalanche",
    price: "34,99"
  },
  {
    id: 11,
    imageURL: "ram-kingston.jpg",
    name: "Memória Kingston Fury Beast 8GB",
    price: "149,99"
  },
  {
    id: 12,
    imageURL: "fonte.jpg",
    name: "Fonte Redragon RGPS, 600W",
    price: "149,99"
  },
  
]
 
// Exibindo os produtos individuais 
const containerProducts = document.querySelector(".linha-card")

produtos.map((produto) => {

  containerProducts.innerHTML += 
    `
    <div class="card" />
      <img class="card-img-top" src="imagens/${produto.imageURL}" alt="${produto.name}">
        <div class="card-body">
          <h1>${produto.name}</h1>
          <h2>R$${produto.price}</h2>
          <p>À vista no PIX</p>
          <a href="#" class="btn card-btn" style="display: block"><i class="bi bi-cart3"></i> Comprar</a>
        </div>
    </div>
    ` 
    return true
})

const filtro = document.querySelector("#filter-btn")

filtro.addEventListener("click", () => {
  

    console.log("funfo")

    const range1 = document.querySelector("#slider-1").value
    const range2 = document.querySelector("#slider-2").value
  
    const menorPreco = document.querySelector("#menorPreco")
    const maiorPreco = document.querySelector("#maiorPreco")
  
    console.log(range1, range2, menorPreco, maiorPreco)
  
    containerProducts.innerHTML = ""
  
    produtos.filter((produto) => {

      if(range1 < produto.price && produto.price < range2) {
      containerProducts.innerHTML += 
      `
      <div class="card" />
        <img class="card-img-top" src="imagens/${produto.imageURL}" alt="${produto.name}">
          <div class="card-body">
            <h1>${produto.name}</h1>
            <h2>R$${produto.price}</h2>
            <p>À vista no PIX</p>
            <a href="#" class="btn card-btn" style="display:block"><i class="bi bi-cart3"></i> Comprar</a>
          </div>
      </div>
      ` 
      } else {
        return
      }
    })
  }
)
 
//mudando componentes de responsividade do site
let largura = document.querySelector("body").clientWidth
let imagemLogo = document.querySelector(".logo-header")
let inputSearch = document.querySelector(".inputSearch")

let filter = document.querySelector(".btn-filter")
const newI = document.createElement("i")
newI.className = "bi bi-filter"

if(largura < 500) {

  imagemLogo.setAttribute("src", "imagens/favicon.png");
  imagemLogo.style.width = "30%";
  inputSearch.style.width = "50%";
  filter.innerHTML = ""
  filter.appendChild(newI)
  filter.style.width = "auto"

} else {
  imagemLogo.setAttribute("src", "imagens/logo-sombra.png");
}

//range filter
window.onload = function () {
  slideOne()
  slideTwo()
}

let sliderOne = document.getElementById("slider-1")
let sliderTwo = document.getElementById("slider-2")

let displayValOne = document.getElementById("range1")
let displayValTwo = document.getElementById("range2")

let minGap= 0
let = sliderTrack = document.querySelector(".slider-track")
let sliderMaxValue = document.getElementById("slider-1").max

function slideOne () {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap
  }
  displayValOne.textContent = (`R$${sliderOne.value}`)
  fillColor()
}

function slideTwo () {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap
  }
  displayValTwo.textContent = (`R$${sliderTwo.value}`)
  fillColor()
}

function fillColor () {
  percent1 = (sliderOne.value / sliderMaxValue) * 100
  percent2 = (sliderTwo.value / sliderMaxValue) * 100
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #f95738 ${percent1}%, #f95738  ${percent2}%, #dadae5 ${percent2}%)`
}









