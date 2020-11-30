var express = require('express')
var router = express.Router()
const Metodo = require('../models/actividad')

// Get All Tasks
router.get('/list', function (req, res, next) {
  Metodo.findAll()
    .then(atributos => {
      res.json(atributos)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


router.get('/list/:id', function (req, res, next) {
  Metodo.findOne({
    where: {
      ida: req.params.id
    }
  })
    .then(atributo => {
      if (atributo) {
        res.json(atributo)
      } else {
        res.send('EL dato no existe')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.post('/add', function (req, res, next) {
  if (!req.body.nombre) {
    res.status(400)
    res.json({
      error: 'error de dato'
    })
  } else {
    Metodo.create(req.body)
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.json('error: ' + err)
      })
  }
})

router.delete('/deleted/:id', function (req, res, next) {
  Metodo.destroy({
    where: {
      ida: req.params.id
    }
  })
    .then(() => {
      res.json({ status: 'Dato Eliminado' })
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

// Update Task
router.put('/updated/:id', function (req, res, next) {
  if (!req.body.nombre) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
  } else {
    Metodo.update(//sss: req.body.sss
      {
        nombre: req.body.nombre,
        estado: req.body.estado,
      },
      { where: { ida: req.params.id } }
    )
      .then(() => {
        res.json({ status: 'Dato Actualizado' })
      })
      .error(err => handleError(err))
  }
})

module.exports = router
