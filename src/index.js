//Acá defino una aplicación express básica
const servidor_express=require("express");
const aplicacion_basica=servidor_express();
const puerto=3000;

//Defino la ruta y que solo me devuelva un "Hola mundo"
aplicacion_basica.get("/",(req,res)=>{
    res.send("Despliegue correcto");
})

//Para que la app esté en escucha en el puerto definido
aplicacion_basica.listen(puerto,()=>{
    console.log(`Aplicación corriendo en http://localhost:${puerto}`);
});
