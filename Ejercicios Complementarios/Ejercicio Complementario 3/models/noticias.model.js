const mongoose = require("mongoose")
const {Schema} = mongoose;
const NoticiasSchema = new Schema//separo el schema del modelo
(
    {
    titulo: { type: String },
    enlace: { type: String }
    },
    {
        timestamps: { createdAt: true, updatedAt: true}//crea marca de tiempo cuando se crea y actualize el documento
    }
)
module.exports = mongoose.model("Noticias", NoticiasSchema );//defino y se importa el modelo

