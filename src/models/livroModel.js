import conn from "../config/conn.js";

const tableLivros = /*sql*/ `
    CREATE TABLE IF NOT EXISTS livros(
        id VARCHAR(60) primary key ,
        titulo VARCHAR(255) NOT NULL,
        autor VARCHAR(255) NOT NULL,
        ano_publicacao VARCHAR(255) NOT NULL,
        genero VARCHAR(255) NOT NULL,
        preco DECIMAL(10,2) NOT NULL,
        disponbilidade BOOLEAN,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

        )
`;

conn.query(tableLivros, (err, result, field) => {
  if (err) {
    console.error("Error ao criar a tabela" + err.stack);
    return;
  }
  // console.log(result);
  // console.log(field);
  console.log("Tabela [livros] criada com sucesso");
});
