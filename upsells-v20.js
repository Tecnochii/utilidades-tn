const productsToUpssell = document.currentScript.getAttribute(
  "data-prducts-to-upssell"
);

const dataTitle = document.currentScript.getAttribute('data-title');

const dataEnvioText = document.currentScript.getAttribute('data-envio-text');

    

    console.log(JSON.parse(productsToUpssell));
    
  setTimeout(() => {
    
    let campoPersonalizado = document.getElementById("campo-personalizado--root")
    
    if(campoPersonalizado){

    console.log("Campo en encontrado",campoPersonalizado);

      
    }



  }, 2000);

const loadUpsellingProducts = () => {
  const products = JSON.parse(productsToUpssell) // Crear el título

  const title = document.createElement("h2");

  title.textContent = dataTitle ? dataTitle :  "Te puede interesar";

  let firstChildCartList =
    document.getElementsByClassName("subtotal-price ")[0];
  document
    .getElementsByClassName("cart-row")[0]
    .insertBefore(title, firstChildCartList); // Crear el wrapper

  const wrapper = document.createElement("div");

  wrapper.classList.add("carousel-wrapper");

  document
    .getElementsByClassName("cart-row")[0]
    .insertBefore(wrapper, firstChildCartList); // Botón izquierda

  const btnLeft = document.createElement("button");

  btnLeft.classList.add("arrow", "arrow-left");

  btnLeft.innerHTML = "&#10094;";

  wrapper.appendChild(btnLeft); // Crear contenedor de productos

  const container = document.createElement("div");

  container.classList.add("products-container");

  wrapper.appendChild(container); // Botón derecha

  const btnRight = document.createElement("button");

  btnRight.classList.add("arrow", "arrow-right");

  btnRight.innerHTML = "&#10095;";

  wrapper.appendChild(btnRight); // Crear tarjetas de producto

  products.forEach((product) => {
    const card = document.createElement("div");

    card.classList.add("product-card");

    card.innerHTML = `

    
<a href="${product.url}"> <img src="${product.img}" alt="${product.name}"></a>

 <a href="${product.url}"><div class="product-name">${product.name}</div></a>


    <div style="display: flex;">
    <div style="color: red;" class="price-old">$ ${product.oldPrice.toLocaleString()}</div>
    <div></div>
    </div>
 
 <div style="display: flex;">
<div class="price-new">$ ${product.newPrice.toLocaleString()}</div>
<div style="margin-left: 10px;border: 2px solid #3ab33a;border-radius: 6px;padding: 0.18rem;background-color: #e3f7e3;" class="discount">${product.discount}</div>
</div>

${dataEnvioText ? ` <div style="display: flex;">
  <div style="color:green;" class="envio-text">${dataEnvioText}</div>
  <div></div> 
  </div>  ` : ""}



 <form id="product_form" class="js-product-form mt-4" action="/comprar/" method="post" data-store="product-form-${
      product.idProducto
    }"><input name="add_to_cart" type="hidden" value="${product.idProducto}" />

<div class=" text-accent mb-3" style="display: none;">&iexcl;No te lo pierdas, es el &uacute;ltimo!</div>

<div class="row no-gutters mb-4 ">

<div class="col-4 col-md-3 mx-neg-1">

<div class="form-group js-quantity form-quantity">

<div class="form-row m-0 align-items-center" data-component="product.quantity">

<div class="form-control-container col px-0" data-component="product.adding-amount"><input class=" form-control js-quantity-input form-control-big form-control-inline" min="1" name="quantity" pattern="\d*" type="number" value="1" aria-label="Cambiar cantidad" data-component="adding-amount.value" /></div>

</div>

</div>

</div>

<div class="col-8 col-md-9" style="

 display: flex;

 justify-content: center;

"><button class="js-addtocart js-prod-submit-form btn-add-to-cart btn btn-primary btn-big btn-block cart cart-upsell" type="submit" value="" data-store="product-buy-button" data-component="product.add-to-cart" data-prev-visibility="inline-block"
 style="    
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    color: green;
    background-color:#ffffff;
    border: 1px solid;
    position: relative;
    top: -11rem;
    left: 3rem;
    font-size: 35px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    ">+</button>

<div class="js-addtocart js-addtocart-placeholder btn btn-primary btn-block btn-transition btn-big disabled" style="display: none;" data-prev-visibility="block">

<div class="d-inline-block"><span class="js-addtocart-text" style="display: inline;" data-prev-visibility="inline"> + </span> <span class="js-addtocart-success transition-container"> &iexcl;Listo! </span>

<div class="js-addtocart-adding transition-container">Agregando...</div>

</div>

</div>

</div>

<div class="col-12">

<div class="js-added-to-cart-product-message font-small my-3" style="display: none;" data-prev-visibility="block">Ya agregaste este producto.<a class="js-modal-open js-open-cart js-fullscreen-modal-open btn-link font-small ml-1" href="#" data-toggle="#modal-cart" data-modal-url="modal-fullscreen-cart">Ver carrito</a></div>

</div>

</div>

</form>

`;

    container.appendChild(card);
  }); // Lógica para flechas

  btnLeft.addEventListener("click", () => {
    container.scrollBy({ left: -200, behavior: "smooth" });
  });

  btnRight.addEventListener("click", () => {
    container.scrollBy({ left: 200, behavior: "smooth" });
  });

  btnRight.style.display = "none";

  btnLeft.style.display = "none";

  // Auto scroll cada 5 segundos

  let contadorSegundos = 0;
};

loadUpsellingProducts();








