//Aplicar promesas y async/await para solucionar un problema aplicado a su proyecto autónomo que tenga por lo menos 
//3 arreglos. Estos 3 arreglos deben tener relación con el proceso principal de su proyecto. 
//Por ejemplo, si fuese consultar una reservación de hotel: Cabecera de reservación, detalle de cuartos por 
//reservación y detalle de personas que van a ubicarse por cada cuarto en la reservación.

//tema del proyecto: Aplicacion de noticias destacadas de la universidad 


/*--------------------------------------------------------------------------------------
ARREGLOS
--------------------------------------------------------------------------------------*/

const Uleam_Noticias = [
    {
        id:1,
        noticia:"ULEAM recibe condecoración Jocay del municipio de Manta",
        idseccion:1,
        idescritor:1
    },
    {
        id:2,
        noticia:"ULEAM presente en actos de festejos por 99 años de cantonización de Manta",
        idseccion:2,
        idescritor:2
    },
    {
        id:3,
        noticia:"Campaña de prevencion de salud por DBU-ULEAM",
        idseccion:3,
        idescritor:3
    }
]



const Uleam_Autores = [
    {
        id:1,
        escritoPor:"Antonio Campos"
    },
    {
        id:2,
        escritoPor:"Luis Vera"
    },
    {
        id:3,
        escritoPor:"Jose Luis Vera"
    }
]


const Uleam_Secciones = [
    {
        id:1,
        seccionDeportiva:"Juegos deportivos y competencia aletica 5k en la ULEAM",
    },
    {
        id:2,
        seccionCientifica:"Uleam abre laboratorios para el area de la investigación",
    },
    {
        id:3,
        seccionConcursos:"Concursos de Desarrollo web para los jovenes de la FACCI",
    }
]

/*--------------------------------------------------------------------------------------
PROMESAS
--------------------------------------------------------------------------------------*/
     
function Encontrar_Noticia_Por_ID(id)
{
    return new Promise((resolve, reject)=>{
        const noticia =  Uleam_Noticias.find((noticia)=> noticia.id===id);
        if(!noticia)
        {
            const error = new Error();
            error.message="No encontramos el id al que pertenece la noticia";
            reject(error);
        }
        resolve(noticia);
    })
}

function Encontrar_Escritor_Por_ID(noticia)
{
    return new Promise((resolve, reject)=>{
        const escritor = Uleam_Autores.find((escritor)=>{
            return escritor.id === noticia.idescritor;
        })
        if(!escritor)
        {
            const error = new Error();
            error.message="No se encuentra el Escritor que esta buscando";
            reject(error);
        }
        noticia.escritor=escritor;
        resolve(noticia);
    })
}

function Encontrar_Seccion_Por_ID(noticia)
{
    return new Promise((resolve, reject)=>{
        const seccion = Uleam_Secciones.find((seccion)=>{
            return seccion.id === noticia.idseccion;
        })
        if(!seccion)
        {
            const error = new Error();
            error.message="No se encontro la sección que está buscando";
            reject(error);
        }
        noticia.seccion = seccion;
        resolve(noticia);
    })
}


Encontrar_Noticia_Por_ID(1).then((noticia)=>{
    return Encontrar_Seccion_Por_ID(noticia), Encontrar_Escritor_Por_ID(noticia);
}).then((noticia)=>{
    console.log(noticia)
}).catch((error)=>{
    console.log(error.message)
})


/*--------------------------------------------------------------------------------------
ASYNC/AWAIT
--------------------------------------------------------------------------------------*/

/*               

async function Encontrar_Noticia_Por_ID(id){
    const noticia =  Uleam_Noticias.find((noticia) => noticia.id === id);
    if (!noticia)
    {
        const error = new Error();
        error.message = "No encontramos el id al que pertenece la noticia";
        throw error;
    }
    return noticia;
}

 async function Encontrar_Escritor_Por_ID(id){
     const escritor = Uleam_Autores.find((escritor) => escritor.id === id);
     if (!escritor)
     {
         const error = new Error();
         error.message = "No se encuentra el Escritor que esta buscando";
         throw error;
     }
     return escritor;
 }

 async function Encontrar_Seccion_Por_ID(id){
    const seccion = Uleam_Secciones.find((seccion) => seccion.id === id);
    if (!seccion)
    {
        const error = new Error();
        error.message = "No se encontro la sección que está buscando";
        throw error;
    }
    return seccion;
}


 Uleam_Noticias.forEach( async(noticia)=>{
    const notex = await Encontrar_Noticia_Por_ID(noticia.id);
    console.log(notex)
})
*/










