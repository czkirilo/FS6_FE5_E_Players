$(document).ready(function(){
$("#carrosel img:eq(0)").addClass("banner-ativo").show()

setInterval(slide, 1000)

function slide(){
  if($(".banner-ativo").next().length){
    $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
  }else{
    $(".banner-ativo").removeClass().hide()
    $("#carrosel img:eq(0)").addClass("banner-ativo").show()
  }
}

  $("#barras").click(function(){
    $("#menu").toggleClass("menu-ativo")


// if($("#menu").hasClass("menu-ativo")){
//   $("#menu").removeClass("menu-ativo")
// } else{
//   $("#menu").addClass("menu-ativo")
// }
  
  })
})

let menu = document.getElementById("menu");

// function mostrarMenu() {
//   if (menu.style.display != "flex") {
//     menu.style.display = "flex"
//   } else {
//     menu.style.display = "none"
//   }
// }

function mostrarPopup() {
  window.alert("Parabens! você ganhou um iphone 12 por ser o usuario 99999999")
}

var email = document.getElementById("campo-email");

function enviarEmail() {
  let emailDigitado = email.value;
  console.log(emailDigitado)
}

let listaNoticias = [
{
  titulo: "Amazon prime esta doando kindle",
  descricao: "a amazon nesta semana estará doando kindles para moradores de rua"
},
{
  titulo: "o dolar esta negativo",
  descricao: "1 real esta valendo 400 dolares"
},
{
  titulo: "NFT vende mais que pamonha",
  descricao: "O pessoal acha mais doce"
},
{
  titulo: "netflix vai a falencia",
  descricao: "todo mundo via o catalogo mas não assistia o filme"
},
{
  titulo: "Elon Muks faz cambio entre tesla e moto g2",
  descricao: "Segundo Elon, a troca valeu a pena pois agora ele faz ligações tambem"
},
{
  titulo: "SONY anuncia o preço do play 5 e caiu para 1000 reais",
  descricao: "Isso aqui se for verdade eu to no paraiso"
}
]


function renderizaNoticias(){
  let espaco = document.getElementById("espaco-noticias")
  let template = ""

  for (let index = 0; index < listaNoticias.length; index++){
    const noticia = listaNoticias[index]
    
    template += `<div class="cardnews">
    <img src="img/cardnews.jpg" alt="Foto da jogadora profissional">
    <h3>${noticia.titulo}</h3>
    <p>${noticia.descricao}</p>
  </div>`
  }



espaco.innerHTML = template
}


