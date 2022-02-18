import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// const {secret} = require("./config")

const generateAccessToken = (id, login, password) => {
    const payload = {
        id,
        login
    }
    return jwt.sign(payload, secret, { expiresIn: '24h' });
}

class authController {
  async registration(req, res) {
   
  }

  async login(req, res) {
    
  }

  async getUsers(req, res) {
    
  }
}

module.exports = new authController()