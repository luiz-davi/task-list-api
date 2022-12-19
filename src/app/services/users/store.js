import User from "../../models/User";

class StoreService {
  async call(req){
    const { name, email, password } = req.body;

    try {
      const user = await User.create({
        name,
        email,
        password_hash: password
      });

      return {
        success: true,
        result: {
          message: "Usuário cadastrado com sucesso",
          user: {
            id: user.id,
            name: user.name,
            email: user.email
          },
        }
      };

    } catch (error) {
      return {
        success: false,
        error: error.errors
      };
    }
  }
}

export default new StoreService();
