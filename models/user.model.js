const { Schema, model } = require('mongoose');

const userSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number, min: [1, 'La edad minima es de 1 año'], max: [100, 'la edad maxima es de 100 años'],
    required: [true, 'Este campo es requerido']
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = model('user', userSchema);
