import { ExcluirTarefaService } from "../../services/Tarefas/ExcluirTarefaService.js";

class ExcluirTarefaController{
    async handleExcluirTarefa(req, res){
        const idTarefa = Number(req.query.idTarefa)
        const excluirTarefa = await new ExcluirTarefaService().Excluir({
            idTarefa
        });

        console.log(excluirTarefa);
        return res.json(excluirTarefa);
    }
}

export {ExcluirTarefaController}