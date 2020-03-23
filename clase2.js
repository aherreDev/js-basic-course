// ? Poo
// * Nombre
// * Estatura
// * Peso
// * Numero
// * Posicion

// * Pasar
// * Correr
// * Saltar
// * Tirar

class Jugador {
  Nombre;
  Estatura;
  Peso;
  Numero;
  Posicion;
  /**
   *
   * @param {String} Nombre
   * @param {number} Estatura
   * @param {number} Peso
   * @param {number} Numero
   * @param {String} Posicion
   */
  constructor(Nombre, Estatura, Peso, Numero, Posicion) {
    this.Nombre = Nombre;
    this.Estatura = Estatura;
    this.Peso = Peso;
    this.Numero = Numero;
    this.Posicion = Posicion;
  }

  pasar(jugador) {
    console.log(`${this.Nombre} Pase a ${jugador.Nombre}`);
  }
  correr(distancia, direccion) {
    console.log(
      `${this.Nombre} Corrio ${distancia} metros hacia el ${direccion}`
    );
  }
  saltar(longitud) {
    console.log(`${this.Nombre} Salto ${longitud} metros`);
  }
  tirar(gol) {
    console.log(`${this.Nombre} ${gol ? "Anoto" : "Fallo"}`);
  }
}
let jugadorMartin = new Jugador("Martin", 1.8, 75, 10, "Delantero");

let jugadorJose = new Jugador("Jose", 1.6, 50, 13, "Defensa");

let jugadorRaul = new Jugador("Raul", 1.7, 62, 9, "Medio");

console.log(jugadorMartin.Nombre);
console.log(jugadorJose.Nombre);
console.log(jugadorRaul.Nombre);

jugadorMartin.pasar(jugadorJose);
jugadorRaul.saltar("10");
jugadorJose.tirar(true);

// ? Abstración

// ? Herencia

// ? Encapsulación
