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

# BUILD:
En la etapa de build, realizo la instalación de dependencias asegurándome de que todas las librerías y herramientas necesarias estén disponibles.

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

# TEST
Ya que la etapa de build se enfocó en la construcción del proyecto, la etapa de testing se concentrará en verificar su correcto funcionamiento.

# PASO 4: 
4) Aquí se presenta la etapa de test. En el archivo package.json, especifiqué, dentro de "scripts", el apartado de "test", de tal forma que cuando se ejecute el comando 'npm test', ejecutará el script definido en el archivo package.json, en el cual el script 'test' está vinculado a la herramienta de testing 'Jest'.
Esto permitirá que Jest busque y ejecute las pruebas definidas en el repositorio, para ello 'recorre' los archivos de prueba (extensiones .test.js) y las ejecuta.

![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I4.JPG)

## PASO 4.1)
4.1) A continuación, enseñaré los archivos de pruebas que Jest ejecutará, las cuales están definidas en las carpetas 'src' y 'test en el repositorio:
- Prueba 1:
  * Archivo .js:
    
 ![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I5.JPG)

----
 
 * Archivo .test.js:
   
 ![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I6.JPG)

**Descripción de la prueba 1**: Realizo una solitud GET a la ruta '/users'. Para ello, utilizo 'supertest', que me permitirá probar servidores HTTP. Luego, utilizo 'Jest' para verificar que la información brindada por el servidor sea igual al resultado esperado y establezco un tiempo de 10 segundos para realizar la solicitud y posteriormente la prueba automatizada.

====

### Lo mismo aplico para las pruebas 2 y 3, donde ejecuto pruebas a funciones sencillas encargadas de validar las operaciones de suma y factorial:
* Prueba 2:
  * Archivo .js:
    
  ![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I7.JPG)

  * Archivo .test.js:
     
  ![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I8.JPG)

-------

* Prueba 3:
  * Archivo .js:
  
  ![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I9.JPG)

  * Archivo .test.js:

  ![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I10.JPG)

# PASO 5: 
Aquí realizaré la compilación de código TypeScript a JavaScript.
Es importante separar la transpilación de la etapa de desarrollo, ya que así nos podemos asegurar que el código a desplegar esté libre de errores.
Para ello, dentro del package.json, en "build" (scripts) utilizo el comando 'tsc' para que se lleve a cabo la transpilación.
Así, definí el archivo 'tsconfig.json' el cual actuará como un "manual de instrucciones" para el compilador de TypeScript, definiendo cómo se debe compilar el código TypeScript a JavaScript.

* **pipeline:**
  
![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I11.JPG)
 - Al ejecutar 'npm run build' le estoy indicando a 'npm' que ejecute el script denominado 'build' definido en el archivo package.json.
Allí es donde vinculé el script 'build' con el comando 'tsc', que se encargará de invocar al compilador de TypeScript. De tal forma que el compilador de TypeScript analizará todos los archivos TS, para posteriormente generar los código JS correspondientes, siempre siguiendo las configuraciones que le indiqué en el archivo 'tsconfig.json'

----

* **package.json:**

![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I12.JPG)

-----

* **tsconfig.json:**
  
![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I13.JPG)

---

# DEPLOY

# PASO 6:
Esta es la última etapa en un pipeline CI/CD, ya que es el paso final donde el código que ha sido desarrollado, probado y empaquetado, se despliega en un entorno de ejecución.
Este proceso puede automatizarse, por lo que decidí utilizar Docker para realizar el deploy de la aplicación:

![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I15.JPG)

**Descripción:** Aquí estoy creando una imagen a partir del Dockerfile contenido en el directorio actual en donde se está ejecutando el pipeline.
Posteriormente, creo un contenedor docker, utilizando 'docker run' y le especifico el puerto que estará expuesto para entablar conexión con el contenedor desde la máquina host.

---
**Dockerfile:**
Este Dockerfile servirá para crear la imagen, para a partir de allí crear un contenedor NodeJS y ejecutar el archivo transpilado de TypeScript a JavaScript:

![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I14.JPG)

======

# EJECUTANDO EL PIPELINE:
- Aquí se puede ver que el pipeline se ejecutó correctamente, debido a que las pruebas automatizadas realizadas en los archivos JS se ejecutaron correctamente:
  
![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I17.JPG)

- Logs de las pruebas automatizadas:

![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I18.JPG)
  
=====

# INSTRUCCIONES PARA REPRODUCIR EL ENTORNO:
- ### Instalación de Jenkins:
 https://www.digitalocean.com/community/tutorials/how-to-install-jenkins-on-ubuntu-20-04-es

---
- ### Instalar plugins en Jenkins:
  * Pipeline stage view (para visualizar la barra a medida que el pipeline se ejecuta)
  * Git (para realizar la conexión entre Jenkins y GitHub)

  ![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I26.JPG)

---

Para que Jenkins pueda trabajar con GitHub, realicé la configuración correspondiente en GitHub mediante WebHook en la configuración del repositorio, como al momento de crear el pipeline en Jenkins:

- ### Configuración Jenkins:
  - Vincular Jenkins con GitHub:
    
    ![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I19.JPG)

   - Coloco la URL del repositorio con el que Jenkins va a trabajar:
     
   ![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I20.JPG)

   - Especifico la rama del repositorio:
     
   ![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I21.JPG)
   
   - Establezco el path donde se encuentra el archivo Jenkinsfile. Como este se encuentra en el directorio raíz del repositorio, solamente especifico el nombre del archivo:
      
   ![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I22.JPG)


- ### Configuración GitHub:
 Vinculo el repositorio con el servidor de Jenkins:
- En el repositorio --> Settings --> WebHooks:
  
  ![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I23.JPG)

- Debido a que Jenkins corre en el localhost, para vincularlo con GitHub necesito la IP pública del agente o nodo donde se está ejecutando Jenkins. Dicha IP pública debe ser colocada en el link para realizar la 
 conexión:

  ![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I24.JPG)

 - **Nota:** Para saber la IP pública, se ejecuta el comando *curl ifconfig.me*


- ### Finalmente...
  En Jenkins, se coloca la opción: 'Construir ahora'

   ![](https://github.com/DianaLlamoca/IMAGENES-PROYECTO/blob/main/Imagenes/I25.JPG)
