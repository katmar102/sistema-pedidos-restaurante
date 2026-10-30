export function agregarPlatillo(listaMesas, numeroMesa, nombrePlatillo, cantidad, precioUnitario) {
  const mesaEncontrada = listaMesas.find(m => m.mesa === numeroMesa);

  if (mesaEncontrada) {
    mesaEncontrada.pedidos.push({
      plato: nombrePlatillo,
      cantidad: cantidad,
      precioUnitario: precioUnitario
    });
  } else {
    listaMesas.push({
      mesa: numeroMesa,
      pedidos: [{ plato: nombrePlatillo, cantidad: cantidad, precioUnitario: precioUnitario }]
    });
  }
}

export function calcularCuenta(listaMesas, numeroMesa) {
  const mesaEncontrada = listaMesas.find(m => m.mesa === numeroMesa);
  if (!mesaEncontrada) return null;

  let subtotal = 0;
  mesaEncontrada.pedidos.forEach(item => {
    subtotal += item.cantidad * item.precioUnitario;
  });

  const servicio = subtotal * 0.10;
  const totalPagar = subtotal + servicio;

  return {
    mesa: mesaEncontrada.mesa,
    pedidos: mesaEncontrada.pedidos,
    subtotal: subtotal,
    servicio: servicio,
    totalPagar: totalPagar
  };
}

export function agregarPlatillo(mesa, nombrePlatillo, precioPlatillo) {
  mesa.platillos.push({ nombre: nombrePlatillo, precio: precioPlatillo });
  console.log(`Platillo "${nombrePlatillo}" agregado a la mesa ${mesa.numero}.`);
}

export function calcularTotalConPropina(mesa) {
  const subtotal = mesa.platillos.reduce((acc, p) => acc + p.precio, 0);
  const propina = subtotal * 0.10;
  const total = subtotal + propina;
  return { subtotal, propina, total };
}