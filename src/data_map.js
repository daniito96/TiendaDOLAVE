
var contenido = document.querySelector("#category_list")
const getCategory = () => {
  fetch('http://localhost:3000/getCategory')
  .then(res => res.json())
  .then(data => {
    // console.log(data[0]);
    let dataJson = Object.keys(data).length;
    for (let i = 0; i < dataJson; i++) {
      contenido.innerHTML += `
      <a href="#" class="waves-effect waves-light btn" id="category_item" onclick="click(${data[i].id})" category="${data[i].id}">${data[i].name}</a>
      `
    }
  })
}

// function getProductsAll(){
// fetch('http://localhost:3000/getProduct')
// .then(res => res.json())
// .then(data => {
//     // console.log(data[0]);
//     let dataJson = Object.keys(data).length;
//     for (let i = 0; i < dataJson; i++) {
//         contenido.innerHTML += `
//         <div class="col s12 m3">
//                   <div class="card"> 
//                     <div class="card-image">
//                       <img class="responsive-img" width: 100%; height: 100vh; src="${(!data[i].url_image) ? 'media/nodisponible.jpg' :data[i].url_image}" />
//                       <a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">add_shopping_cart</i></a>
//                       </div>
//                       <div class="card-content">
//                       <span class="card-title" style="color: black;">${data[i].name}</span>
//                       <p><strong>$</strong>${data[i].price}<p>
//                     </div>
//                   </div>
//                 </div>
//         `
//     }
// })
// }

const formulario = document.querySelector('#buscarProducto');
const resultado = document.querySelector('#products-list');

const filtrar = () => {
  resultado.innerHTML = '';
  const texto = formulario.value.toLowerCase();

  fetch('http://localhost:3000/getProduct')
    .then(res => res.json())
    .then(data => {
      for (let producto of data) {
        let nombre = producto.name.toLowerCase();
        if (nombre.indexOf(texto) !== -1) {
          resultado.innerHTML += `
          <div class="product-item" category="${producto.category}">
          <div class="col s6 m3">
                    <div class="card"> 
                      <div class="card-image">
                        <img class="responsive-img" src="${(!producto.url_image) ? 'media/nodisponible.jpg' : producto.url_image}" />
                        <a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                        <span class="" style="color: black;">${producto.name}</span>
                        <p><strong>$</strong>${producto.price}<p>
                      </div>
                    </div>
                  </div>
          </div>
          `
        }
      }
    })
}

// ====================================

formulario.addEventListener('keyup', filtrar);


filtrar();
// getCategory();


