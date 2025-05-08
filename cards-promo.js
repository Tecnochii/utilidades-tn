       // Datos de cada tarjeta
       const cards = JSON.parse(document.currentScript.getAttribute('data-cards'));
      
       // Crear contenedor principal
       let containerCardDescription = document.createElement("div");
       containerCardDescription.style.display = "flex";
       containerCardDescription.style.flexWrap = "wrap";
       containerCardDescription.style.justifyContent = "center";
       containerCardDescription.style.gap = "15px";
       containerCardDescription.style.fontFamily = "sans-serif";
       containerCardDescription.style.maxWidth = "700px";
       containerCardDescription.style.margin = "0 auto";


   let containerCardBanner = document.createElement("div");
       containerCardBanner.style.display = "flex";
       containerCardBanner.style.flexWrap = "wrap";
       containerCardBanner.style.justifyContent = "center";
       containerCardBanner.style.gap = "15px";
       containerCardBanner.style.fontFamily = "sans-serif";
       containerCardBanner.style.maxWidth = "700px";
       containerCardBanner.style.margin = "0 auto";



     
       // Crear bloque superior destacado
       let topBanner = document.createElement("div");
       topBanner.style.background = "linear-gradient(90deg, #aee1f9, #007BFF)";
       topBanner.style.color = "white";
       topBanner.style.padding = "15px 20px";
       topBanner.style.borderRadius = "10px";
       topBanner.style.textAlign = "center";
       topBanner.style.fontFamily = "sans-serif";
       topBanner.style.marginBottom = "20px";
       topBanner.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
       
       let bannerTitle = document.createElement("strong");
       bannerTitle.textContent = "¿POR QUÉ COMPRAR NUESTRA PROMO?";
       bannerTitle.style.fontSize = "18px";
       
       let bannerEmoji = document.createElement("span");
       bannerEmoji.textContent = "👇👇👇👇";
       bannerEmoji.style.fontSize = "22px";
       bannerEmoji.style.display = "inline-block";
       bannerEmoji.style.marginTop = "8px";
       
       topBanner.appendChild(bannerTitle);
       topBanner.appendChild(document.createElement("br"));
       topBanner.appendChild(bannerEmoji);
     
       // Crear tarjetas
       cards.forEach(card => {
         let cardDiv = document.createElement("div");
         cardDiv.style.flex = "0 0 45%";
         cardDiv.style.background = "#fff";
         cardDiv.style.borderRadius = "10px";
         cardDiv.style.padding = "20px";
         cardDiv.style.boxShadow = "0 1px 8px rgba(0,0,0,0.05)";
         cardDiv.style.textAlign = "center";
         cardDiv.style.maxWidth = "20vw";  

         let icon = document.createElement("div");
         icon.textContent = card.icon;
         icon.style.fontSize = "22px";
     
         let title = document.createElement("h3");
         title.textContent = card.title;
         title.style.fontSize = "13px";
         title.style.color = "#003366";
         title.style.margin = "10px 0 5px";
         title.style.fontWeight = "bold";
     
         let desc = document.createElement("p");
         desc.textContent = card.description;
         desc.style.fontSize = "13px";
         desc.style.color = "#555";
     
         cardDiv.appendChild(icon);
         cardDiv.appendChild(title);
         cardDiv.appendChild(desc);
     
         containerCardDescription.appendChild(cardDiv);
       });
     





       containerCardBanner.appendChild(topBanner);


       let containerCardGeneralDescription = document.createElement("div");
       containerCardGeneralDescription.style.display = "flex";
       containerCardGeneralDescription.style.flexWrap = "wrap";
       containerCardGeneralDescription.style.justifyContent = "center";
       containerCardGeneralDescription.style.gap = "15px";
       containerCardGeneralDescription.style.fontFamily = "sans-serif";
       containerCardGeneralDescription.style.maxWidth = "700px";
       containerCardGeneralDescription.style.margin = "0 auto";


       containerCardGeneralDescription.appendChild(containerCardDescription);
       containerCardGeneralDescription.appendChild(containerCardBanner);


    let userContent =  document.getElementsByClassName('user-content')[0] 
      
       // Insertar el contenedor en el body o en otro elemento
       userContent.appendChild(containerCardGeneralDescription);