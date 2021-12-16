-->Crear un Docker, y en este agregar el trabajo autónomo desarrollado en el primer parcial.

-->Es importante detallar aplicando comentarios en el dockerfile y agregar un archivo readme para indicar
las instrucciones que aplicó para la implementación. 


## Ejemplo de implementación de docker al backend de la apliación del primer parcial

En este ejemplo tenemos el bakend de la apliación del primer parcial.

Tenemos el archivo Dockerfile donde tenemos los comandos necesarios para instalar nuestra aplicación.

## Instalación

En el directorio actual ejecutamos el siguiente comando, para construir la imagen de nuestra API.

 docker build . -t complementario1

Luego podemos ejecutar nuestra imagen.

 docker run --name pruebacomple -d complementario1