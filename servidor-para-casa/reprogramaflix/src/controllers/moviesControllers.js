const movies = require("../models/filmes.json") // importando meu arquivo json dos filmes (que nesse projeto, são os meus dados)

// definir uma rota padrão
const home = (request, response) => {
    response.status(200).send(
        {
            "message": "Olá pessoa, seja bem vinda ao {reprograma}flix <3 <3 <3"
        }
    )
};

const getAll = (request, response) => {
    response.status(200).send(movies);
};

const getById = (request, response) => {
    // id solicitado na requição (request)
    const requestedId = request.params.id;

    // find((elemento) => elemento + a lógica)
    const filteredId = movies.find(movie => movie.id == requestedId);

    //enviar reposta
    response.status(200).send(filteredId);
}

const getByTitle = (request, response) => {
    // acessando o título solicitado na request
    const requestedTitle = request.query.title.toLowerCase()

    // filtrar os títulos do json
    const filteredTitle = movies.find(movie => movie.title.toLowerCase().includes(requestedTitle))

    // adicionar um condição para retornar o título
    if (requestedTitle === "" || filteredTitle === undefined) {
        response.status(404).send({
            "message": "Por favor, insira um título válido."
        })
    } else {
        response.status(200).send(filteredTitle)
    }
};

// pesquisa por gênero
const getByGenre = (request, response) => {
    // acessar qual o gênero requisitado
    const requestedGenre = request.query.genre;
    // criar lista para armazenar dados do loop
    let movieList = [];

    // comparar todos os itens da lista que são daquele gênero
    movies.forEach(movie => {
        // separar elementos
        let genreList = movie.genre.split(",")

        for (genre of genreList) {
            if (genre.includes(requestedGenre)) {
                console.log(movie)
                movieList.push(movie)
            }
        }

    })

    // retornar a resposta
    response.status(200).send(movieList)
}


const replacePost = (request, response) => {
    const requestedId = req.params.id;
    const postFromBody = req.body;

    const filteredId = movies.find( movie => movie.id == requestedId);

    const indice = movies.indexOf(filteredId);

    movies.splice(indice, 1, postFromBody)

    response.status(200).send({
        "mensagem": "Post substituído com sucesso",
        postFromBody
    })

}

const updatePost = (request, response) => {
    let requestedId = req.params.id;
    let newTitle = req.body.title;

    let filteredTitle = movies.find(movie => movie.id == requestedId);

    filteredTitle.titulo = newTitle;

    response.status(200).send({
        "mensagem": "Título atualizado",
        tituloFiltrado
    })

}

module.exports = {
    home,
    getAll,
    getById,
    getByTitle,
    getByGenre,
    replacePost,
    updatePost
}