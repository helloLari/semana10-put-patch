const controller = require("../controllers/moviesControllers"); // importei o arquivo de controller

const express = require("express");
const router = express.Router();

router.get("/", controller.home);
router.get("/todos", controller.getAll);
router.get("/titulo", controller.getByTitle);
router.get("/genero", controller.getByGenre);
router.get("/:id", controller.getById);
router.put("/:atualizar", controller.replacePost);
router.patch("/:titulo", controller.updatePost);

module.exports = router;