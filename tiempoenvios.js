
    // Paso 1: Crear estilos en JavaScript
    const style = document.createElement('style');
    style.textContent = `
      .steps_container {
        display: flex;
        text-align: center;
        width: 100%;
        background-color: #fff;
        font-family: sans-serif;
      }

      .step {
        width: 33.3333%;
        padding: 6px 0;
        list-style: none;
        position: relative;

        transition: opacity 0.3s ease;
      }

      .step.active {
        opacity: 1;
      }

      .three_step_card_img img {
        width: 55px;
        border-radius: 50%;
        border: 5px solid #303030;
        background: #fff;
        margin: 0 4px 3px;
        display: inline-block;
      }

      .three_step_card_content span {
        display: block;
        font-style: italic;
        font-weight: bold;
        color: #000;
      }

      .three_step_card_content .date {
        font-style: normal;
        font-weight: normal;
      }
    `;
    document.head.appendChild(style);


    let date = new Date()
        let day = date.getDate()
        let day_name = date.getDay()
        let month = date.getMonth()





        if(month == 1){
            month = "Enero"
        }else if(month == 2){
            month = "Febrero"
        }else if(month == 3){
            month = "Marzo"
        }else if(month == 4){
            month = "Abril"
        }
      else if(month == 5){
            month = "Abril"
        }else if(month == 6){
            month = "Mayo"
        }else if(month == 7){
            month = "Junio"
        }else if(month == 8){
            month = "Julio"
        }else if(month == 9){
            month = "Agosto"
        }else if(month == 10){
            month = "Septiembre"
        }else if(month == 11){
            month = "Octubre"
        }else if(month == 12){
            month = "Noviembre"
        }else if(month == 0){
            month = "Diciembre"
        }


    /**
     * @function
     * @description Calcula el numero de dias que se demorara  en enviar el pedido
     * segun el dia de la semana
     * @returns {Number} Numero de das
     */
            const calcularDiaSemanaEnvio = ()=>{
                let diaSemana = date.getDay()
          

                if(diaSemana == "6"){
                   return 2
                }
                else if(diaSemana == "5"){
                    return 3
                }
                else{
                    return 1
                }

                
            }


           const calcularDiaSemanaEntrega=()=>{
                let diaSemana = date.getDay()
                if(diaSemana == "6"){
                   return 4
                }
                else if(diaSemana == "5"){
                    return 5
                }
                else{
                    return 3
                }
           }




        let date_buy = day + " " + month
        let date_send = day + calcularDiaSemanaEnvio() + " " + month + " - " + ((day + calcularDiaSemanaEnvio())+1) + " " + month
        let date_receive = day+calcularDiaSemanaEntrega() + " " + month + " - " + ((day+calcularDiaSemanaEntrega())+3) + " " + month
    // Paso 2: Crear pasos del seguimiento
    const steps = [
      {
        title: "Pedido",
        date:date_buy,
        img: "https://estimated-delivery-days.setubridgeapps.com/estimated-delivery-days/app/admin/img/icon_img139.gif",
        active: false
      },
      {
        title: "Enviado",
        date: date_send,
        img: "https://estimated-delivery-days.setubridgeapps.com/estimated-delivery-days/app/admin/img/icon_img140.gif",
        active: false
      },
      {
        title: "Entregado",
        date: date_receive,
        img: "https://estimated-delivery-days.setubridgeapps.com/estimated-delivery-days/app/admin/img/icon_img141.gif",
        active: true
      }
    ];

    // Paso 3: Insertar estructura en el DOM
    const container = document.getElementsByClassName('price-container')[0];
    
    container.className = ' price-container';
    const stepDivContainer = document.createElement('div');
      stepDivContainer.className = 'steps_container';
    steps.forEach(step => {
      const stepDiv = document.createElement('div');
      stepDiv.className = 'step' + (step.active ? ' active' : '');

      stepDiv.innerHTML = `
        <div class="three_step_card">
          <div class="three_step_card_img">
            <img src="${step.img}" alt="${step.title}" />
          </div>
          <div class="three_step_card_content">
            <span>${step.title}</span>
            <span class="date">${step.date}</span>
          </div>
        </div>
      `;
      stepDivContainer.appendChild(stepDiv);

    });

    container.appendChild(stepDivContainer);

  