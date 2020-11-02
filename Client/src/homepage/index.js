//assets
import "../styles.css";

//import libraries
const axios = require("axios").default;

const APIServer = "https://administrador.turismocardoza.cl/";

let data;
let paquetes,
	ofertas,
	favorite = new Array();

axios
	.get(APIServer)
	.then((res) => {
		if (res.data.length > 0) {
			data = res.data;
			GenerateLists(data);
		} else {
			let errorHTML = document.createElement("section");
			errorHTML.classList.add("paquetes__card");
			errorHTML.innerHTML = `
            <div class = 'paquetes__descripcion'>
                <h3> No Hay paquetes generados</h3>
            </div>
        `;
			let errorOfertasHTML = document.createElement("section");
			errorOfertasHTML.classList.add("paquetes__card");
			errorOfertasHTML.innerHTML = `
            <div class = 'paquetes__descripcion'>
                <h3> No Hay paquetes generados</h3>
            </div>
        `;

			document
				.querySelector("#container-paquetes-homepage")
				.appendChild(errorHTML);
			document.querySelector("#destacados").appendChild(errorOfertasHTML);
		}
	})
	.catch((err) => {
		alert(err);
	});

function GenerateLists(infoPaquetes) {
	infoPaquetes.forEach((paquete, index) => {
		if (paquete.favorito) {
			GenerateFavorite(paquete);
		}

		if (paquete.oferta) {
			GenerateOferta(paquete);
		}

		GeneratePaquete(paquete);
	});
}

function GenerateFavorite(paquete) {
    let paqueteHTML = document.createElement("section");
	paqueteHTML.classList.add("paquetes__card");
	paqueteHTML.innerHTML = `<div class="max-w-xl w-full h-full p-2">
    <div
      style="
        background-image: url(${APIServer}${String(paquete.img).split("public/")[1]});
        background-repeat: no-repeat;
        background-size: cover;
      "
      class="text-white py-10"
    >
      <div
        class="ml-6 bg-yellow-300 inline-block py-2 px-8 rounded-md -mb-8"
      >
        <h2 class="text-black">Destino del mes:</h2>
      </div>
      <div
        class="bg-white text-black max-w-xs rounded-lg py-2 px-10 shadow-md"
      >
        <h3 class="uppercase font-bold text-4xl leading-none">${paquete.nombre}</h3>
        <p>Desde:</p>
        <p class="font-bold text-3xl mt-1 leading-none">${paquete.precio}</p>
        <a class="inline-block mt-2" href="/paquete.html?${paquete._id}">
          <div
            class="bg-green-500 py-2 px-4 text-white font-medium text-lg inline-flex items-center rounded-lg hover:bg-green-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="w-6 mr-2 text-purple-100"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Ver más
          </div>
        </a>
      </div>
    </div>
  </div>`;

	document
		.querySelector("#favoritos")
		.appendChild(paqueteHTML);
}

function GenerateOferta(paquete) {
	let paqueteHTML = document.createElement("section");
	paqueteHTML.classList.add("paquetes__card");
	paqueteHTML.innerHTML = `<div class="max-w-xl w-full h-full p-2">
    <div
      style="
        background-image: url(${APIServer}${String(paquete.img).split("public/")[1]});
        background-repeat: no-repeat;
        background-size: cover;
      "
      class="text-white py-10"
    >
      <div
        class="ml-6 bg-yellow-300 inline-block py-2 px-8 rounded-md -mb-8"
      >
        <h2 class="text-black">Destino del mes:</h2>
      </div>
      <div
        class="bg-white text-black max-w-xs rounded-lg py-2 px-10 shadow-md"
      >
        <h3 class="uppercase font-bold text-4xl leading-none">${paquete.nombre}</h3>
        <p>Desde:</p>
        <p class="font-bold text-3xl mt-1 leading-none">${paquete.precio}</p>
        <a class="inline-block mt-2" href="/paquete.html?${paquete._id}">
          <div
            class="bg-green-500 py-2 px-4 text-white font-medium text-lg inline-flex items-center rounded-lg hover:bg-green-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="w-6 mr-2 text-purple-100"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Ver más
          </div>
        </a>
      </div>
    </div>
  </div>`;

	document
		.querySelector("#ofertas")
		.appendChild(paqueteHTML);
}

function GeneratePaquete(paquete) {
	let paqueteHTML = document.createElement("section");
	paqueteHTML.classList.add("paquetes__card");
	paqueteHTML.innerHTML = `<div>
<img
src="${APIServer}${String(paquete.img).split("public/")[1]}"
alt=""
class="paquetes__imagen"
/>
</div>
<div class="paquetes__descripcion">
<div class="px-2 md:px-4 py-4">
<div>
    <h3 class="paquetes__titulo">${paquete.nombre}</h3>
</div>
<div>
    <p class="paquetes__subtitulo">Precio por Persona</p>
    <h4 class="paquetes__precio">$${paquete.precio}</h4>
    <a href="/paquete.html?${paquete._id}" class="flex">
    <div class="cta__paquetes">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        class="cta__icon"
        viewBox="0 0 24 24"
        stroke="currentColor"
        >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
        </svg>
        Ver Paquete
    </div>
    </a>
</div>
</div>
</div>`;

	document
		.querySelector("#container-paquetes-homepage")
		.appendChild(paqueteHTML);
}
