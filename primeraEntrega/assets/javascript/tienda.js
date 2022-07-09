//*** 1)  Crear un algoritmo con un condicional:*/

// let bebidaFavorita =  prompt(`Seleccione cual de estas bebidas es su favorita:
//         Vino blanco.
//         Vino tinto.
//         Vermouth.`);
// console.log(bebidaFavorita);
// let bebidaFavoritaMin = bebidaFavorita.toLowerCase();
// console.log(bebidaFavoritaMin);
// if (isNaN(bebidaFavorita)){
// if (bebidaFavoritaMin === `vino blanco`) {
//     alert(`Maridaje: Carnes blancas`)
// } else if (bebidaFavoritaMin === `vino tinto`){
//     alert(`Maridaje: Carnes rojas y pastas frescas`)
// } else if (bebidaFavoritaMin === `vermouth`) {
//     alert(`Maridaje: Embutidos y quesos picantes`)
// } else {alert(`La bebida seleccionada no es comercializada por nuestra tienda`)};
// } else {alert(`El valor ingresado es incorrecto.`)
// };

//*** 2) Crear un algoritmo utilizando un ciclo: */

// bebidaFavorita =  prompt(`Seleccione una bebida para saber su costo:
//         Vino blanco.
//         Vino tinto.
//         Vermouth.`);
// bebidaFavoritaMin = bebidaFavorita.toLowerCase();

// switch (bebidaFavoritaMin) {
//     case `vino blanco`:
//         alert(`El valor es de $900`)
//         break;
//     case `vino tinto`:
//         alert(`El valor es de $1100`)
//         break;
//     case `vermouth`:
//         alert(`El valor es de $750`)
//         break;
//     default:
//         alert(`La bebida seleccionada no es comercializada por nuestra tienda`)
// }

//** 3) Armar un simulador interactivo, la estructura final de tu proyecto integrador: */

let edad = prompt(`Bienvenido a la tienda de Finca El Boleado!! 
Para ingresar usted debe ser mayor de edad. 
Ingrese su edad por favor:`);

edad.toLowerCase();

while (isNaN(edad)) {
  edad = prompt(`El valor ingresado es incorrecto.
  Ingrese otro valor por favor:`);
}

