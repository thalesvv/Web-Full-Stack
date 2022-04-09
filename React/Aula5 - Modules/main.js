// Importação via Module

// import array from './modulos/boneco.js'; import defaut
import array,  { boneco as b, forca as f } from "./modulos/boneco.js";
import jogador,  { Jogador, categorias_disponiveis } from "./modulos/jogador.js";


console.log('/////// main.js ///////');

console.log(b);
console.log(f);
console.log(array);

console.log(new Jogador("Ana Gabriela Macedo Luchini", "ana_gab_boladona2007@yahooo.com", "animes"));
console.log(categorias_disponiveis());
console.log(jogador.cat_disp());