import { LoginUserService } from "../../services/Usuario/LoginUserService.js";

class LoginUserController{
    async handleLogin(req, res){
        const {usuario, senha} = req.body;
        const AutenticarLogin = await new LoginUserService().login({
            usuario, senha
        });
        
        return res.json(AutenticarLogin);
    }
}

export {LoginUserController}