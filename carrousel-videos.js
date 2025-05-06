
console.log("carrousel-videos.js");




const idVideo1 = document.currentScript.getAttribute('data-id1');
const idVideo2 = document.currentScript.getAttribute('data-id2');
const idVideo3 = document.currentScript.getAttribute('data-id3');

console.log(idVideo1);
console.log(idVideo2);
console.log(idVideo3);



// Estilos generados dinámicamente
    const styleCarrousel = document.createElement('style');
    styleCarrousel.innerHTML = `
  
      #videoContainer {
        display: flex;
        overflow-x: auto;
        gap: 12px;
        padding: 16px;
        box-sizing: border-box;
      }
      iframe {
        width: 100%; /* Hacer el iframe responsivo */
        max-width: 400px; /* Ancho máximo */
        aspect-ratio: 9 / 16; /* Proporción 9:16 */
        border-radius: 8px; /* Bordes redondeados */
        background-color: black; /* Fondo negro para el video */
      }
    `;
    document.head.appendChild(styleCarrousel);

    const driveLinks = [
        idVideo1,
        idVideo2,
        idVideo3
    ];

    const containerVideosCarrousel = document.getElementById('product_form').parentNode;

    let containerVideos = document.createElement('div');
    containerVideos.id = "videoContainer";


    

    driveLinks.forEach(id => {
      const iframe = document.createElement('iframe');
      iframe.src = `https://drive.google.com/file/d/${id}/preview`; // Agrega autoplay y mute
      iframe.frameBorder = "0";
      iframe.allowFullscreen = true;
      containerVideos.appendChild(iframe);
    });

    containerVideosCarrousel.appendChild(containerVideos);