
let busquedaNombreTipo = document.getElementById(`buscador-texto`);
let busquedaValorMaximo = document.getElementById(`buscador-precioMax`);
let busquedaValorMinimo = document.getElementById(`buscador-precioMin`);
let btnBusqueda = document.getElementById(`btn-busqueda`);
let btnNuevaBusqueda = document.getElementById('btn-nuevaBusqueda');

const edadEntrada = JSON.parse(localStorage.getItem('edadUsuario'));

function entrada (edadUsuario) {
    
  
  if (!edadUsuario) {
    document.querySelector(`#contenedor-formulario`).innerHTML = `
    <form class='d-flex flex-column col-xl-6 text-center border rounded p-3' id='bienvenido'>
    <p class='fw-bolder my-1'>Ingrese su edad por favor</p>
    <input type='number' id='input-edad' placeholder='Ingrese su edad' class = 'my-1 text-center' min ='0'>
    <input type='submit' id='btn-inputEdad' value='Acceso a la tienda' class='bg-black text-white'>
    </form>`;

    const formEdad = document.getElementById(`bienvenido`);

    formEdad.onsubmit = (e) => {
      let edadUsuario = document.getElementById(`input-edad`).value;
      localStorage.setItem(`edadUsuario`, JSON.stringify(edadUsuario));

      if (edadUsuario < 18 && edadUsuario >0) {
          e.preventDefault()
          let inputEdad = document.getElementById('input-edad')
          let btnInputEdad = document.getElementById('btn-inputEdad')
          inputEdad.setAttribute('disabled', '');
          btnInputEdad.setAttribute('disabled', '');
          Swal.fire({title: 'Eres menor de edad', text: 'Lo siento no puedes acceder', icon: 'error'})
          return localStorage.clear()
      }
    }
  } else if (edadUsuario > 18) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: 'rgba(0, 0, 0)',
      color: '#bc2a8d',
      padding: '30px',
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
    })
      Toast.fire({
      icon: 'success',
      title: 'Bienvenido a nuestra tienda!'
    })
  

 
    

    busquedaNombreTipo.removeAttribute('disabled', '');
    busquedaValorMaximo.removeAttribute('disabled', '');
    busquedaValorMinimo.removeAttribute('disabled', '');
    btnBusqueda.removeAttribute('disabled', '');
    btnNuevaBusqueda.removeAttribute('disabled', '');

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

    let divObjetosEncontrados = document.getElementById(`div-objetosEncontrados`);

    function busqueda(arr) {
    let busquedaValorMax = +busquedaValorMaximo.value;
    let busquedaValorMin = +busquedaValorMinimo.value;
    let busquedaTexto = busquedaNombreTipo.value;
    busquedaTextoMin = busquedaTexto.toLowerCase();

    let resultadoBusquedaNombre = arr.filter((obj) => obj.nombre.includes(busquedaTextoMin));
    let resultadoBusquedaTipo = arr.filter((obj) => obj.tipo.includes(busquedaTextoMin));
    let resultadoBusquedaValor = arr.filter((obj) => obj.valor <= busquedaValorMax && obj.valor >= busquedaValorMin);

    if (busquedaTextoMin === '' && busquedaValorMax === 0 && busquedaValorMin === 0) {
      let ProdEncontrados = document.createElement(`div`);
      ProdEncontrados.setAttribute(`class`, `d-flex`);
      divObjetosEncontrados.append(ProdEncontrados);

      let productoBuscado = document.createElement(`div`);
      productoBuscado.setAttribute(`class`, `w-auto border p-2 m-2 rounded`);
      productoBuscado.innerText = `Por favor ingrese un criterio de busqueda`;
      ProdEncontrados.appendChild(productoBuscado);

      busquedaNombreTipo.setAttribute('disabled', '');
      busquedaValorMaximo.setAttribute('disabled', '');
      busquedaValorMinimo.setAttribute('disabled', '');
      btnBusqueda.setAttribute('disabled', '');

      btnNuevaBusqueda.onclick = () => {
        ProdEncontrados.remove(productoBuscado);
        busquedaNombreTipo.removeAttribute('disabled', '');
        busquedaValorMaximo.removeAttribute('disabled', '');
        busquedaValorMinimo.removeAttribute('disabled', '');
        btnBusqueda.removeAttribute('disabled', '');
      };
    } else if (busquedaTextoMin != '' && busquedaValorMax === 0 && busquedaValorMin === 0) {
      busquedaNombreTipo.setAttribute('disabled', '');
      busquedaValorMaximo.setAttribute('disabled', '');
      busquedaValorMinimo.setAttribute('disabled', '');
      btnBusqueda.setAttribute('disabled', '');

      let ProdEncontrados = document.createElement(`div`);
      ProdEncontrados.setAttribute(`class`, `d-flex`);
      divObjetosEncontrados.append(ProdEncontrados);

      for (const p of resultadoBusquedaNombre) {
        let productoBuscado = document.createElement(`ul`);
        productoBuscado.setAttribute(`class`, `w-auto border p-2 m-2 rounded list-unstyled`);
        productoBuscado.innerHTML = `<li>NOMBRE: ${p.nombre}</li>
            <li>BODEGA: ${p.bodega}</li>
            <li>TIPO: ${p.tipo}</li>
            <li>OJOS: ${p.color}</li>
            <li>NARIZ: ${p.aroma}</li>
            <li>BOCA: ${p.sabor}</li>
            <li>VALOR: $${p.valor}</li>`;
        ProdEncontrados.appendChild(productoBuscado);

        btnNuevaBusqueda.onclick = () => {
          ProdEncontrados.remove(productoBuscado);
          busquedaNombreTipo.removeAttribute('disabled', '');
          busquedaValorMaximo.removeAttribute('disabled', '');
          busquedaValorMinimo.removeAttribute('disabled', '');
          btnBusqueda.removeAttribute('disabled', '');
        };
      }

      for (const p of resultadoBusquedaTipo) {
        productoBuscado = document.createElement(`ul`);
        productoBuscado.setAttribute(`class`, `w-auto border p-2 m-2 rounded list-unstyled shadow`);
        productoBuscado.innerHTML = `<li>NOMBRE: ${p.nombre}</li>
            <li>BODEGA: ${p.bodega}</li>
            <li>TIPO: ${p.tipo}</li>
            <li>OJOS: ${p.color}</li>
            <li>NARIZ: ${p.aroma}</li>
            <li>BOCA: ${p.sabor}</li>
            <li>VALOR: $${p.valor}</li>`;


        ProdEncontrados.appendChild(productoBuscado);

        btnNuevaBusqueda.onclick = () => {
          ProdEncontrados.remove(productoBuscado);
          busquedaNombreTipo.removeAttribute('disabled', '');
          busquedaValorMaximo.removeAttribute('disabled', '');
          busquedaValorMinimo.removeAttribute('disabled', '');
          btnBusqueda.removeAttribute('disabled', '');
        };
      }
    } else if (busquedaTextoMin === '' && busquedaValorMax != 0 && busquedaValorMin != 0) {
      busquedaNombreTipo.setAttribute('disabled', '');
      busquedaValorMaximo.setAttribute('disabled', '');
      busquedaValorMinimo.setAttribute('disabled', '');
      btnBusqueda.setAttribute('disabled', '');

      let ProdEncontrados = document.createElement(`div`);
      ProdEncontrados.setAttribute(`class`, `d-flex`);
      divObjetosEncontrados.append(ProdEncontrados);

      for (const p of resultadoBusquedaValor) {
        productoBuscado = document.createElement(`ul`);
        productoBuscado.setAttribute(`class`, `w-auto border p-2 m-2 rounded list-unstyled shadow`);
        productoBuscado.innerHTML = `<li>NOMBRE: ${p.nombre}</li>
            <li>BODEGA: ${p.bodega}</li>
            <li>TIPO: ${p.tipo}</li>
            <li>OJOS: ${p.color}</li>
            <li>NARIZ: ${p.aroma}</li>
            <li>BOCA: ${p.sabor}</li>
            <li>VALOR: $${p.valor}</li>`;
        
        ProdEncontrados.appendChild(productoBuscado);

        btnNuevaBusqueda.onclick = () => {
          ProdEncontrados.remove(productoBuscado);
          busquedaNombreTipo.removeAttribute('disabled', '');
          busquedaValorMaximo.removeAttribute('disabled', '');
          busquedaValorMinimo.removeAttribute('disabled', '');
          btnBusqueda.removeAttribute('disabled', '');
        };
      }
    }
    }

    btnBusqueda.onclick = () => busqueda(productos);

    function crearElementoCaracteristicas(prod, el) {
    let contenedor = document.createElement(`ul`);
    contenedor.setAttribute('class', 'list-group list-group-flush');
    contenedor.setAttribute('id', 'elemento-creado');
    contenedor.innerHTML = `<li class='list-group-item'>NOMBRE: ${prod.nombre}</li>
                              <li class='list-group-item'>BODEGA: ${prod.bodega}</li>
                              <li class='list-group-item'>TIPO: ${prod.tipo}</li>
                              <li class='list-group-item'>OJOS: ${prod.color}</li>
                              <li class='list-group-item'>NARIZ: ${prod.aroma}</li>
                              <li class='list-group-item'>BOCA: ${prod.sabor}</li>
                              <li class='list-group-item'>VALOR: $${prod.valor}</li>`;
    let elemento = document.getElementById(el);
    elemento.appendChild(contenedor);
    }
    function eliminarElementoCaracteristicas(el) {
    let divCaract = document.getElementById(el);
    divCaract.remove(divCaract.children);
    }

    let btnSyrah = document.getElementById('btn-caractSyrah');
    btnSyrah.onmouseover = () => crearElementoCaracteristicas(productos[0], 'div-caractSyrah');
    btnSyrah.onmouseout = () => eliminarElementoCaracteristicas('elemento-creado');

    let btnVermouth = document.getElementById('btn-caractVermouth');
    btnVermouth.onmouseover = () => crearElementoCaracteristicas(productos[1], 'div-caractVermouth');
    btnVermouth.onmouseout = () => eliminarElementoCaracteristicas('elemento-creado');

    let btnBonarda = document.getElementById('btn-caractBonarda');
    btnBonarda.onmouseover = () => crearElementoCaracteristicas(productos[2], 'div-caractBonarda');
    btnBonarda.onmouseout = () => eliminarElementoCaracteristicas('elemento-creado');

    let btnViognier = document.getElementById('btn-caractViognier');
    btnViognier.onmouseover = () => crearElementoCaracteristicas(productos[3], 'div-caractViognier');
    btnViognier.onmouseout = () => eliminarElementoCaracteristicas('elemento-creado');

    let productoConDescuento = document.getElementById('img');
    let cardDiv = document.getElementById('descuento-div');
    let divDescuento = document.createElement(`p`);
    divDescuento.className = 'cardDescuento';
    divDescuento.innerText = 'Producto con descuento!';
    productoConDescuento.onmouseover = () => {
      cardDiv.append(divDescuento);
    };

    const carritoS = [];
    const carritoV = [];
    const carritoB = [];
    const carritoVg = [];

    function agregarCarrito(prod, arr) {
      arr.push(prod.cantidad);
    }

    class toast {
      constructor (text, duration, gravity, position, className) {
        this.text = text,
        this.duration = duration,
        this.gravity = gravity,
        this.position = position,
        this.className = className
      }
    }
    const toastyAgregar = new toast('producto agregado', 3000, 'top', 'left', 'toastyStyle'
    )
    const toastyEliminar = new toast('producto eliminado', 3000, 'top', 'right', 'toastyStyle2'
    )

    let btnCarritoSyrah = document.getElementById('agregar-carrito-syrah');
    btnCarritoSyrah.onclick = () => {
      agregarCarrito(productos[0], carritoS);
      localStorage.setItem('syrah', JSON.stringify(carritoS));
      Toastify(
        toastyAgregar
      ).showToast();
    };


    let btnCarritoVermouth = document.getElementById('agregar-carrito-vermouth');
    btnCarritoVermouth.onclick = () => {
      agregarCarrito(productos[1], carritoV);
      localStorage.setItem('vermouth', JSON.stringify(carritoV));
      Toastify(
        toastyAgregar
      ).showToast();
    };

    let btnCarritoBonarda = document.getElementById('agregar-carrito-bonarda');
    btnCarritoBonarda.onclick = () => {
      agregarCarrito(productos[2], carritoB);
      localStorage.setItem('bonarda', JSON.stringify(carritoB));
      Toastify(
        toastyAgregar
      ).showToast();
    };

    let btnCarritoViognier = document.getElementById('agregar-carrito-viognier');
    btnCarritoViognier.onclick = () => {
      agregarCarrito(productos[3], carritoVg);
      localStorage.setItem('viognier', JSON.stringify(carritoVg));
      Toastify(
        toastyAgregar
      ).showToast();
    };

    let mostrarCarrito = document.getElementById('navbarDropdownMenuLink');
    mostrarCarrito.onclick = () => {

    let carritoSyrah = JSON.parse(localStorage.getItem('syrah', carritoS));
    let carritoVermouth = JSON.parse(localStorage.getItem('vermouth', carritoV));
    let carritoBonarda = JSON.parse(localStorage.getItem('bonarda', carritoB));
    let carritoViognier = JSON.parse(localStorage.getItem('viognier', carritoVg));

    let divCarritoSyrah = document.getElementById('carrito-syrah');
    let divCarritoVermouth = document.getElementById('carrito-vermouth');
    let divCarritoBonarda = document.getElementById('carrito-bonarda');
    let divCarritoViognier = document.getElementById('carrito-viognier');
    let divCarritoTotal = document.getElementById('carrito-total');

    let valorSubTotalSyrah = 0;
    let valorSubTotalVermouth = 0;
    let valorSubTotalBonarda = 0;
    let valorSubTotalViognier = 0;
    let valorTotal = 0;

    function borrarCarrito (div, it, carr) {
      let btnBorrar = document.createElement(`button`);
      btnBorrar.innerText = 'Eliminar';
      div.appendChild(btnBorrar)
      btnBorrar.onclick = () => {
        div.replaceChildren();
        localStorage.removeItem(it);
        carr.splice(0, carr.length);
        Toastify(
          toastyEliminar
        ).showToast();
      };
    }
    function carritoIndividual(div, arr, elId) {

      for (const obj in arr){ 
        if(elId === `syrah`) {
          return (valorSubTotalSyrah = ((productos[0].valor*arr.length)*1.21)) +
          (div.innerHTML = `<p> PRODUCTO: ${productos[0].nombre}
          TIPO: ${productos[0].tipo}
          VALOR: $ ${productos[0].valor} + $ ${productos[0].valor*0.21}
          CANTIDAD: ${arr.length}
          SUB-TOTAL: $ ${valorSubTotalSyrah}</p>`) +
          (borrarCarrito (divCarritoSyrah, `syrah`, carritoS));
        } else if (elId === `vermouth`) {
          return (valorSubTotalVermouth = ((productos[1].valor*arr.length)*1.21)) +
          (div.innerHTML = `<p> PRODUCTO: ${productos[1].nombre}
          TIPO: ${productos[1].tipo}
          VALOR: $ ${productos[1].valor} + $ ${productos[1].valor*0.21}
          CANTIDAD: ${arr.length}
          SUB-TOTAL: $ ${valorSubTotalVermouth}</p>`) +
          (borrarCarrito (divCarritoVermouth, `vermouth`, carritoV));
        } else if (elId === `bonarda`) {
          return (valorSubTotalBonarda = ((productos[2].valor*arr.length)*1.21)) +
          (div.innerHTML = `<p> PRODUCTO: ${productos[2].nombre}
          TIPO: ${productos[2].tipo}
          VALOR: $ ${productos[2].valor} + $ ${productos[2].valor*0.21}
          CANTIDAD: ${arr.length}
          SUB-TOTAL: $ ${valorSubTotalBonarda}</p>`) +
          (borrarCarrito (divCarritoBonarda, `bonarda`, carritoB));
        } else if (elId === `viognier`) {
          return (valorSubTotalViognier = ((productos[3].valor*arr.length)*1.21)) +
          (div.innerHTML = `<p> PRODUCTO: ${productos[3].nombre}
          TIPO: ${productos[3].tipo}
          VALOR: $ ${productos[3].valor} + $ ${productos[3].valor*0.21}
          CANTIDAD: ${arr.length}
          SUB-TOTAL: $ ${valorSubTotalViognier}</p>`) +
          (borrarCarrito (divCarritoViognier, `viognier`, carritoVg));
        }
      }
    }

    if (carritoSyrah || carritoBonarda || carritoVermouth || carritoViognier) {
        carritoIndividual(divCarritoSyrah, carritoSyrah, `syrah`);
        carritoIndividual(divCarritoVermouth, carritoVermouth, `vermouth`);
        carritoIndividual(divCarritoBonarda, carritoBonarda, `bonarda`);
        carritoIndividual(divCarritoViognier, carritoViognier, `viognier`);

        valorTotal =
        valorSubTotalSyrah + valorSubTotalVermouth + valorSubTotalBonarda + valorSubTotalViognier;
        divCarritoTotal.innerHTML = `<p>TOTAL DE TU COMPRA: $ ${valorTotal}</p>`;
      } else {
      divCarritoTotal.innerHTML = '';
    }
    }

    let seccionTragos = document.getElementById(`tragos`)
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=wine`)
    .then(response => response.json())
      .then( (data) => { 
        const arr = data.drinks
        const drinkDiv = document.createElement(`div`)
        drinkDiv.setAttribute(`class`, `col-xl-3 border rounded p-3`)
        drinkDiv.innerHTML =   `<h4>${arr[0].strDrink}</h4>
                          <img src='./assets/img/cardBonarda.jpg'>
                          <h5>${arr[0].strCategory}</h5>
                          <ul><em>Ingredientes:</em>
                          <li>${arr[0].strIngredient1} ${arr[0].strMeasure1}</li>
                          <li>${arr[0].strIngredient2} ${arr[0].strMeasure2}</li>
                          <li>${arr[0].strIngredient3} ${arr[0].strMeasure3}</li>
                          <li>${arr[0].strIngredient4} ${arr[0].strMeasure4}</li>
                          <li>${arr[0].strIngredient5} ${arr[0].strMeasure5}</li>
                          </ul>
                          <strong>Preparación:</strong>${arr[0].strInstructions}`
        seccionTragos.appendChild(drinkDiv)

        const drinkDiv2 = document.createElement(`div`)
        drinkDiv2.setAttribute(`class`, `col-xl-3 border rounded p-3`)
        drinkDiv2.innerHTML =   `<h4>${arr[5].strDrink}</h4>
                          <img src='./assets/img/cardViognier.jpg'>
                          <h5>${arr[5].strCategory}</h5>
                          <ul><em>Ingredientes:</em>
                          <li>${arr[5].strIngredient1} ${arr[5].strMeasure1}</li>
                          <li>${arr[5].strIngredient2} ${arr[5].strMeasure2}</li>
                          <li>${arr[5].strIngredient3} ${arr[5].strMeasure3}</li>
                          <li>${arr[5].strIngredient4} ${arr[5].strMeasure4}</li>
                          <li>${arr[5].strIngredient5} ${arr[5].strMeasure5}</li>
                          <li>${arr[5].strIngredient6} ${arr[5].strMeasure6}</li>
                          <li>${arr[5].strIngredient7} ${arr[5].strMeasure7}</li>
                          </ul>
                          <strong>Preparación:</strong>${arr[5].strInstructions}`
      seccionTragos.appendChild(drinkDiv2)
      })

      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vermouth`)
      .then(response => response.json())
        .then( (data) => { 
          const arr = data.drinks
          const drinkDiv3 = document.createElement(`div`)
          drinkDiv3.setAttribute(`class`, `col-xl-3 border rounded p-3`)
          drinkDiv3.innerHTML =   `<h4>${arr[0].strDrink}</h4>
                            <img src='./assets/img/cardVermouth.jpg'>
                            <h5>${arr[0].strCategory}</h5>
                            <ul><em>Ingredientes:</em>
                            <li>${arr[0].strIngredient1} ${arr[0].strMeasure1}</li>
                            <li>${arr[0].strIngredient2} ${arr[0].strMeasure2}</li>
                            <li>${arr[0].strIngredient3} ${arr[0].strMeasure3}</li>
                            </ul>
                            <strong>Preparación:</strong>${arr[0].strInstructions}`
          seccionTragos.appendChild(drinkDiv3)
        })
}
}
entrada(edadEntrada)


