/* 
-- Modelo de la pagina

<div>
            <img
              src="../public/images/viaje-especifico/portada-viaje.jpg"
              alt=""
              style="height: 50vh"
              class="w-full object-cover object-center"
            />
          </div>
      
          <section>
            <div>
              <div class="mx-auto p-4 leading-none text-center">
                <h1 class="font-bold text-3xl md:text-5xl">Cuba, La Habana</h1>
                <p class="mt-2">desde</p>
                <p class="paquetes__precio">2 x $1.790.000</p>
                <div class="flex justify-center">
                  <a href="" class="flex">
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
                      Comprar Paquete
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 max-w-2xl mx-auto">
              <p class="mt-2">
                Entras x Cayo Santa María Sales x habana Cuba 🇨🇺 PROGRAMA INCLUYE (3
                estrellas)
              </p>
      
              <p class="mt-2">
                SEGURO DE ASISTENCIA EN VIAJES VISA CUBA TKT AEREO COPA SANTIAGO /
                SANTA CLARA / LA HABANA / SANTIAGO
              </p>
              <p class="mt-2">CLASE L SUJETA A DISPONIBILIDAD IMPUESTOS</p>
              <p class="mt-2">
                AEREOS Q + TAX TRASLADO (REGULAR) AEROPUERTO SANTA CLARA/ HOTEL CAYO
              </p>
      
              <p class="mt-2">
                SANTA MARIA O ENSENACHOS 4 NTS HTL STARFISH CAYO SANTA MARIA /ESTANDAR
              </p>
      
              <p class="mt-2">
                TODO INCLUIDO TRASLADO REGULAR HOTEL EN CAYO SANTA MARIA / HOTEL EN
                HAVANA CSM -3 NTS HTL STARFISH MONTE HABANA /ESTANDAR D. CONTINENTAL
                TRASLADO HOTEL EN HABANA / AEROPUERTO HABANA TERMINAL 1 REGULAR HAV
              </p>
            </div>
          </section>
          <section>
            <div class="p-2 flex flex-col lg:flex-row justify-center items-center">
              <div class="max-w-lg">
                <h1 class="text-4xl font-bold mb-6">Contáctanos</h1>
                <img
                  src="../public/images/contactanos/persona-viajando-avion.jpg"
                  alt=""
                  class="rounded-lg"
                />
              </div>
              <div class="flex flex-col max-w-sm lg:px-8">
                <h2 class="text-gray-900 text-3xl leading-none mb-1 font-medium">
                  ¿Donde quieres viajar?
                </h2>
                <p class="leading-relaxed mb-5 text-gray-600 mt-4">
                  Si tienes duda o requieres de un paquete en especifico, envianos un
                  mensaje.
                </p>
                <input
                  class="bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4"
                  placeholder="Nombre"
                  type="text"
                />
                <input
                  class="bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4"
                  placeholder="Email"
                  type="email"
                />
                <input
                  class="bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4"
                  placeholder="País de destino"
                  type="text"
                />
                <textarea
                  class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-green-500 text-base px-4 py-2 mb-4 resize-none"
                  placeholder="Mensaje"
                ></textarea>
                <button
                  class="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                >
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </section>
*/

//import assets

//import libraries
const axios = require("axios").default;

const param = document.URL.split("?")[1];

const requestPaqueteURL = `https://cors-anywhere.herokuapp.com/https://administrador.turismocardoza.cl/paquete/${param}`;

let data;

axios.get(requestPaqueteURL).then((res) => {
	if (!res.data.nombre) {
		console.log("Paquete no encontrado!");
		document.location.href = document.location.origin;
	}

	let infoPaqueteHTML = document.createElement("div");
	infoPaqueteHTML.innerHTML = `

  <img
  src=""
  alt=""
  style="height: 50vh"
  class="w-full object-cover object-center"
/>
</div>

<section>
<div>
  <div class="mx-auto p-4 leading-none text-center">
    <h1 class="font-bold text-3xl md:text-5xl">${res.data.nombre}</h1>
    <p class="mt-2">desde</p>
    <p class="paquetes__precio">${res.data.precio}</p>
    <div class="flex justify-center">
      <a href="${res.data.linkPago}" class="flex">
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
          Comprar Paquete
        </div>
      </a>
    </div>
  </div>
</div>
<div class="p-4 max-w-2xl mx-auto">
  <p class="mt-2">
  ${new Intl.DateTimeFormat('en-GB').format(new Date(res.data.fecha))} , ${res.data.duracion} noches
  </p>  
  <p class="mt-2">
  ${res.data.categoria} , ${res.data.subcat}
  </p>
  <p class="mt-2">
  ${res.data.desc}
  </p>
</div>
</section> `;
  let main = document.querySelector('main');  
  main.insertAdjacentElement('afterbegin', infoPaqueteHTML);
});
