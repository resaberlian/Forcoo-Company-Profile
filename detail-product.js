const data = "product.json";
const ourProduct = document.querySelector('#product');
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');


const detailProduct = () => {
    fetch(data)
        .then(response => {
            return response.json();
        }).then(responseJson => {
            console.log(responseJson.product);
            ourProduct.innerHTML = "";
            var product = responseJson.product.find( product => product.id == myParam)
            console.log('isi link', product)
                ourProduct.innerHTML += `

                    <div class="col-md-6" class="screen" >
                    <div id="slider">
                        <img src="${product.foto}" alt="random-image.jpg" class="item">
                        <img src="${product.foto1}" alt="random-image.jpg" class="item">
                        <img src="${product.foto2}" alt="random-image.jpg" class="item">

                    </div>
                    </div>

                    <div class="col-md-6 ">
                        <div class="description mt-5 ml-5 mr-5 mb-4">
                  
                        <h2 class="mt-3">${product.nama} </h2>
                        <h6 class="mt-3">${product.harga} </h6>

                        <h5 class="mt-5">Materials</h5>
                        <div class="button-buy">
                        <a href="${product.linkTokped}"  target=”_blank”><button class="btn-buy mt-5 "><img src="assets/Icon/shopping-cart.png" alt="" width="25px" class="mr-2"> Tokopedia</button></a>
                        <a href="${product.linkShopee}"  target=”_blank”><button class="btn-buy mt-5 ml-3"><img src="assets/Icon/shopping-cart.png"" alt="" width="25px" class="mr-2"> Shoope</button></a>
                        </div>
                        </div>
                    </div>
                    

                `;
        
        }).catch(error => {
            console.error(error);
        });
}
document.addEventListener('DOMContentLoaded', detailProduct );
