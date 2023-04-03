const { obtenerTodosLosUsuarios, obtenerUsuarioPorId, crearUsuarios, editarUsuarios, eliminarUsuarios, buscarPorEmail } = require('../services/user.services');

const getAllUsers = async (req, res) => {
  try {
    res.status(200).json('ok')
  } catch (error) {
    
  }
};

const getUserById = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
};

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const emailExist = await buscarPorEmail(user.email);
    if (emailExist.length === 0) {
      const newUser = await crearUsuarios(user);
      res.status(201).json(newUser);
      return
    }
    res.status(400).json('El usuario ya se encuentra registrado.');
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const editUser = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
};

const deleteUser = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
};
