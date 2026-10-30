import { mesas } from './datos.js';
import { agregarPlatillo, calcularCuenta } from './operaciones.js';

console.log("=== SISTEMA DE PEDIDOS DE RESTAURANTE ===");
console.log("Estado inicial:", JSON.stringify(mesas, null, 2));

// Agregando nuevos platillos a la mesa 1
agregarPlatillo(mesas, 1, "Papas Fritas Medianas", 1, 9000);
agregarPlatillo(mesas, 1, "Helado de Vainilla", 2, 6000);

console.log("\n--- RECIBO MESA 1 ---");
const recibo = calcularCuenta(mesas, 1);
console.log(`Subtotal: $${recibo.subtotal}`);
console.log(`Servicio (10%): $${recibo.servicio}`);
console.log(`TOTAL A PAGAR: $${recibo.totalPagar}`);