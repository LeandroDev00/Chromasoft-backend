import prisma from "../../prisma/index.js";

class ExcluirTarefaService{
    async Excluir({idTarefa}){
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

        const removeTarefa = await prisma.tarefa.delete({
            where: {
                ID:idTarefa
            }
        })
        return removeTarefa;
    }
}

export {ExcluirTarefaService}