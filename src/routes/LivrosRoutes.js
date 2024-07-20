import { Router } from "express";
import {
  getLivros,
  cadastrarLivros,
  atualizarFuncionario,
  criarFuncionario,
  funcionarioEspecifico,
  excluirFuncionario,
} from "../controllers/livrosController.js";

const router = Router();

router.get("/", getLivros);
router.post("/criar", cadastrarLivros);
router.post("/criar", criarFuncionario);
router.get("/:id", funcionarioEspecifico);
router.post("/editar/:id", atualizarFuncionario);
router.post("/remover/:id", excluirFuncionario);
//
export default router;
