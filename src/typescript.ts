//Defino un pequeño archivo en typescript para que se realice la transpilación en la etapa de build
interface PersonaTest{
    nombre: string;
    edad: number;
}

const usuario: PersonaTest = {
    nombre: 'user',
    edad: 20
};

console.log(`Holaaa, ${usuario.nombre}`);
