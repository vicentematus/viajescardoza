/*

--Modelo para paquetes:
<section class="paquetes__card">
    <div>
        <img
        src="/public/images/viajes-destacados/viaje-colombia.png"
        alt=""
        class="paquetes__imagen"
        />
    </div>
    <div class="paquetes__descripcion">
        <div class="px-2 md:px-4 py-4">
        <div>
            <h3 class="paquetes__titulo">Cuba, La Habana</h3>
        </div>
        <div>
            <p class="paquetes__subtitulo">Precio por Persona</p>
            <h4 class="paquetes__precio">$150.000</h4>
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
                Ver Paquete
            </div>
            </a>
        </div>
        </div>
    </div>
</section>

*/
//import assets
import('./styles.css');

//import libraries
const axios = require('axios').default;

const APIServer = 'localhost'

axios.get('https://cors-anywhere.herokuapp.com/http://turismocardoza.cl/')
.then(res =>{
    console.log(res);
})
.catch(err =>{
    console.log(err);
})