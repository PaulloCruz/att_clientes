// id,nome, email, senha, imagem(imagem do google)
// criar, listar, atualizar, listar por id
import conn from "../config/conn.js";

const tableCliente = /*sql*/ `
    CREATE TABLE IF NOT EXISTS clientes(
        id VARCHAR(60) primary key,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        senha VARCHAR(10) NOT NULL,
        imagem varchar(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
`;

conn.query(tableCliente, (err, result, field) => {
  if (err) {
    console.error("Error ao criar a tabela" + err.stack);
    return;
  }
//   console.log(result);
  // console.log(field);
  console.log("Tabela [clientes] criada com sucesso");
});
