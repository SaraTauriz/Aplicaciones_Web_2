/*Aplicar un cron Job sobre una página web que usted use de forma habitual 
para que se ejecuta una vez al día y guarde información en su base de datos.*/

const mongoose = require("mongoose");
const cheerio = require("cheerio");
const cron = require("node-cron");
const axios = require("axios").default;

const {MONGO_URI} = require("./config");
const {Noticias} = require("./models");

// La Conexion a la base de datos
mongoose.connect(MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true});

//Ejecutar como un cronjob
cron.schedule("0 0 * * *",// se ejecutara cada media noche

async () =>{
//conexion a la WEB q se hara web scrapping
    //obtenemos todo el html
    const html = await axios.get("https://www.sensacine.com/peliculas/noticias/")//para traer la informacion
    console.log(html);

    const $ = cheerio.load(html.data);//filtramos solo los datos del html
    const titulos = $(".title-article-link");
    
    let arregloNoticias=[];
    //Filtramos las noticias
    titulos.each((index, element)=>{
    //Almacena la informacion
        const Noticia ={
            titulo: $(element).text().toString(),//filtrar titulo
            enlace: $(element).attr("href")//filtrar los enlaces
        }
        arregloNoticias= [...arregloNoticias, Noticia];
    })

    Noticias.create(arregloNoticias);//Se guarda en la base de datos
})