import { Router } from "express";
import { Autenticado } from "./middlewares/Autenticado.js";

//Importação de Usuario
import { CreateUserController } from "./controllers/Usuario/CreateUserController.js";

//Importação Tarefas
import { CreateTarefaController } from "./controllers/Tarefas/CreateTarefaController.js";
import { BuscarTarefasController } from "./controllers/Tarefas/BuscarTarefasController.js";
import { EditarTarefaController } from "./controllers/Tarefas/EditarTarefaController.js";
import { ExcluirTarefaController } from "./controllers/Tarefas/ExcluirTarefaController.js";
import { LoginUserController } from "./controllers/Usuario/LoginUserController.js";

const router = Router();

// ROTA DE USUARIO. AUTENTICAÇÃO LOGIN, VALIDAÇÃO DE TOKEN
router.post('/login', new LoginUserController().handleLogin);
router.post('/usuario/criarUsuario', new CreateUserController().handleCreateUser);

//ROTA DE TAREFAS
router.post('/tarefa/novaTarefa', Autenticado, new CreateTarefaController().handleCreateTarefa);
router.post('/tarefa/buscarTarefas', Autenticado, new BuscarTarefasController().handleBuscarTarefas);
router.get('/tarefa/obterTarefa', Autenticado, new BuscarTarefasController().handleObtendoTarefa);
router.put('/tarefa/editarTarefa', Autenticado, new EditarTarefaController().handleEditarTarefa);
router.put('/tarefa/atualizaStatus', Autenticado, new EditarTarefaController().handleAtualizaStatus);
router.delete('/tarefa/excluirTarefa', Autenticado, new ExcluirTarefaController().handleExcluirTarefa);


export {router};