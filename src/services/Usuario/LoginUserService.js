import prisma from "../../prisma/index.js"
import jwt from 'jsonwebtoken';
class LoginUserService{
    async login({usuario, senha}){
        const AuthLogin = await prisma.user.findFirst({
            where:{
                NOME:usuario,
                SENHA:senha
            },
        });

        if(!AuthLogin){
            throw new Error("Usuário ou senha inválidos");
        }

        // Gerar Token JWT e devolver os dados
        const token = jwt.sign(
            {
                usuario: AuthLogin.NOME,
            },
            process.env.JWT_SECRET,
            {
                subject:AuthLogin.NOME,
                expiresIn:"3H",
            }
        )
        
        return{
            usuario:AuthLogin.NOME,
            token:token
        }
    }
}

export {LoginUserService}