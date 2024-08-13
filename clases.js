class Circulo {
  constructor (radio) {
    this.radio = radio
  }

  getArea () {
    return Math.PI * this.radio ** 2
  }
}

const miCirculito = new Circulo(5)

console.log(miCirculito.getArea())
