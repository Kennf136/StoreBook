var express = require('express');
var router = express.Router({mergeParams: true});
const Schema = require("../db/schema.js");
const Groups = Schema.Groups;
const Store=Schema.Stores 
/* GET home page. */
router.get('/', function(req, res, next) {
    Groups.find()
    .then((x) => {
res.send(x)
    })
.catch((error)=>{console.log(error)})
});

router.get('/:id', async (req, res) => {
    try {
        const groupId = req.params.id
        const group = await Groups.findById(groupId)
        res.send(group)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const newGroup = req.body.group
        const savedGroup = await Groups.create(newGroup)
        res.send(savedGroup)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const groupId = req.params.id
        const updatedGroup = req.body.group
        const savedGroup = await Groups.findByIdAndUpdate(groupId, updatedGroup)
        res.send(savedGroup)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const groupId = req.params.id
        await Groups.findByIdAndRemove(groupId)
        res.send({
            msg: 'Successfully Deleted'
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
module.exports = router;