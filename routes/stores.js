var express = require('express');
var router = express.Router();
const Schema= require("../db/schema.js");
const Stores= Schema.Stores;

/* GET home page. */
router.get('/', function(req, res, next) {
    Stores.find()
    .then((x) => {
res.send(x)
    })
.catch((error)=>{console.log(error)})
});

router.get('/:id', async (req, res) => {
    try {
      const storesId = req.params.id
      const stores = await Stores.findById(storesId)
      res.send(stores)
    } catch (err) {
      console.log(err)
      res.send(err)
    }
  })

  router.post('/', async (req, res) => {
    try {
      const newStore = req.body.store
      const savedStore = await Stores.create(newStore)
      res.send(savedStore)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })

  router.put('/:id', async (req, res) => {
    try {
      const storeId = req.params.id
      const updatedStore = req.body.store
      const savedStore = await Stores.findByIdAndUpdate(storeId, updatedStore)
      res.send(savedStore)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })

  router.delete('/:id', async (req, res) => {
    try {
      const storeId = req.params.id
      await Stores.findByIdAndRemove(storeId)
      res.send({
        msg: 'Successfully Deleted'
      })
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })

module.exports = router;