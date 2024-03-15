import { teclas } from "./teclado.js";
import { pantalla } from "./pantalla.js";

let div_root = document.querySelector(".root");

let bloque_principal = `
    <div class="pantalla">${pantalla}</div>
    <div class="teclado">${teclas}</div>
`;

div_root.innerHTML=bloque_principal;