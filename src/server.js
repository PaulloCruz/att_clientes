import "dotenv/config";
import express from "express";

//* conexão com banco de dados
import conn from "./config/conn.js";

//* Importação dos modulos e criação das tabelas
import "./models/livroModel.js";
import "./models/funcionarioModel.js";
import "./models/clienteModel.js";

//* Importação das ROTAS
import livroRoutes from "./routes/LivrosRoutes.js";
import clientesRouter from "./routes/clientesRoutes.js";

const PORT = process.env.PORT;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//* Utilização das ROTAS

app.use("/livros", livroRoutes);
app.use("/clientes", clientesRouter);

app.listen(PORT, () => {
  console.log("serv on port", PORT);
});
