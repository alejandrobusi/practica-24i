const User = require('../models/user.model');

const obtenerTodosLosUsuarios = async () => {

};

const obtenerUsuarioPorId = async () => {

};

const buscarPorEmail = async (email) => {
  return await User.find({ email: email })
}

const crearUsuarios = async (user) => {
  const newUser = new User(user);
  return await newUser.save();
};

const editarUsuarios = async () => {

};

const eliminarUsuarios = async () => {

};

module.exports = {
  obtenerTodosLosUsuarios,
  obtenerUsuarioPorId,
  crearUsuarios,
  editarUsuarios,
  eliminarUsuarios,
  buscarPorEmail,
};
