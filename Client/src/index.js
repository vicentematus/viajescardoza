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

const APIServer = 'https://cors-anywhere.herokuapp.com/http://turismocardoza.cl/'
const exampleData = [
    {
        "fotos": [],
        "_id": "5f76f45e37d20334c44f67da",
        "nombre": "A mi camita bb",
        "desc": "12312",
        "precio": 12312,
        "img": "src\\public\\uploads\\img-1601631326397",
        "categoria": "Latino America",
        "fecha": "2020-10-12T00:00:00.000Z",
        "linkPago": "www.asdkas.cl",
        "__v": 0
    },
    {
        "fotos": [],
        "_id": "5f791e7f0622b215a0157206",
        "nombre": "A la luna",
        "desc": "100% rial no fake",
        "precio": 69420,
        "img": "src\\public\\uploads\\img-1601773183316",
        "categoria": "Galactica",
        "fecha": "2021-03-21T00:00:00.000Z",
        "linkPago": "www.asdkas.cl",
        "__v": 0
    },
    {
        "fotos": [],
        "_id": "5f7c67ff537032167cdc0285",
        "nombre": "Miami",
        "desc": "MIAMI",
        "precio": 420420,
        "img": "src\\public\\uploads\\img-1601988607349",
        "categoria": "Resort",
        "fecha": "2020-10-22T00:00:00.000Z",
        "linkPago": "www.asdkas.cl",
        "__v": 0
    }
]

axios.get(APIServer)
.then(res =>{
    let data;
    if(res.data.length > 0){
        data = res.data;
    } else {
        data = exampleData;
    }
    data.forEach(paquete =>{
        const paqHTMLElement = document.createElement('section');
        paqHTMLElement.classList.add('paquetes__card');
        paqHTMLElement.innerHTML = `
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
        `;
        document.querySelector('main').appendChild(paqHTMLElement);
    });
})
.catch(err =>{
    console.log(err);
})

