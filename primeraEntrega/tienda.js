let edad = prompt(`Bienvenido a la tienda de Finca El Boleado!! 
Para ingresar usted debe ser mayor de edad. 
Ingrese su edad por favor:`);

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
            -Mi carrito
            -Buscar 
            -Busqueda por VALOR
            -Salir`);

  let productoSeleccionadoMin = productoSeleccionado.toLowerCase();

  const carritoCantidadSyrah = [0];
  const carritoValorSyrah = [0];
  const carritoCantidadVermouth = [0];
  const carritoValorVermouth = [0];
  const carritoCantidadBonarda = [0];
  const carritoValorBonarda = [0];
  const carritoCantidadViognier = [0];
  const carritoValorViognier = [0];
  const carrito = [0];

  function cantidadCarrito(arr) {
    return arr.reduce((a, b) => a + b);
  }
  function valorCarrito(arrv) {
    return arrv.reduce((a, b) => a + b);
  }

  while (productoSeleccionadoMin != `salir`) {
    let menuBebida;
    let menuBebidaMin;

    let productos = [
      {
        nombre: `syrah`,
        bodega: `finca El boleado`,
        tipo: `vino tinto`,
        color: `rojo purpureo`,
        aroma: `chocolate, coco y carbón.`,
        sabor: `frutal, suave y sedoso`,
        valor: 900,
      },
      {
        nombre: `vermouth`,
        bodega: `finca El Boleado`,
        tipo: `aperitivo`,
        color: `rojo rubí`,
        aroma: `pimienta, hierbas frescas y sierra cordobesa.`,
        sabor: `refrescante y especiado.`,
        valor: 750,
      },
      {
        nombre: `bonarda`,
        bodega: `finca El Boleado`,
        tipo: `vino tinto`,
        color: `rojo intenso.`,
        aroma: `remembranza a maleza y hiervas.`,
        sabor: `largo final en boca con notas de cafe y madera.`,
        valor: 1200,
      },
      {
        nombre: `viognier`,
        bodega: `finca El Boleado`,
        tipo: `vino blanco`,
        color: `amarillo brillante con reflejos dorados.`,
        aroma: `dulce con notas de miel.`,
        sabor: `muy fresco, frutado y levemente ácido.`,
        valor: 1100,
      },
    ];
    function busquedaValor(arr) {
      let valorMaximo = Number(prompt(`Ingrese el Valor MÁXIMO del producto`));
      let valorMinimo = Number(prompt(`Ingrese el Valor MÍNIMO del producto`));
      let resultadoBusquedaValor = arr.filter(
        (obj) => obj.valor <= valorMaximo && obj.valor >= valorMinimo
      );
      let objVacioV;
      if (
        (objVacioV = Object.keys(resultadoBusquedaValor).length === 0) &&
        (objVacioV = Object.keys(resultadoBusquedaValor).length === 0)
      ) {
        alert(`No encontramos productos con los criterios ingresados`);
      } else {
        let caract = "";
        for (const p of resultadoBusquedaValor) {
          caract +=
        `NOMBRE: ${p.nombre} 
          BODEGA: ${p.bodega} 
          TIPO: ${p.tipo} 
          OJOS: ${p.color} 
          NARIZ: ${p.aroma} 
          BOCA: ${p.sabor} 
          VALOR: $${p.valor}
          \n`;
        }
        alert(caract);
      }
    }

    function busqueda(arr) {
      let busqueda = prompt(`Busqueda por NOMBRE o TIPO DE BEBIDA:`);
      busquedaMin = busqueda.toLowerCase();
      let resultadoBusquedaNombre = arr.filter((obj) => obj.nombre.includes(busquedaMin));
      let resultadoBusquedaTipo = arr.filter((obj) => obj.tipo.includes(busquedaMin));
      console.log(resultadoBusquedaNombre);
      console.log(resultadoBusquedaTipo);
      let objVacio;
      if (
        (objVacio = Object.keys(resultadoBusquedaNombre).length === 0) &&
        (objVacio = Object.keys(resultadoBusquedaTipo).length === 0)
      ) {
        alert(`No encontramos productos con los criterios ingresados`);
      } else {
        let caract = "";
        for (const p of resultadoBusquedaNombre) {
          caract +=
          `NOMBRE: ${p.nombre} 
          BODEGA: ${p.bodega} 
          TIPO: ${p.tipo} 
          OJOS: ${p.color} 
          NARIZ: ${p.aroma} 
          BOCA: ${p.sabor} 
          VALOR: $${p.valor}
          \n`;
        }
        for (const p of resultadoBusquedaTipo) {
          caract +=
          `NOMBRE: ${p.nombre} 
          BODEGA: ${p.bodega} 
          TIPO: ${p.tipo} 
          OJOS: ${p.color} 
          NARIZ: ${p.aroma} 
          BOCA: ${p.sabor} 
          VALOR: $${p.valor}
          \n`;
        }
        alert(caract);
      }
    }

    function caractProducto(prod) {
      let caract = "";
      for (const p in prod) {
        caract += p.toUpperCase() + " : " + prod[p] + "\n";
      }
      alert(caract);
    }
    class valorProducto {
      constructor(valor, cantidad) {
        this.valor = valor;
        this.cantidad = cantidad;
        this.iva = 0.21 * (this.valor * this.cantidad);
        this.descuento = 0.2 * (this.valor * this.cantidad);
        this.valorTotal = this.valor * this.cantidad + this.iva;
        this.valorTotalDescuento = this.valor * this.cantidad + this.iva - this.descuento;
      }
    }
    function productoSinDesc(v) {
      alert(`
        El valor de su compra es de:
        Valor: $ ${v.valor * v.cantidad}
        IVA: $ ${v.iva}
        Valor Total: $ ${v.valor * v.cantidad + v.iva}`);
    }
    function productoConDesc(vd) {
      alert(`
      El valor de su compra es de:
      Valor: $ ${vd.valor * vd.cantidad}
      IVA: $ ${vd.iva}
      Descuento: -$ ${vd.descuento}
      Valor Total: $ ${vd.valor * vd.cantidad + vd.iva - vd.descuento}`);
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
            caractProducto(productos[0]);
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
            if (valorSyrah.cantidad === 0) {
              alert(`Por favor ingrese un numero distinto de 0`);
            } else if (valorSyrah.cantidad <= 2 && valorSyrah.cantidad > 0) {
              productoSinDesc(valorSyrah);
              carritoCantidadSyrah.push(valorSyrah.cantidad);
              carritoValorSyrah.push(valorSyrah.valor * valorSyrah.cantidad + valorSyrah.iva);
              carrito.push(valorSyrah.valorTotal);
            } else if (valorSyrah.cantidad >= 3) {
              productoConDesc(valorSyrah);
              carritoCantidadSyrah.push(valorSyrah.cantidad);
              carritoValorSyrah.push(valorSyrah.valorTotalDescuento);
              carrito.push(valorSyrah.valorTotalDescuento);
            }
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
              -Mi carrito
              -Buscar
              -Busqueda por VALOR
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
            caractProducto(productos[1]);
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
            if (valorVermouth.cantidad === 0) {
              alert(`Por favor ingrese un numero distinto de 0`);
            } else if (valorVermouth.cantidad <= 2) {
              productoSinDesc(valorVermouth);

              carritoCantidadVermouth.push(valorVermouth.cantidad);
              carritoValorVermouth.push(valorVermouth.valorTotal);
              carrito.push(valorVermouth.valorTotal);
            } else if (valorVermouth.cantidad >= 3) {
              productoConDesc(valorVermouth);

              carritoCantidadVermouth.push(valorVermouth.cantidad);
              carritoValorVermouth.push(valorVermouth.valorTotalDescuento);
              carrito.push(valorVermouth.valorTotalDescuento);
            }
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
              -Mi carrito
              -Buscar
              -Busqueda por VALOR
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
            caractProducto(productos[2]);
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
            if (valorBonarda.cantidad === 0) {
              alert(`Por favor ingrese un numero distinto de 0`);
            } else if (valorBonarda.cantidad <= 2) {
              productoSinDesc(valorBonarda);

              carritoCantidadBonarda.push(valorBonarda.cantidad);
              carritoValorBonarda.push(valorBonarda.valorTotal);
              carrito.push(valorBonarda.valorTotal);
            } else if (valorBonarda.cantidad >= 3) {
              productoConDesc(valorBonarda);

              carritoCantidadBonarda.push(valorBonarda.cantidad);
              carritoValorBonarda.push(valorBonarda.valorTotalDescuento);
              carrito.push(valorBonarda.valorTotalDescuento);
            }
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
                -Mi carrito
                -Buscar
                -Busqueda por VALOR
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
            caractProducto(productos[3]);
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
            if (valorViognier.cantidad === 0) {
              alert(`Por favor ingrese un numero distinto de 0`);
            } else if (valorViognier.cantidad <= 2) {
              productoSinDesc(valorViognier);

              carritoCantidadViognier.push(valorViognier.cantidad);
              carritoValorViognier.push(valorViognier.valorTotal);
              carrito.push(valorViognier.valorTotal);
            } else if (valorViognier.cantidad >= 3) {
              productoConDesc(valorViognier);

              carritoCantidadViognier.push(valorViognier.cantidad);
              carritoValorViognier.push(valorViognier.valorTotalDescuento);
              carrito.push(valorViognier.valorTotalDescuento);
            }
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
                -Mi carrito
                -Buscar
                -Busqueda por VALOR
                -Salir`);

        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
        break;
      case `mi carrito`:
        alert(
          `Syrah: 
        Cantidad: ${cantidadCarrito(carritoCantidadSyrah)} botellas. 
        Valor: $${valorCarrito(carritoValorSyrah)}.

        Vermouth:
        Cantidad: ${cantidadCarrito(carritoCantidadVermouth)} botellas.
        Valor: $${valorCarrito(carritoValorVermouth)}.

        Bonarda:
        Cantidad: ${cantidadCarrito(carritoCantidadBonarda)} botellas.
        Valor: $${valorCarrito(carritoValorBonarda)}.

        Viognier:
        Cantidad: ${cantidadCarrito(carritoCantidadViognier)} botellas.
        Valor: $${valorCarrito(carritoValorViognier)}.

        El valor total de su compra es de $ ${valorCarrito(carrito)}`
        );

        productoSeleccionado = prompt(`Seleccione el producto en el que usted esta interesado:
                -Syrah
                -Vermouth
                -Bonarda
                -Viognier
                -Mi carrito
                -Buscar
                -Busqueda por VALOR
                -Salir`);

        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
        break;
      case `buscar`:
        busqueda(productos);

        productoSeleccionado = prompt(`Seleccione el producto en el que usted esta interesado:
        -Syrah
        -Vermouth
        -Bonarda
        -Viognier
        -Mi carrito
        -Buscar
        -Busqueda por VALOR
        -Salir`);
        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
        break;

      case `busqueda por valor`:
        busquedaValor(productos);

        productoSeleccionado = prompt(`Seleccione el producto en el que usted esta interesado:
        -Syrah
        -Vermouth
        -Bonarda
        -Viognier
        -Mi carrito
        -Buscar
        -Busqueda por VALOR
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
                -Mi carrito
                -Buscar
                -Busqueda por VALOR
                -Salir`);
        productoSeleccionadoMin = productoSeleccionado.toLowerCase();
        break;
    }
  }
} else if (edad < 18) {
  alert(`Eres menor de edad. 
  No puedes entrar.`);
}
alert("Gracias por su visita!");
