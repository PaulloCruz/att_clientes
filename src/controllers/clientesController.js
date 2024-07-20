import { response } from "express";
import conn from "../config/conn.js";
import { v4 as uuidv4 } from "uuid";
// criar, listar, atualizar, listar por id

export const getClientes = (request, response) => {
  const sql = /*sql*/ `SELECT * FROM clientes`;
  conn.query(sql, (err, data) => {
    if (err) {
      response.status(500).json({ message: "Erro ao buscar clientes" });
      return;
    }
    const livros = data;
    response.status(200).json(livros);
  });
};

export const postClientes = (request, response)=>{
  const { nome, email, senha, imagem } = request.body;

  if (!nome) {
    response.status(400).json({ message: "O nome é um campo obrigatório" });
    return;
  }
  if (!senha) {
    response.status(400).json({ message: "A senha é um campo obrigatório" });
    return;
  }
  if (!imagem) {
    response.status(400).json({ message: "A imagem é um campo obrigatório" });
    return;
  }
  if (!email) {
    response.status(400).json({ message: "O nome é um campo obrigatório" });
    return;
  }

const checkEmailSQL = /*sql*/ `SELECT * FROM clientes WHERE email = "${email}"`;
conn.query(checkEmailSQL, (err, data) => {
  if (err) {
    response.status(500).json({ message: "Erro ao buscar clientes" });
    return console.log(err);
  }
  if (data.length > 0) {
    response.status(400).json({ message: "O e-mail já está em uso!" });
    return console.error(err);
  }
  const id = uuidv4();
  const insertSQL = /*sql*/ ` INSERT INTO clientes (id,nome, email, senha, imagem )
  VALUES
  ("${id}","${nome}","${email}","${email}")`;
  conn.query(insertSQL, (err) => {
    if (err) {
      console.error(err);
      response.status(500).json({ message: "Cadastrar cliente" });
      return;
    }
    response
      .status(201)
      .json({ message: "cliente cadastrado com sucesso" });
  });
});
}


export const putClientes = (request, response) => {
  const id = request.params;
  const { nome, email, senha, imagem } = request.body;

  if (!nome) {
    response.status(400).json({ message: "O nome é um campo obrigatório" });
    return;
  }
  if (!senha) {
    response.status(400).json({ message: "A senha é um campo obrigatório" });
    return;
  }
  if (!imagem) {
    response.status(400).json({ message: "A imagem é um campo obrigatório" });
    return;
  }
  if (!email) {
    response.status(400).json({ message: "O nome é um campo obrigatório" });
    return;
  }
  const checkSQL = /*sql*/ `SELECT * FROM clientes WHERE id = "${id}"`;
  conn.query(checkSQL, (err, data) => {
    if (err) {
      console.log(err);
      response.status(500).json({ message: "Erro ao buscar dados" });
      return;
    }
    if (data === 0) {
      response.status(404).json({ message: "Cliente nao encontrado" });
      return;
    }
    const emailCheckSQL = /*sql*/ `SELECT * FROM clientes WHERE email = "${email}" AND id != "${id}"`;
    conn.query(emailCheckSQL, (err, data) => {
      if (err) {
        console.error(err);
        response.status(500).json({ message: "Erro ao verificar os emails" });
        return;
      }
      if (data.length > 0) {
        return response.status(409).json({ message: "O email ja está em uso" });
      }
      const updateSQL = /*sql*/ `UPDATE clientes SET nome = "${nome}",senha = "${senha}",imagem="${imagem}", email = "${email}"`;
      conn.query(updateSQL, (err) => {
        if (err) {
          console.error(err);
          return response
            .status(500)
            .json({ message: "Erro ao atualizar cliente" });
        }
        response.status(200).json({ message: "dados do cliente atualizado" });
      });
    });
  });
};

export const getClienteByID = (request, response)=>{
  const { id } = request.params;
  const SQL = /*sql*/ `SELECT * FROM clientes WHERE id = "${id}"`;

  conn.query(SQL, (err, data) => {
    if (err) {
      response.status(500).json({ message: "Erro ao listar clientes" });
      return console.log(err);
    }
    const clientes = data;
    if (clientes.length === 0) {
      response
        .status(404)
        .json({ message: "Nao existe clientes cadastrados" });
      return;
    }
    response.status(200).json(clientes);
  });
}