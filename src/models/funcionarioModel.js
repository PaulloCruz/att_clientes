import conn from "../config/conn.js";

const tableFuncionario = /*sql*/ `
    CREATE TABLE IF NOT EXISTS funcionarios(
        id VARCHAR(60) primary key ,
        nome VARCHAR(255) NOT NULL,
        cargo VARCHAR(255) NOT NULL,
        data_contratacao DATE NOT NULL,
        SALARIO DECIMAL(10,2) NOT NULL,
        EMAIL VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

        )
`;

conn.query(tableFuncionario, (err, result, field) => {
  if (err) {
    console.error("Error ao criar a tabela" + err.stack);
    return;
  }
  // console.log(result)
  // console.log(field);
  console.log("Tabela [funcionarios] criada com sucesso");
});
