const persona = {
  nombre: 'Fabio',
  edad: 36,
  direccion: {
    ciudad: 'Jujuy',
    codigoPostal: 4600,
  },
  hobbies: ['gaming', 'ciclyng'],
}

const {
  nombre: name,
  direccion: { ciudad, codigoPostal: zip },
  hobbies: [primerHobbie, segundoHobbie],
} = persona

name
ciudad
zip

primerHobbie
segundoHobbie

const frutas = ['anana', 'pera', 'banana', 'frutilla', 'uva']
const [primerFruta, ...otrasFrutas] = frutas

primerFruta
otrasFrutas

