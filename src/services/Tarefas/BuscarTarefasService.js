import prisma from "../../prisma/index.js";

class BuscarTarefasService{
    async buscarTodasTarefas({titulo, descricao, status}){
        const whereClause = {};

        if(titulo || descricao || status) {
            whereClause.TITULO = {contains: titulo};
            whereClause.DESCRICAO = {contains: descricao};
            whereClause.STATUS = {contains: status};
        }

        const tarefas = await prisma.tarefa.findMany({
            where: Object.keys(whereClause).length ? whereClause : undefined
        });
        
        if(tarefas.length === 0){
            throw new Error("Tarefas não encontradas");
        }
        return tarefas;
    }

    async obterTarefa({idTarefa}){
        if(!idTarefa || isNaN(idTarefa)){
            throw new Error("Id da tarefa inválido");
        }
        const obtendoTarefa = await prisma.tarefa.findUnique({
            where:{
                ID:idTarefa
            },
            select:{
                ID:true,
                TITULO:true,
                DESCRICAO:true,
                STATUS:true,
                DTCADASTRO:true
            }
        });

        if(!obtendoTarefa){
            throw new Error("Tarefa não encontrada");
        }
        return obtendoTarefa;
    }
}

export {BuscarTarefasService}