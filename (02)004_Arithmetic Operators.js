function tarifaDiaria(tarifaPorHora) {
  return tarifaPorHora * 8;
}
console.log(tarifaDiaria(16));

function diasEnPresupuesto(presupuesto, tarifaPorHora) {
  const horasEnPresupuesto = presupuesto / tarifaPorHora;
  const diasEnPresupuesto = Math.floor(horasEnPresupuesto / 8);
  return diasEnPresupuesto;
}
console.log(diasEnPresupuesto(3085, 16));

function precioConDescuentoMensual(tarifaPorHora, numDias, descuento) {
  const numMeses = Math.floor(numDias / 22);
  const numDiasRestantes = numDias % 22;
  const tarifaMensualConDescuento = tarifaPorHora * 8 * 22 * (1 - descuento);
  const tarifaDiaria = tarifaPorHora * 8;
  const total = Math.ceil(
    tarifaMensualConDescuento * numMeses + tarifaDiaria * numDiasRestantes
  );
  return total;
}
console.log(precioConDescuentoMensual(16, 130, 0.15));
