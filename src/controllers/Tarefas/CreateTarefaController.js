import { CreateTarefaService } from "../../services/Tarefas/CreateTarefaService.js";

class CreateTarefaController{
    async handleCreateTarefa(req, res){
        const {titulo, descricao} = req.body;
        const tarefa = await new CreateTarefaService().execute({
            titulo, descricao
        });
        return res.status(201).json(tarefa);
    }
}

export {CreateTarefaController}