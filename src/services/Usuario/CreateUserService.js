import prisma from '../../prisma/index.js'

class CreateUserService {
    async execute({ nome, senha, email}){
        if(!nome || !senha || !email){
            throw new Error('Preencha todos os campos')
        }

        if(senha.length > 8){
            throw new Error('A senha deve ter no máximo 8 caracteres')
        }
        const userVerifyExists = await prisma.user.findFirst({
            where:{
                EMAIL:email
            }
        })

        if(userVerifyExists){
            throw new Error("Email já cadastrado")
        }

        const user = await prisma.user.create({
            data:{
                NOME:nome,
                SENHA:senha,
                EMAIL:email
            },
        })

        return user;
    }
}

export {CreateUserService}