if (edad >= 18) {
  let productoSeleccionado = prompt(`Seleccione el producto en el que usted esta interesado:
            -Syrah
            -Vermouth
            -Bonarda
            -Viognier
            -Salir`);

  let productoSeleccionadoMin = productoSeleccionado.toLowerCase();

  while (productoSeleccionadoMin != `salir`) {
    let menuBebida;
    let menuBebidaMin;

    class caracteristicas {
      constructor(bodega, color, aroma, sabor) {
        this.bodega = `BODEGA: ${bodega}`;
        this.color = `OJOS: ${color}`;
        this.aroma = `NARIZ: ${aroma}`;
        this.sabor = `BOCA: ${sabor}`;
      }
    }

    class valorProducto {
      constructor(valor, cantidad) {
        this.valor = valor;
        this.cantidad = cantidad;
        this.valorParcial = valor * cantidad;
        this.iva = 0.21 * this.valorParcial;
        this.descuento = 0.2 * this.valorParcial;
        this.valorTotal = this.valorParcial + this.iva;
        this.valorTotalDescuento = this.valorParcial + this.iva - this.descuento;
      }
    }

    switch (productoSeleccionadoMin) {
      case `syrah`:
        alert(`Usted ha seleccionado ${productoSeleccionadoMin.toUpperCase()}.
        Por favor ingrese que desearía saber o hacer usted con este producto?`);

        menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
        -Características
        -Valor
        -Adquirir
        -Volver`);
        menuBebidaMin = menuBebida.toLowerCase();

        while (menuBebidaMin != `volver`) {
          if (menuBebidaMin === `caracteristicas`) {
            const caracSyrah = new caracteristicas(
              `Finca El Boleado`,
              `Rojo purpureo`,
              `Chocolate, coco y carbón.`,
              `Frutal, suave y sedoso`
            );
            alert(`${caracSyrah.bodega}
              ${caracSyrah.color}
              ${caracSyrah.aroma}
              ${caracSyrah.sabor}`);
          } else if (menuBebidaMin === `valor`) {
            alert(`El costo del producto seleccionado es de $900 + IVA`);
          } else if (menuBebidaMin === `adquirir`) {
            const valorSyrah = new valorProducto(
              900,
              Number(
                prompt(`Cuantas unidades desea adquirir?
                  Le recordamos que adquiriendo 3 unidades o más del mismo producto usted obtiene un 20% de descuento`)
              )
            );
            if (valorSyrah.cantidad <= 2) {
              alert(
                `El valor de su compra es de:
                      Valor: $ ${valorSyrah.valorParcial} 
                      IVA: $ ${valorSyrah.iva}
                      Valor total: $ ${valorSyrah.valorTotal}`
              );
            } else if (valorSyrah.cantidad >= 3) {
              alert(`El valor de su compra con el descuento incluido es de:
                        Valor: $ ${valorSyrah.valorParcial} 
                        IVA: $ ${valorSyrah.iva}
                        Descuento: -$ ${valorSyrah.descuento}
                        Valor total: $ ${valorSyrah.valorTotalDescuento}`);
            }
            alert(`Gracias por su compra!`);
          }
          menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
          -Características
          -Valor
          -Adquirir
          -Volver`);
          menuBebidaMin = menuBebida.toLowerCase();
        }
        productoSeleccionado = prompt(`Seleccione el producto en el que usted esta interesado:
              -Syrah
              -Vermouth
              -Bonarda
              -Viognier
              -Salir`);

        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
        break;

      case `vermouth`:
        alert(`Usted ha seleccionado ${productoSeleccionadoMin.toUpperCase()}.
        Por favor ingrese que desearía saber o hacer usted con este producto?`);

        menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
        -Características
        -Valor
        -Adquirir
        -Volver`);
        menuBebidaMin = menuBebida.toLowerCase();

        while (menuBebidaMin != `volver`) {
          if (menuBebidaMin === `caracteristicas`) {
            const caracVermouth = new caracteristicas(
              `Finca El Boleado`,
              `Rojo rubí`,
              `Pimienta, hierbas frescas y sierra cordobesa.`,
              `Refrescante y especiado.`
            );
            alert(`${caracVermouth.bodega}
            ${caracVermouth.color}
            ${caracVermouth.aroma}
            ${caracVermouth.sabor}`);
          } else if (menuBebidaMin === `valor`) {
            alert(`El costo del producto seleccionado es de $750 + IVA`);
          } else if (menuBebidaMin === `adquirir`) {
            const valorVermouth = new valorProducto(
              750,
              Number(
                prompt(`Cuantas unidades desea adquirir?
            Le recordamos que adquiriendo 3 unidades o más del mismo producto usted obtiene un 20% de descuento`)
              )
            );
            if (valorVermouth.cantidad <= 2) {
              alert(`El valor de su compra es de:
              Valor: $ ${valorVermouth.valorParcial} 
              IVA: $ ${valorVermouth.iva}
              Valor total: $ ${valorVermouth.valorTotal}`);
            } else if (valorVermouth.cantidad >= 3) {
              alert(`El valor de su compra con el descuento incluido es de:
              Valor: $ ${valorVermouth.valorParcial} 
              IVA: $ ${valorVermouth.iva}
              Descuento: -$ ${valorVermouth.descuento}
              Valor total: $ ${valorVermouth.valorTotalDescuento}`);
            }
            alert(`Gracias por su compra`);
          }
          menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
          -Características
          -Valor
          -Adquirir
          -Volver`);
          menuBebidaMin = menuBebida.toLowerCase();
        }
        productoSeleccionado = prompt(`Seleccione el producto en el que usted esta interesado:
              -Syrah
              -Vermouth
              -Bonarda
              -Viognier
              -Salir`);

        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
        break;

      case `bonarda`:
        alert(`Usted ha seleccionado ${productoSeleccionadoMin.toUpperCase()}.
        Por favor ingrese que desearía saber o hacer usted con este producto?`);

        menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
        -Características
        -Valor
        -Adquirir
        -Volver`);
        menuBebidaMin = menuBebida.toLowerCase();

        while (menuBebidaMin != `volver`) {
          if (menuBebidaMin === `caracteristicas`) {
            const caracBonarda = new caracteristicas(
              `Finca El Boleado`,
              `Rojo intenso.`,
              `Remembranza a maleza y hiervas.`,
              `Largo final en boca con notas de cafe y madera.`
            );
            alert(`${caracBonarda.bodega}
            ${caracBonarda.color}
            ${caracBonarda.aroma}
            ${caracBonarda.sabor}`);
          } else if (menuBebidaMin === `valor`) {
            alert(`El costo del producto seleccionado es de $1200 + IVA`);
          } else if (menuBebidaMin === `adquirir`) {
            const valorBonarda = new valorProducto(
              1200,
              Number(
                prompt(`Cuantas unidades desea adquirir
            Le recordamos que adquiriendo 3 unidades o más del mismo producto usted obtiene un 20% de descuento`)
              )
            );
            if (valorBonarda.cantidad <= 2) {
              alert(`El valor de su compra es de:
              Valor: $ ${valorBonarda.valorParcial} 
              IVA: $ ${valorBonarda.iva}
              Valor total: $ ${valorBonarda.valorTotal}`);
            } else if (valorBonarda.cantidad >= 3) {
              alert(`El valor de su compra con el descuento incluido es de:
              Valor: $ ${valorBonarda.valorParcial} 
              IVA: $ ${valorBonarda.iva}
              Descuento: -$ ${valorBonarda.descuento}
              Valor total: $ ${valorBonarda.valorTotalDescuento}`);
            }
            alert(`Gracias por su compra!`);
          }
          menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
          -Características
          -Valor
          -Adquirir
          -Volver`);
          menuBebidaMin = menuBebida.toLowerCase();
        }
        productoSeleccionado = prompt(`Seleccione el producto en el que usted esta interesado:
                -Syrah
                -Vermouth
                -Bonarda
                -Viognier
                -Salir`);

        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
        break;

      case `viognier`:
        alert(`Usted ha seleccionado ${productoSeleccionadoMin.toUpperCase()}.
        Por favor ingrese que desearía saber o hacer usted con este producto?`);
        menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
        -Características
        -Valor
        -Adquirir
        -Volver`);
        menuBebidaMin = menuBebida.toLowerCase();
        while (menuBebidaMin != `volver`) {
          if (menuBebidaMin === `caracteristicas`) {
            const caracViognier = new caracteristicas(
              `Finca El Boleado`,
              `Amarillo brillante con reflejos dorados.`,
              `Dulce con notas de miel.`,
              `Muy fresco, frutado y levemente ácido.`
            );
            alert(`${caracViognier.bodega}
            ${caracViognier.color}
            ${caracViognier.aroma}
            ${caracViognier.sabor}`);
          } else if (menuBebidaMin === `valor`) {
            alert(`El costo del producto seleccionado es de $1100 + IVA`);
          } else if (menuBebidaMin === `adquirir`) {
            const valorViognier = new valorProducto(
              1100,
              Number(
                prompt(`Cuantas unidades desea adquirir
            Le recordamos que adquiriendo 3 unidades o más del mismo producto usted obtiene un 20% de descuento`)
              )
            );
            if (valorViognier.cantidad <= 2) {
              alert(`El valor de su compra es de:
              Valor: $ ${valorViognier.valorParcial} 
              IVA: $ ${valorViognier.iva}
              Valor total: $ ${valorViognier.valorTotal}`);
            } else if (valorViognier.cantidad >= 3) {
              alert(`El valor de su compra con el descuento incluido es de:
              Valor: $ ${valorViognier.valorParcial} 
              IVA: $ ${valorViognier.iva}
              Descuento: -$ ${valorViognier.descuento}
              Valor total: $ ${valorViognier.valorTotalDescuento}`);
            }
            alert(`Gracias por su compra!`);
          }
          menuBebida = prompt(`${productoSeleccionado.toUpperCase()}
          -Características
          -Valor
          -Adquirir
          -Volver`);
          menuBebidaMin = menuBebida.toLowerCase();
        }
        productoSeleccionado = prompt(`Seleccione el producto en el que usted esta interesado:
                -Syrah
                -Vermouth
                -Bonarda
                -Viognier
                -Salir`);

        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
        break;
      default:
        productoSeleccionado =
          prompt(`El producto seleccionado no es comercializado por nuestra tienda. 
      Por favor seleccione un producto de la lista:
                -Syrah
                -Vermouth
                -Bonarda
                -Viognier
                -Salir`);

        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
    }
  }
} else if (edad < 18) {
  alert(`Eres menor de edad. 
  No puedes entrar.`);
}
alert("Gracias por su visita!");
