//Aqui se trabajara con lo que esta definido en .env
if (process.env.NODE_ENV !== "production")//preguntamos si estamos en modo produccion
{
    require("dotenv").config();//todas las variables pasaran a ser de desarrollo
}
module.exports={//ESPORTAMOS COMO UN OBJETO
    MONGO_URI : process.env.MONGO_URI
}
