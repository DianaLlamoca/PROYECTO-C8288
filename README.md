# Proyecto 11: Implementación de integración continua y despliegue continuo (CI/CD) 
### Descripción: Configurar un pipeline de CI/CD para automatizar pruebas, construcción y despliegue de una aplicación. 

# =======
# HERRAMIENTAS UTILIZADAS:
- Jenkins para la creación del pipeline.
- NodeJS, JS, TS para crear los scripts de prueba sobre los cuales se van a realizar tests automatizados.
- Jest para la creación y ejecución de pruebas. 
- Supertest para probar API's
- Express para crear una aplicación web básica sobre la cual realizaré una prueba sencilla mediante Supertest y Jest para validar el resultado de respuesta al realizar una solicitud mediante el método get.
- Github para crear el repositorio con el cual trabajará Jenkins.
- Docker para desplegar una pequeña aplicación transpilada de TypeScript a JavaScript


# =======
# PIPELINE:
# PASO 1
1) Defino el 'agent' (agente o nodo) en donde se ejecutará el pipeline. En este caso, coloqué 'any', lo que supone que ejecutará el pipeline en cualquiera de los nodos disponibles.
Además, clonaré el repositorio donde se encuentran todos los archivos necesarios con los cuales trabajará el pipeline.

![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I1.JPG)

# PASO 2
2) Verifico si en el nodo actual donde se ejecutará el pipeline está instalado node y npm, para en base a ello continuar con el proceso definido en el pipeline.

![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I2.JPG)

# PASO 3
3) Este paso del pipeline se encargará de instalar las dependencias definidas en el archivo package.json del repositorio en el nodo donde se está corriendo el pipeline.

![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I3.JPG)

# PASO 4
4) Aquí se presenta la etapa de test. En el archivo package.json, especifiqué, dentro de "scripts", el apartado de "test", de tal forma que cuando se ejecute el comando 'npm run test', ejecutará el script definido en el archivo package.json, en el cual el script 'test' está vinculado a la herramienta de testing 'Jest'.
Esto permitirá que Jest busque y ejecute las pruebas definidas en el repositorio, para ello 'recorre' los archivos de prueba (extensiones .test.js) y las ejecuta.

![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I4.JPG)

## PASO 4.1)
4.1) A continuación, enseñaré los archivos de pruebas que Jest ejecutará, las cuales están definidas en las carpetas 'src' y 'test en el repositorio:

