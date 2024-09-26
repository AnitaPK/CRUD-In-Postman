const express = require('express');


const router = express.Router()

const bookController = require('../controllers/bookController')

router.post('/createBook',bookController.createBook)

router.get('/getAllBooks', bookController.getAllBooks)

router.get('/getWriter', bookController.getWriter )

router.get('/getOneBook/:ID', bookController.getOneBook)

router.delete('/deleteBook/:id', bookController.deleteBook)

router.put('/updateBook/:id', bookController.updateBook)


module.exports = router