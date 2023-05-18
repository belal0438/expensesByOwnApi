
const path = require('path');
const express = require('express');
const ProductController = require('../controllers/controlProduct')
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.sendFile(path.join(__dirname, '../','views', 'index.html'))
  })

  router.post('/PostData', ProductController.PostProduct)

router.delete('/delete/:id', ProductController.DeleteProduct)

  router.get('/getData', ProductController.GetData)

  module.exports = router