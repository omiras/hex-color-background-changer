// Implementar solución aquí
function changeColor() {
  console.log("Me has hecho click!");
  let randomHexValue = hexColorRandom();

  document.querySelector("body").style.backgroundColor = randomHexValue;

  // TODO: Añadir el color al <span> adecuado

  document.querySelector("#hex-value").textContent = randomHexValue;
}
//document.querySelector("#hex-value").innerHTML = `<span style="background-color: red"> ${randomHexValue}`;

/**
 *
 * Opcion 1 : implementad esta funcion vosotros mismos
 */
function hexColorRandom() {
  const hexValues = "0123456789ABCDEF";
  let result = "#";

  // necesitamos generar 6 números
  // Los voy a guardar en un string (pero podria ser un array)

  // un for de 0 a 5 (6 veces)
  // Para iteración del for, tengo que acumular un número alterorio de hexValues

  for (let i = 0; i < 6; i++) {
    const numAletaorio = hexValues[parseInt(Math.random() * hexValues.length)];
    result = result + numAletaorio;
  }

  return result;
}

/**
 * Opcion 2: Buscad por Internet una manera de generar un color aleatorio hexadecimal en JavaScript
 */
