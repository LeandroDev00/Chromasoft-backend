import prisma from "../../prisma/index.js";

class CreateTarefaService{
    async execute({titulo, descricao}){
        const dataAtual = new Date();
        if(!titulo || !descricao){
            throw new Error("Título e descrição são obrigatórios");
        }

        if(titulo.length > 30){
            throw new Error("Título deve ter no máximo 30 caracteres");
        }
        if(descricao.length > 100){
            throw new Error("Descrição deve ter no máximo 100 caracteres");
        }
        const tarefa = await prisma.tarefa.create({
            data:{
                TITULO:titulo,
                DESCRICAO:descricao,
                STATUS:"Pendente",
                DTCADASTRO: dataAtual
            },
            select:{
                ID:true,
                TITULO:true,
                DESCRICAO:true,
                STATUS:true,
                DTCADASTRO:true
            }
        })

        return tarefa
    }
}

export {CreateTarefaService}