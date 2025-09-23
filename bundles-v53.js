
const scriptEl = document.currentScript; // guardás referencia


const colorBorder = scriptEl.getAttribute('data-color-border');

const colortDiscount = scriptEl.getAttribute('data-color-discount');

const backgroundLabelColor = scriptEl.getAttribute('data-background-label-color');

const bundleTitle = scriptEl.getAttribute('data-bundle-title');

const loadBundles = ()=>{




const styleBundles = document.createElement('style');
styleBundles.textContent = `
  .emapps-discount-radio-group {
    font-family: sans-serif;
    max-width: 360px;
    margin: 20px auto;
  }
  .emapps-discount-radio-group-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .emapps-discount-radio-group-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .emapps-discount-radio-group-list-item {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 12px;
    // display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;
  }
  .emapps-discount-radio-group-list-item input[type="radio"] {
    margin-right: 10px;
  }
  .emapps-discount-radio-group-list-item-active {
    border: 2px solid ${colorBorder ? colorBorder : '#8c52ff'};
    box-shadow: 0 0 0 3px #00000042;
  }
  .emapps-discount-radio-group-list-item-qty-info-unit {
    font-weight: bold;
  }
  .emapps-discount-radio-group-list-item-qty-info-percent {
    font-size: 0.9em;
    color: #666;
  }
  .emapps-discount-radio-group-list-item-qty-price-de {
    text-decoration: line-through;
    font-size: 0.85em;
    color: ${colortDiscount ? colortDiscount : '#8c52ff'};
  }
  .emapps-discount-radio-group-list-item-qty-price-por {
    font-weight: bold;
    font-size: 1.1em;
  }
  .emapps-discount-radio-group-list-item-default-discount {
    position: absolute;
    top: -10px;
    right: 10px;
    background: ${backgroundLabelColor ? backgroundLabelColor : '#8c52ff'};
    color: white;
    font-weight: bold;
    font-size: 0.75rem;
    padding: 4px 8px;
    border-radius: 4px;
  }
`;


document.head.appendChild(styleBundles);



const containerBundle = document.getElementsByClassName('price-container')[0];



// Datos
const discounts = JSON.parse(scriptEl.getAttribute('data-discounts'));


console.log(discounts);
console.log(containerBundle);

// Generador

const wrapper = document.createElement('div');
wrapper.className = 'emapps-discount-radio-group';

const title = document.createElement('h4');
title.className = 'emapps-discount-radio-group-title';
title.textContent = bundleTitle ? bundleTitle : '¡GANÁ comprando POR CANTIDAD!';
wrapper.appendChild(title);

const list = document.createElement('div');
list.className = 'emapps-discount-radio-group-list';

discounts.forEach((discount, index) => {
  const item = document.createElement('div');
  item.className = 'emapps-discount-radio-group-list-item';
  if (discount.default) item.classList.add('emapps-discount-radio-group-list-item-active');

  const radio = document.createElement('input');
  radio.type = 'radio';
  radio.name = 'emapps-discount';
  radio.value = discount.quantity;
  if (discount.default) radio.checked = true;

  const qtyInfo = document.createElement('div');
  const unit = document.createElement('div');
  unit.className = 'emapps-discount-radio-group-list-item-qty-info-unit';
  unit.textContent = `${discount.name}`;
  const subtitle = document.createElement('div');
  subtitle.className = 'emapps-discount-radio-group-list-item-qty-info-subtitle';
  subtitle.textContent = ` ${discount.subtitle}`;


qtyInfo.style.display = 'flex';



  qtyInfo.appendChild(radio);

  let labelTextContainer = document.createElement('div');
  let labelText = document.createElement('p');
  labelText.textContent = `${discount.labelText}`;
  labelTextContainer.style.display = 'flex';


  labelTextContainer.appendChild(unit);
  labelTextContainer.appendChild(labelText);
  
  labelText.style.backgroundColor = `${backgroundLabelColor ? backgroundLabelColor : '#8c52ff'}`;
  labelText.style.color = 'white';
  labelText.style.padding = '4px 8px';
  labelText.style.borderRadius = '4px';
  labelText.style.marginLeft = '8px';
  labelText.style.fontSize = '10px';

let divContainUnitAndsubTitle = document.createElement('div');
labelTextContainer.style.display = 'flex';
labelTextContainer.style.flexWrap = 'wrap';
labelTextContainer.style.alignItems = 'center';
  divContainUnitAndsubTitle.appendChild(labelTextContainer);
  divContainUnitAndsubTitle.appendChild(subtitle);
  
qtyInfo.appendChild(divContainUnitAndsubTitle);


let divOfferContainer = document.createElement('div');
divOfferContainer.style.display = 'flex';
divOfferContainer.style.alignItems = 'center';
divOfferContainer.style.justifyContent = 'space-between';
divOfferContainer.style.width = '100%';




  const priceBox = document.createElement('div');
  const priceDe = document.createElement('div');
  priceDe.className = 'emapps-discount-radio-group-list-item-qty-price-de';
  priceDe.textContent = `$${discount.priceOriginal}`;
  const pricePor = document.createElement('div');
  pricePor.className = 'emapps-discount-radio-group-list-item-qty-price-por';
  pricePor.textContent = `$${discount.priceFinal}`;
divOfferContainer.appendChild(qtyInfo);
divOfferContainer.appendChild(priceBox);
  priceBox.appendChild(priceDe);
  priceBox.appendChild(pricePor);

  item.appendChild(divOfferContainer);
  // item.appendChild(priceBox);

  if (discount.default) {
    const badge = document.createElement('div');
    badge.className = 'emapps-discount-radio-group-list-item-default-discount';
    badge.textContent = 'Mas comprado!';
    item.appendChild(badge);
  }

  item.addEventListener('click', () => {
    document.querySelectorAll('.emapps-discount-radio-group-list-item').forEach(el => {
      el.classList.remove('emapps-discount-radio-group-list-item-active');
      el.querySelector('input').checked = false;
    });
    item.classList.add('emapps-discount-radio-group-list-item-active');
    radio.checked = true;


console.log( item.firstChild.value);
    document.getElementsByClassName('js-quantity-input')[0].value = item.firstChild.value;

  });

  list.appendChild(item);
});

wrapper.appendChild(list);
containerBundle.appendChild(wrapper);










let variantgroups = document.getElementsByClassName("js-product-variants-group")[0]


let selectvariant = variantgroups.childNodes[1].childNodes[3]
let selectvarianticon = variantgroups.childNodes[1].childNodes[5]


console.log(variantgroups.childNodes[1].childNodes);



if(variantgroups){
selectvariant.style.width = '50%'
selectvariant.style.padding = '6px'
selectvariant.style.borderRadius = '6px'


selectvarianticon.style.position = 'absolute'
selectvarianticon.style.top = '4.4rem'
selectvarianticon.style.left = '9rem'

variantgroups.style.display = 'none'










// Itera sobre cada elemento de la lista de descuentos
discounts.forEach((discount, index) => {
    const listItem = document.getElementsByClassName("emapps-discount-radio-group-list-item")[index];

    // Agrega los elementos a la opción por defecto al cargar la página
    if (discount.default === true) {
        listItem.appendChild(selectvariant);
        listItem.appendChild(selectvarianticon);
    }

    // Agrega el evento de clic a cada elemento de la lista
    listItem.addEventListener('click', () => {


  if (listItem.contains(selectvariant)) {
            // Si ya está, no hagas nada
            return;
        }

        // Mueve los elementos a la nueva ubicación al hacer clic
        // No necesitas clonar ni verificar, appendChild los moverá automáticamente
        listItem.appendChild(selectvariant);
        listItem.appendChild(selectvarianticon);
    });
});







}






//Upsells
let upsellContainer = containerBundle.parentNode 

let upsellWrapper = document.createElement('div');
upsellWrapper.className = 'emapps-discount-radio-group';


upsellContainer.appendChild(upsellWrapper);





}



setTimeout(loadBundles, 0);



