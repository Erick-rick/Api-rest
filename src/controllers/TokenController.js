// import User from '../models/User';

import User from "../models/User";
import jwt from 'jsonwebtoken';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    console.log(email, password);

    if (!email || !password) {
      return res.status(401).json({
        erros: ['Usuario ou senha inválidos'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        erros: ['Usuario inválidos'],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        erros: ['Senha inválida'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new TokenController();
