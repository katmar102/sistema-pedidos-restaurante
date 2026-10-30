export function agregarPlatillo(listaMesas, numeroMesa, nombrePlatillo, cantidad, precioUnitario) {
  let mesaEncontrada = listaMesas.find(m => m.mesa === numeroMesa);

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