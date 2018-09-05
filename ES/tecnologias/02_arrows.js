let oDatos = { precio: 12, iva : 1.16 };

oDatos.calculaIvaAsync = function () {
   setTimeout ( () => {
       let precioFinal = this.precio * this.iva
       console.log(`
       Usando una función clásica:
       El precio final es ${precioFinal.toFixed(2)}
      `);
}, 1000) }

oDatos.calculaIvaAsync() // NaN
