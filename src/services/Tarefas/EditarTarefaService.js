import prisma from "../../prisma/index.js";

class EditarTarefaService{
    async editar({idTarefa, titulo, descricao}){
        if(!idTarefa || isNaN(idTarefa)){
            throw new Error("Id da tarefa inválido");
        }
        if(!titulo || !descricao){
            throw new Error("Título e descrição são obrigatórios");
        };
        if(titulo.length > 30){
            throw new Error("Título deve ter no máximo 30 caracteres");
        };
        if(descricao.length > 100){
            throw new Error("Descrição deve ter no máximo 100 caracteres");
        };

        const tarefaExiste = await prisma.tarefa.findUnique({
            where: {
                ID:idTarefa
            }
        });

        if(!tarefaExiste){
            throw new Error("Tarefa não encontrada");
        };

        const updateTarefa = await prisma.tarefa.update({
            where: {
                ID:idTarefa
            },
            data:{
                TITULO:titulo,
                DESCRICAO:descricao,
            }
        });
        return updateTarefa;
    }

    async atualizaStatus({idTarefa}){
        if(!idTarefa || isNaN(idTarefa)){
            throw new Error("Id da tarefa inválido");
        }

        const tarefaExiste = await prisma.tarefa.findUnique({
            where: {
                ID:idTarefa
            }
        });

        if(!tarefaExiste){
            throw new Error("Tarefa não encontrada");
        };

        if(tarefaExiste.STATUS === "Concluido"){
            throw new Error("Tarefa segue concluída");
        }
        const updateStatus = await prisma.tarefa.update({
            where: {
                ID:idTarefa
            },
            data:{
                STATUS:"Concluido"
            }
        });
        return updateStatus;
    };
}

export {EditarTarefaService}