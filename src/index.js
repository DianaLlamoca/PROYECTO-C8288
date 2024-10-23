//Acá defino una Prueba sencilla, que devolverá una promesa que se resuelve en 2 segundos
function Prueba(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Prueba correcta");
        },2000);
    });
}
//Exporto la función para usarla en el archivo .test.js
module.exports=Prueba;
