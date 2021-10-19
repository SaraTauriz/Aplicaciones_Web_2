
//1.Crear una función que reciba N como parámetro y genere la tabla de multiplicar por consola utilizando recursividad.

const tablaMultiplicar =function(N,i=1){
    if(i<=10){
        console.log(`${N} * ${i} = ${N*i}`)
        i++;
        return tablaMultiplicar(N,i=i)
    }
}
tablaMultiplicar(7);

//2.Crear un objeto Mascota que tenga como parámetros Nombre, Edad y Color.
//3.Definir un arreglo con sus comidas favoritas.

const Mascota = {
    nombre: ['Sara', 'Tauriz'],
    edad: 21,
    color: 'negro',
    comidasFavoritas: ['lasagna', 'pizza', 'espaguetis']
  };

//4.Recorrer el arreglo definido en la opción anterior y mostrarlo aplicando un do-while.

const Arreglo= Mascota.comidasFavoritas
let i=0;

    do{
    console.log(Mascota.comidasFavoritas[i])
    i++;
    }while(i<Arreglo.length)

//5.Crear una función flecha que reciba un elemento del arreglo de comidas favoritas y lo devuelva en mayúscula.

const mayus=(posicion)=> {
  if(posicion>=3){
      return "El array solo posee 3 posiciones intente con un numero menor"
  }
    return Arreglo[posicion]=Arreglo[posicion].toUpperCase();
} 
console.log(mayus(2))