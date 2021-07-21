const postsJson = require("../models/posts.json")

const getAll = (req, res) => {
  res.status(200).send(postsJson);
};

const getById = (req, res) => {
  //pegar id solicitado na requisição
  const requestedId = req.params.id;
  //parametro de busca
  const filteredPost = postsJson.find(post => post.id == requestedId);
  //envia resposta
  res.status(200).send(filteredPost);
};

const createPost = (req, res) => {
  // acessar os dados enviados na requisição
  let requestedTitle = req.body.titulo;
  let requestedContent = req.body.conteudo;
  let requestedLabels = req.body.etiquetas;

  let newPost = {
    "id": Math.random().toString(32).substr(2, 6),
    "dataCriacao": new Date(),
    "titulo": requestedTitle,
    "conteudo": requestedContent,
    "etiquetas": requestedLabels
  };

  postsJson.push(newPost);

  // enviar uma resposta
  res.status(201).send({
    "mensagem": "Post criado com sucesso",
    newPost
  });
};

const replacePost = (req, res) => {
  //acessar dados da requisição
  const requestedId = req.params.id;
  const postFromBody = req.body;
  console.log('POST DO BODY', postFromBody)

  let filteredPost = postsJson.find(post => post.id == requestedId);
  console.log('POST Filtrado', filteredPost)

let updatedPost = {
    "id": filteredPost.id,
    "dataCriacao": filteredPost.dataCriacao,
    "titulo": postFromBody.titulo,
    "conteudo": postFromBody.conteudo,
    "etiquetas": postFromBody.etiquetas
}

  //substituir o item
  const indice = postsJson.indexOf(filteredPost);

  postsJson.splice(indice, 1, PostFromBody);
  //enviar respostas
  res.status(200).send({
    "mensagem": "Post substituido com sucesso",
    postFromBody
  })
}




module.exports = {
  getAll,
  getById,
  createPost,
  replacePost
}