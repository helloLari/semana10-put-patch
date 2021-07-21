const tasksJson = require("../models/tarefas.json");

const getAll = (request, response) => {
    response.status(200).send(tasksJson);
};

const getById = (request, response) => {
    const requiredId = request.params.id;
    const filteredTask = tasksJson.find(task => task.id == requiredId);

    response.status(200).send(filteredTask);
};

const createTask = (request, response) => {
    const requiredDescription = request.body.descricao;
    const requiredName = request.body.autor;

    const newTask = {
        id: Math.random().toString(32).substr(2, 9),
        dataInclusao: new Date(),
        concluido: false,
        descricao: requiredDescription,
        nomeColaborador: requiredName
    };

    tasksJson.push(newTask);

    response.status(200).send(newTask);
};

const deleteTask = (request, response) => {
    const requiredId = request.params.id;
    const filteredTask = tasksJson.find(task => task.id == requiredId);

    const indice = tasksJson.indexOf(filteredTask);
    tasksJson.splice(indice, 1);

    response.status(200).json([{
        "mensagem": "Tarefa deletada com sucesso",
        tasksJson
    }]);

};


//substituir todo o meu item
const replacePost = (request, response) =>{
    const idRequirido = req.params.id;
    const postFromBody = req.body; //alteraçoes que veio do body
    
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequirido);

    let updatedTask = {
        "id": filteredTask.id,
        "dataInclusao": TaskFromBody.dataInclusao,
        "concluido": TaskFromBody.concluido,
        "descricao": TaskFromBody.descricao,
        "nomeColaborador": TaskFromBody.nomeColaborador
    }

    //fazendo a substituição do item
    const indice = tarefasJson.indexOf(tarefaFiltrada);

    tarefasJson.splice(indice, 1, updatedTask)

    response.status(200).send({
        "mensagem": "Post substituído com sucesso",
        updatedTask
    })

}

const atualizacao = (request, response) => {
    let idRequirido = req.params.id;
    let novoTitulo = req.body.titulo;

    let tituloFiltrado = tarefasJson.find(post => post.id == idRequirido);

    //titulo do post filtado seja atribuido com o novo titulo que veio da requisicao
    tituloFiltrado.titulo = novoTitulo;

    response.status(200).send({
        "mensagem": "Titulo atualizado",
        tituloFiltrado
    })
}


module.exports = {
    getAll,
    getById,
    createTask,
    deleteTask,
    replacePost,
    atualizacao
}