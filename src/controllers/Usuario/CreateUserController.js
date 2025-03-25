import { CreateUserService } from "../../services/Usuario/CreateUserService.js";

class CreateUserController{
    async handleCreateUser(req, res){
        const { nome, senha, email } = req.body// Pegar os dados da requisição

        const user = await new CreateUserService().execute({
            nome, senha, email
        });
        return res.json(user);
    }
}

export {CreateUserController}