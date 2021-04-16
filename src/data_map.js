
var contenido = document.querySelector("#contenido")

function getProducts(){
fetch('http://localhost:3000/getProduct', {mode:'cors'})
.then(res => res.json())
.then(data => {
    // console.log(data[0]);
    let dataJson = Object.keys(data).length;
    for (let i = 0; i < dataJson; i++) {
        contenido.innerHTML += `
        <div class="col s12 m3">
                  <div class="card">
                    <div class="card-image">
                      <img class="responsive-img" width: 100%; height: 100vh; src="${(!data[i].url_image) ? 'media/nodisponible.jpg' :data[i].url_image}" />
                      <a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">add_shopping_cart</i></a>
                      </div>
                      <div class="card-content">
                      <span class="card-title" style="color: black;">${data[i].name}</span>
                      <p><strong>$</strong>${data[i].price}<p>
                    </div>
                  </div>
                </div>
        `
    }
})
}

getProducts();