const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  subject: {
    type: String,
    required: [true, "Debe definir el asunto."]
  },
  message: {
    type: String,
    required: [true, "Debe definir el asunto."],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Usuario"
  },
  date: {
    type: Date,
    default: new Date()
  }
});


//crea el modelo para poder insertar "Registros" sigueindo el esquema de usuario
const Message = mongoose.model('Mensaje', messageSchema);

module.exports = User;
