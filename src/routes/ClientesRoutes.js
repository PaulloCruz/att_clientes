import { Router } from "express";
import {
  getClientes,
  postClientes,
  putClientes,
  getClienteByID
} from "../controllers/clientesController.js";
// criar, listar, atualizar, listar por id

const router = Router();

router.get("/", getClientes);
router.post("/criar", postClientes);
router.put("/atualizar", putClientes);
router.get("/", getClienteByID);


//
export default router;
