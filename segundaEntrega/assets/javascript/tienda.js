let inputEdad = document.getElementById("input-edad");
let btnInputEdad = document.getElementById("btn-inputedad");

inputEdad.oninput = (e) => {
  let edad = e.target.value;
  btnInputEdad.onclick = () => {
    let edadEntrada = edad;
    inputEdad.setAttribute("disabled", "");
    btnInputEdad.setAttribute("disabled", "");

    if (edadEntrada >= 18) {
      let bienvenido = document.createElement(`div`);
      bienvenido.classList.add(`text-center`, `m-2`, `border`);
      bienvenido.innerHTML = `<h4>Bienvenido a nuestra tienda!</h4>`;
      let bienvenidoDiv = document.getElementById(`bienvenido`);
      bienvenidoDiv.insertBefore(bienvenido, bienvenidoDiv.children[3]);

      let productos = [
        {
          nombre: `syrah`,
          bodega: `finca El boleado`,
          tipo: `vino tinto`,
          color: `rojo purpureo`,
          aroma: `chocolate, coco y carbón.`,
          sabor: `frutal, suave y sedoso`,
          valor: 900,
          cantidad: 1,
        },
        {
          nombre: `vermouth`,
          bodega: `finca El Boleado`,
          tipo: `aperitivo`,
          color: `rojo rubí`,
          aroma: `pimienta, hierbas frescas y sierra cordobesa.`,
          sabor: `refrescante y especiado.`,
          valor: 750,
          cantidad: 1,
        },
        {
          nombre: `bonarda`,
          bodega: `finca El Boleado`,
          tipo: `vino tinto`,
          color: `rojo intenso.`,
          aroma: `remembranza a maleza y hiervas.`,
          sabor: `largo final en boca con notas de cafe y madera.`,
          valor: 1200,
          cantidad: 1,
        },
        {
          nombre: `viognier`,
          bodega: `finca El Boleado`,
          tipo: `vino blanco`,
          color: `amarillo brillante con reflejos dorados.`,
          aroma: `dulce con notas de miel.`,
          sabor: `muy fresco, frutado y levemente ácido.`,
          valor: 1100,
          cantidad: 1,
        },
      ];

      let busquedaNombreTipo = document.getElementById(`buscador-texto`);
      let busquedaValorMaximo = document.getElementById(`buscador-precioMax`);
      let busquedaValorMinimo = document.getElementById(`buscador-precioMin`);
      let btnBusqueda = document.getElementById(`btn-busqueda`);
      let divObjetosEncontrados = document.getElementById(`div-objetosEncontrados`);

      function busqueda(arr) {
        let busquedaValorMax = +busquedaValorMaximo.value;
        let busquedaValorMin = +busquedaValorMinimo.value;
        let busquedaTexto = busquedaNombreTipo.value;
        busquedaTextoMin = busquedaTexto.toLowerCase();

        let resultadoBusquedaNombre = arr.filter((obj) => obj.nombre.includes(busquedaTextoMin));
        let resultadoBusquedaTipo = arr.filter((obj) => obj.tipo.includes(busquedaTextoMin));
        let resultadoBusquedaValor = arr.filter(
          (obj) => obj.valor <= busquedaValorMax && obj.valor >= busquedaValorMin
        );

        if (busquedaTextoMin === "" && busquedaValorMax === 0 && busquedaValorMin === 0) {
          let ProdEncontrados = document.createElement(`div`);
          ProdEncontrados.setAttribute(`class`, `d-flex`);
          divObjetosEncontrados.append(ProdEncontrados);

          let productoBuscado = document.createElement(`div`);
          productoBuscado.setAttribute(`class`, `w-auto border p-2 m-2 rounded`);
          productoBuscado.innerText = `El producto solicitado no pudo ser encontrado`;
          ProdEncontrados.appendChild(productoBuscado);

          busquedaNombreTipo.setAttribute("disabled", "");
          busquedaValorMaximo.setAttribute("disabled", "");
          busquedaValorMinimo.setAttribute("disabled", "");
          btnBusqueda.setAttribute("disabled", "");

          let btnNuevaBusqueda = document.getElementById("btn-nuevaBusqueda");
          btnNuevaBusqueda.onclick = () => {
            ProdEncontrados.remove(productoBuscado);
            busquedaNombreTipo.removeAttribute("disabled", "");
            busquedaValorMaximo.removeAttribute("disabled", "");
            busquedaValorMinimo.removeAttribute("disabled", "");
            btnBusqueda.removeAttribute("disabled", "");
          };
        } else if (busquedaTextoMin != "" && busquedaValorMax === 0 && busquedaValorMin === 0) {
          busquedaNombreTipo.setAttribute("disabled", "");
          busquedaValorMaximo.setAttribute("disabled", "");
          busquedaValorMinimo.setAttribute("disabled", "");
          btnBusqueda.setAttribute("disabled", "");

          let ProdEncontrados = document.createElement(`div`);
          ProdEncontrados.setAttribute(`class`, `d-flex`);
          divObjetosEncontrados.append(ProdEncontrados);

          let caract = ``;
          for (const p of resultadoBusquedaNombre) {
            let productoBuscado = document.createElement(`ul`);
            productoBuscado.setAttribute(`class`, `w-auto border p-2 m-2 rounded list-unstyled`);
            caract = `<li>NOMBRE: ${p.nombre}</li> 
            <li>BODEGA: ${p.bodega}</li> 
            <li>TIPO: ${p.tipo}</li> 
            <li>OJOS: ${p.color}</li> 
            <li>NARIZ: ${p.aroma}</li> 
            <li>BOCA: ${p.sabor}</li> 
            <li>VALOR: $${p.valor}</li>`;

            productoBuscado.innerHTML = caract;
            ProdEncontrados.appendChild(productoBuscado);

            let btnNuevaBusqueda = document.getElementById("btn-nuevaBusqueda");
            btnNuevaBusqueda.onclick = () => {
              ProdEncontrados.remove(productoBuscado);
              busquedaNombreTipo.removeAttribute("disabled", "");
              busquedaValorMaximo.removeAttribute("disabled", "");
              busquedaValorMinimo.removeAttribute("disabled", "");
              btnBusqueda.removeAttribute("disabled", "");
            };
          }

          for (const p of resultadoBusquedaTipo) {
            productoBuscado = document.createElement(`ul`);
            productoBuscado.setAttribute(
              `class`,
              `w-auto border p-2 m-2 rounded list-unstyled shadow`
            );
            caract = `<li>NOMBRE: ${p.nombre}</li>
            <li>BODEGA: ${p.bodega}</li> 
            <li>TIPO: ${p.tipo}</li> 
            <li>OJOS: ${p.color}</li> 
            <li>NARIZ: ${p.aroma}</li> 
            <li>BOCA: ${p.sabor}</li> 
            <li>VALOR: $${p.valor}</li>`;

            productoBuscado.innerHTML = caract;
            ProdEncontrados.appendChild(productoBuscado);

            let btnNuevaBusqueda = document.getElementById("btn-nuevaBusqueda");
            btnNuevaBusqueda.onclick = () => {
              ProdEncontrados.remove(productoBuscado);
              busquedaNombreTipo.removeAttribute("disabled", "");
              busquedaValorMaximo.removeAttribute("disabled", "");
              busquedaValorMinimo.removeAttribute("disabled", "");
              btnBusqueda.removeAttribute("disabled", "");
            };
          }
        } else if (busquedaTextoMin === "" && busquedaValorMax != 0 && busquedaValorMin != 0) {
          busquedaNombreTipo.setAttribute("disabled", "");
          busquedaValorMaximo.setAttribute("disabled", "");
          busquedaValorMinimo.setAttribute("disabled", "");
          btnBusqueda.setAttribute("disabled", "");

          let ProdEncontrados = document.createElement(`div`);
          ProdEncontrados.setAttribute(`class`, `d-flex`);
          divObjetosEncontrados.append(ProdEncontrados);

          for (const p of resultadoBusquedaValor) {
            productoBuscado = document.createElement(`ul`);
            productoBuscado.setAttribute(
              `class`,
              `w-auto border p-2 m-2 rounded list-unstyled shadow`
            );
            caract = `<li>NOMBRE: ${p.nombre}</li>
            <li>BODEGA: ${p.bodega}</li> 
            <li>TIPO: ${p.tipo}</li> 
            <li>OJOS: ${p.color}</li> 
            <li>NARIZ: ${p.aroma}</li> 
            <li>BOCA: ${p.sabor}</li> 
            <li>VALOR: $${p.valor}</li>`;
            productoBuscado.innerHTML = caract;
            ProdEncontrados.appendChild(productoBuscado);

            let btnNuevaBusqueda = document.getElementById("btn-nuevaBusqueda");
            btnNuevaBusqueda.onclick = () => {
              ProdEncontrados.remove(productoBuscado);
              busquedaNombreTipo.removeAttribute("disabled", "");
              busquedaValorMaximo.removeAttribute("disabled", "");
              busquedaValorMinimo.removeAttribute("disabled", "");
              btnBusqueda.removeAttribute("disabled", "");
            };
          }
        }
      }

      btnBusqueda.onclick = () => busqueda(productos);

      function crearElementoCaracteristicas(prod, el) {
        let contenedor = document.createElement(`ul`);
        contenedor.setAttribute("class", "list-group list-group-flush");
        contenedor.setAttribute("id", "elemento-creado");
        contenedor.innerHTML = `<li class="list-group-item">NOMBRE: ${prod.nombre}</li> 
                              <li class="list-group-item">BODEGA: ${prod.bodega}</li>
                              <li class="list-group-item">TIPO: ${prod.tipo}</li> 
                              <li class="list-group-item">OJOS: ${prod.color}</li> 
                              <li class="list-group-item">NARIZ: ${prod.aroma}</li> 
                              <li class="list-group-item">BOCA: ${prod.sabor}</li> 
                              <li class="list-group-item">VALOR: $${prod.valor}</li>`;
        let elemento = document.getElementById(el);
        elemento.appendChild(contenedor);
      }
      function eliminarElementoCaracteristicas(el) {
        let divCaract = document.getElementById(el);
        divCaract.remove(divCaract.children);
      }

      let btnSyrah = document.getElementById("btn-caractSyrah");
      btnSyrah.onmouseover = () => crearElementoCaracteristicas(productos[0], "div-caractSyrah");
      btnSyrah.onmouseout = () => eliminarElementoCaracteristicas("elemento-creado");

      let btnVermouth = document.getElementById("btn-caractVermouth");
      btnVermouth.onmouseover = () =>
        crearElementoCaracteristicas(productos[1], "div-caractVermouth");
      btnVermouth.onmouseout = () => eliminarElementoCaracteristicas("elemento-creado");

      let btnBonarda = document.getElementById("btn-caractBonarda");
      btnBonarda.onmouseover = () =>
        crearElementoCaracteristicas(productos[2], "div-caractBonarda");
      btnBonarda.onmouseout = () => eliminarElementoCaracteristicas("elemento-creado");

      let btnViognier = document.getElementById("btn-caractViognier");
      btnViognier.onmouseover = () =>
        crearElementoCaracteristicas(productos[3], "div-caractViognier");
      btnViognier.onmouseout = () => eliminarElementoCaracteristicas("elemento-creado");

      let productoConDescuento = document.getElementById("img");
      let cardDiv = document.getElementById("descuento-div");
      let divDescuento = document.createElement(`p`);
      divDescuento.className = "cardDescuento";
      divDescuento.innerText = "Producto con descuento!";
      productoConDescuento.onmouseover = () => {
        cardDiv.append(divDescuento);
      };

      const carritoS = [];
      const carritoV = [];
      const carritoB = [];
      const carritoVg = [];

      function agregarCarrito(prod, arr) {
        arr.push(prod);
      }

      let btnCarritoSyrah = document.getElementById("agregar-carrito-syrah");
      btnCarritoSyrah.onclick = () => {
        agregarCarrito(productos[0], carritoS);
        localStorage.setItem("Syrah", JSON.stringify(carritoS));
      };

      let btnCarritoVermouth = document.getElementById("agregar-carrito-vermouth");
      btnCarritoVermouth.onclick = () => {
        agregarCarrito(productos[1], carritoV);
        localStorage.setItem("Vermouth", JSON.stringify(carritoV));
      };

      let btnCarritoBonarda = document.getElementById("agregar-carrito-bonarda");
      btnCarritoBonarda.onclick = () => {
        agregarCarrito(productos[2], carritoB);
        localStorage.setItem("Bonarda", JSON.stringify(carritoB));
      };

      let btnCarritoViognier = document.getElementById("agregar-carrito-viognier");
      btnCarritoViognier.onclick = () => {
        agregarCarrito(productos[3], carritoVg);
        localStorage.setItem("Viognier", JSON.stringify(carritoVg));
      };

      let mostrarCarrito = document.getElementById("navbarDropdownMenuLink");
      mostrarCarrito.onclick = () => {
        let carritoSyrah = JSON.parse(localStorage.getItem("Syrah", carritoS));
        let carritoVermouth = JSON.parse(localStorage.getItem("Vermouth", carritoV));
        let carritoBonarda = JSON.parse(localStorage.getItem("Bonarda", carritoB));
        let carritoViognier = JSON.parse(localStorage.getItem("Viognier", carritoVg));

        let divCarritoSyrah = document.getElementById("carrito-syrah");
        let divCarritoVermouth = document.getElementById("carrito-vermouth");
        let divCarritoBonarda = document.getElementById("carrito-bonarda");
        let divCarritoViognier = document.getElementById("carrito-viognier");
        let divCarritoTotal = document.getElementById("carrito-total");

        let valorSubTotalSyrah = 0;
        let valorSubTotalVermouth = 0;
        let valorSubTotalBonarda = 0;
        let valorSubTotalViognier = 0;
        let valorTotal = 0;

        function carritoIndividual(div, obj, arr, val) {
          return (div.innerHTML = `<p> PRODUCTO: ${obj.nombre}
        TIPO: ${obj.tipo}
        VALOR: $ ${obj.valor} + $${obj.valor * 0.21}(iva)
        CANTIDAD: ${arr.reduce((a, b) => a + b.cantidad, 0)} 
        SUB-TOTAL: $ ${val}</p>`);
        }

        if (carritoSyrah) {
          for (const obj of carritoSyrah) {
            valorSubTotalSyrah = carritoSyrah.reduce((a, b) => a + b.valor, 0) * 1.21;
            carritoIndividual(divCarritoSyrah, obj, carritoSyrah, valorSubTotalSyrah);

            let btnBorrar = document.createElement(`button`);
            btnBorrar.innerText = "Eliminar";
            divCarritoSyrah.appendChild(btnBorrar);

            btnBorrar.onclick = () => {
              divCarritoSyrah.replaceChildren();
              localStorage.removeItem(`Syrah`);
              carritoS.splice(0, carritoS.length);
            };
          }
        }

        if (carritoVermouth) {
          for (const obj of carritoVermouth) {
            valorSubTotalVermouth = carritoVermouth.reduce((a, b) => a + b.valor, 0) * 1.21;
            carritoIndividual(divCarritoVermouth, obj, carritoVermouth, valorSubTotalVermouth);

            let btnBorrar = document.createElement(`button`);
            btnBorrar.innerText = "Eliminar";
            divCarritoVermouth.appendChild(btnBorrar);

            btnBorrar.onclick = () => {
              divCarritoVermouth.replaceChildren();
              localStorage.removeItem(`Vermouth`);
              carritoV.splice(0, carritoS.length);
            };
          }
        }
        if (carritoBonarda) {
          for (const obj of carritoBonarda) {
            valorSubTotalBonarda = carritoBonarda.reduce((a, b) => a + b.valor, 0) * 1.21;
            carritoIndividual(divCarritoBonarda, obj, carritoBonarda, valorSubTotalBonarda);

            let btnBorrar = document.createElement(`button`);
            btnBorrar.innerText = "Eliminar";
            divCarritoBonarda.appendChild(btnBorrar);

            btnBorrar.onclick = () => {
              divCarritoBonarda.replaceChildren();
              localStorage.removeItem(`Bonarda`);
              carritoB.splice(0, carritoS.length);
            };
          }
        }
        if (carritoViognier) {
          for (const obj of carritoViognier) {
            valorSubTotalViognier = carritoViognier.reduce((a, b) => a + b.valor, 0) * 1.21;
            carritoIndividual(divCarritoViognier, obj, carritoViognier, valorSubTotalViognier);

            let btnBorrar = document.createElement(`button`);
            btnBorrar.innerText = "Eliminar";
            divCarritoViognier.appendChild(btnBorrar);

            btnBorrar.onclick = () => {
              divCarritoViognier.replaceChildren();
              localStorage.removeItem(`Viognier`);
              carritoVg.splice(0, carritoS.length);
            };
          }
        }

        if (carritoSyrah || carritoVermouth || carritoBonarda || carritoViognier) {
          valorTotal =
            valorSubTotalSyrah +
            valorSubTotalVermouth +
            valorSubTotalBonarda +
            valorSubTotalViognier;

          divCarritoTotal.innerHTML = `<p>TOTAL DE TU COMPRA: $ ${valorTotal}</p>`;
        } else {
          divCarritoTotal.innerHTML = "";
        }
      };
    } else {
      alert(`Eres menor de edad.
      No puedes entrar.`);
    }
  };
};
