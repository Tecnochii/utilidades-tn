const productsToUpssell = document.currentScript.getAttribute(
  "data-prducts-to-upssell"
);

const dataTitle = document.currentScript.getAttribute('data-title');

const dataEnvioText = document.currentScript.getAttribute('data-envio-text');

    

    console.log(JSON.parse(productsToUpssell));
    
 
const loadUpsellingProducts = () => {
  const products = JSON.parse(productsToUpssell) // Crear el título


 let productForm = document.getElementById("product_form")

  let inputFileFoto = `
  
  <form id="product_form" class="js-product-form" method="post" action="/comprar/" data-store="product-form-294185902">
	<input type="hidden" name="add_to_cart" value="294185902">
 	                
            <div class="text-accent font-weight-bold mb-4" style="display: none;">
            ¡No te lo pierdas, es el último!
        </div>
    
    <div class="form-row mb-4">
                                        
<div class="col-4 ">
    
<div class="form-group js-quantity form-quantity form-quantity-product mb-2">
                <div class="form-row m-0 align-items-center" data-component="product.quantity">
            <span class="js-quantity-down form-quantity-icon btn" data-component="product.quantity.minus">
                <svg class="icon-inline icon-w-12 icon-xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M486.4,269.27H25.6v-25.6H486.4Z"></path></svg>
            </span>
                <div class="form-control-container col" data-component="product.adding-amount">
                <input type="number" class=" form-control js-quantity-input form-control-inline" autocorrect="off" autocapitalize="off" pattern="\d*" name="quantity" value="1" min="1" aria-label="Cambiar cantidad" data-component="adding-amount.value">
                                </div>
                    <span class="js-quantity-up form-quantity-icon btn" data-component="product.quantity.plus">
                <svg class="icon-inline icon-w-12 icon-xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M268.8,268.8V486.4H243.2V268.8H25.6V243.2H243.2V25.6h25.6V243.2H486.4v25.6Z"></path></svg>            </span>
        </div>
                    </div>


    </div>        
        







                        <div class="col-8 ">

            
            <input type="submit" class="js-addtocart js-prod-submit-form btn btn-primary btn-block mb-4 cart" value="Agregar al carrito" data-store="product-buy-button" data-component="product.add-to-cart">

            
            <div class="js-addtocart js-addtocart-placeholder btn btn-primary btn-block btn-transition mb-4 disabled" style="display: none;">
    <div class="d-inline-block">
        <span class="js-addtocart-text">Agregar al carrito</span>
        <span class="js-addtocart-success transition-container">
            ¡Listo!
        </span>
        <div class="js-addtocart-adding transition-container transition-icon">
            <svg class="icon-inline btn-icon icon-spin font-body" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M460.115 373.846l-6.941-4.008c-5.546-3.202-7.564-10.177-4.661-15.886 32.971-64.838 31.167-142.731-5.415-205.954-36.504-63.356-103.118-103.876-175.8-107.701C260.952 39.963 256 34.676 256 28.321v-8.012c0-6.904 5.808-12.337 12.703-11.982 83.552 4.306 160.157 50.861 202.106 123.67 42.069 72.703 44.083 162.322 6.034 236.838-3.14 6.149-10.75 8.462-16.728 5.011z"></path></svg>        </div>
    </div>
</div>
        </div>

                    <div class="col-12">
                <div class="js-added-to-cart-product-message font-small mb-3 pb-2" style="display: none;">
                    <svg class="icon-inline icon-lg svg-icon-text mr-2 d-table float-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M174.61,370.49,451.75,93.35l18.1,18.1L174.32,407,42,270.53l18.38-17.82Z"></path></svg>                    <span>
                        Ya agregaste este producto.<a href="#" class="js-modal-open js-open-cart js-fullscreen-modal-open btn-link float-right ml-1" data-toggle="#modal-cart" data-modal-url="modal-fullscreen-cart">Ver carrito</a>
                    </span>
                </div>
            </div>
        
        
        
        
        
            
            
                	
	
		
		<div class="js-shipping-add-product-label mt-2" style="display: none;">
			<span class="js-fs-add-this-product">¡Agregá este producto y </span>
			<span class="js-fs-add-one-more" style="display: none;">¡Agregá uno más y </span>
			<strong class="text-accent font-weight-bold">tenés envío gratis!</strong>
		</div>
	

            
            
            <div class="js-product-form-free-shipping-message js-free-shipping-message mt-2 text-accent" style="display: none;">
                ¡Genial! Tenés envío gratis
            </div>

            </div>

            <div class="row m-md-0">

            
                                    
            
                <div class="js-accordion-container accordion px-3 col-12">
                    <a href="#" class="js-accordion-toggle py-3 row">
                        <div class="col">
                            <span class="h5 font-big">Medios de pago</span>
                        </div>
                        <div class="col-auto">
                            <span class="js-accordion-toggle-inactive">
                                <svg class="icon-inline svg-icon-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M268.8,268.8V486.4H243.2V268.8H25.6V243.2H243.2V25.6h25.6V243.2H486.4v25.6Z"></path></svg>                            </span>
                            <span class="js-accordion-toggle-active" style="display: none;">
                            <svg class="icon-inline svg-icon-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M486.4,269.27H25.6v-25.6H486.4Z"></path></svg>
                            </span>
                        </div>
                    </a>
                    <div class="js-accordion-content pt-3" style="display: none;">
                        <div data-toggle="#installments-modal" data-modal-url="modal-fullscreen-payments" class="js-modal-open js-fullscreen-modal-open js-product-payments-container row mb-4">

                                                            
	
	
				
		
					<div class="js-max-installments-container js-max-installments col-12 mb-2">

				
				
					
											<div class="js-max-installments product-installments">

							
								
																								
								
								<span class="js-installment-amount product-installment-amount">12</span>

								
								<span>
																			<span class="installment-short-separator">
											x
										</span>
									
																	</span>

								
								<span class="js-installment-price product-installment-value">
									$4.765,29
																	</span>
													</div>
												</div>
			
                            
                            
                                                        
                            <span class="js-product-discount-container col-12 mb-2">
                                <span class="text-accent">5% de descuento</span> pagando con Mercado Pago
                                <div class="js-product-discount-disclaimer font-small mt-1" style="display: none;">
                                    No acumulable con otras promociones
                                </div>
                            </span>

                            <a id="btn-installments" class="btn-link font-small col mt-1">
                                <span class="d-table">
                                                                            Ver más detalles
                                                                    </span>
                            </a>
                        </div>
                    </div>
                </div>
            
            
            
                    </div>
    
 </form>
 `

productForm.appendChild(inputFileFoto)

  
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



 <form id="product_form_in_cart" class="js-product-form mt-4" action="/comprar/" method="post" data-store="product-form-${
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








