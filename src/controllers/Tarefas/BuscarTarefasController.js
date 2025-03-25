import { BuscarTarefasService } from "../../services/Tarefas/BuscarTarefasService.js";

class BuscarTarefasController{
    async handleBuscarTarefas(req, res){
        const { titulo, descricao, status} = req.body;
        const listaTarefas = await new BuscarTarefasService().buscarTodasTarefas({
            titulo,
            descricao,
            status
        });

        return res.json(listaTarefas);
    }

    async handleObtendoTarefa(req, res){
        const idTarefa = Number(req.query.idTarefa);
        const tarefa = await new BuscarTarefasService().obterTarefa({
            idTarefa
        });

        return res.json(tarefa);
    }
}

export {BuscarTarefasController}