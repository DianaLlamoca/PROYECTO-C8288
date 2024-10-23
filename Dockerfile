#Utilizo una imagen de node para crear el contenedor y ejecutar el archivo transpilado. 
FROM node

#Establezco el directorio de trabajo del contenedor que se creará
WORKDIR /home

#Copio todas las carpetas del directorio actual del sistema host al directorio que establecí (/home) del contenedor nuevo a crear
COPY . .

#Instalo las dependencias definidas en el package.json mediante el comando npm install
RUN npm install

#Una vez que ya se instalaron las dependencias debidas en el contenedor docker, entonces puedo ejecutar la app transpilada
CMD ["node", "/dist/typescript.js"]
