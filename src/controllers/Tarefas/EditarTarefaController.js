import { EditarTarefaService } from "../../services/Tarefas/EditarTarefaService.js";

class EditarTarefaController{
    async handleEditarTarefa(req, res){
        const idTarefa = Number(req.query.idTarefa)
        const {titulo, descricao } = req.body;
        const atualizaTarefa = await new EditarTarefaService().editar({
            idTarefa, titulo, descricao
        });

        return res.json(atualizaTarefa);
    }

    async handleAtualizaStatus(req, res){
        const idTarefa = Number(req.query.idTarefa)
        const atualizaStatus = await new EditarTarefaService().atualizaStatus({
            idTarefa
        });

        return res.json(atualizaStatus);
    }
}

export {EditarTarefaController}