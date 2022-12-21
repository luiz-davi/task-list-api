import jwt from 'jsonwebtoken';
import User from "../../models/User";
import authConfig from '../../../config/auth';

class AuthService {
  async call(body){
    const { email, password } = body;

    const user = await User.findOne({ where: { email } });

    if(!user){
      return {
        success: false,
        status: 404,
        error: ["Usuário não existe!"]
      };
    }

    if(! await user.check_autorization(password)){
      return {
        success: false,
        status: 401,
        error: ["Senha inválida!"]
      };
    }

    const { id, name } = user;

    return {
      success: true,
      status: 200,
      result: {
        toke: jwt.sign({ id, email }, authConfig.secret, { expiresIn: authConfig.expiresIn }),
        user: {
          id,
          name,
          email
        }
      },
      error: {}
    };
  }
}

export default new AuthService();
