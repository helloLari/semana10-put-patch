const express = require("express");
const router = express.Router();

//criar rotas
const controller = require('../controllers/postsControllers');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);

router.post('/create', controller.createPost);

//router.delete('/:id', controller.deletePost);

router.put('/:id', controller.replacePost);
// router.patch('/updateTitle/:id', controller.updateTitle);
// router.patch('/update/:id', controller.updateAnything) //rota que altera qualquer coisa


module.exports = router;