const router = require('express').Router()
const Todos = require('../models/Todos')
const Testing = require('../models/Testing')
const Development = require('../models/Development')
const Done = require('../models/Done')

router.get('/todos', async (req, res) => {
    await Todos.find().then((todos) => res.json(todos))
})

router.get('/development', async (req, res) => {
    await Development.find().then((devs) => {
        res.json(devs)
    })
})

router.get('/testing', async (req, res) => {
    await Testing.find().then((tests) => {
        res.json(tests)
    })
})

router.get('/done', async (req, res) => {
    await Done.find().then((dones) => {
        res.json(dones)
    })
})

router.post('/todos', async (req, res) => {
    const newTodo = new Todos({
        title: req.body.title,
        description: req.body.description
    })

    try {
        await newTodo.save(() => {
            console.log('Todo Added')
        })
    } catch (e) {
        res.json("Something went wrong while adding todo.")
        console.log(e)
    }
})

router.post('/development', async (req, res) => {
    const newDev = new Development({
        title: req.body.title,
        description: req.body.description
    })

    try {
        await newDev.save(() => {
            console.log('Dev Added')
        })
    } catch (e) {
        res.json("Something went wrong while adding devs.")
        console.log(e)
    }
})

router.post('/testing', async (req, res) => {
    const newTest = new Testing({
        title: req.body.title,
        description: req.body.description
    })

    try {
        await newTest.save(() => {
            console.log('Test Added')
        })
    } catch (e) {
        res.json("Something went wrong while adding devs.")
        console.log(e)
    }
})

router.post('/done', async (req, res) => {
    const newDone = new Done({
        title: req.body.title,
        description: req.body.description
    })

    try {
        await newDone.save(() => {
            console.log('Done Added')
        })
    } catch (e) {
        res.json("Something went wrong while adding devs.")
        console.log(e)
    }
})

router.post('/proceedTodo', async (req, res) => {
    const proceedTodo = new Development({
        title: req.body.title,
        description: req.body.description
    })

    try {
        await proceedTodo.save(() => console.log('Todo Proceeded'))
    } catch (err) {
        res.json("Something went wrong while proceeding todo.")
        console.log(err)
    }
})

router.post('/proceedDev', async (req, res) => {
    const proceedDev = new Testing({
        title: req.body.title,
        description: req.body.description
    })

    try {
        await proceedDev.save(() => console.log('Dev Proceeded'))
    } catch (err) {
        res.json("Something went wrong while proceeding dev.")
        console.log(err)
    }
})

router.post('/proceedTest', async (req, res) => {
    const proceedTest = new Done({
        title: req.body.title,
        description: req.body.description
    })

    try {
        await proceedTest.save(() => console.log('Test Proceeded'))
    } catch (err) {
        res.json("Something went wrong while proceeding test.")
        console.log(err)
    }
})

router.post("/findTodos", async (req, res) => {
    await Todos.find({ title: req.body.value }).then((todos) => {
        res.json(todos)
        console.log(todos)
    })
})

router.delete('/deleteTodo/:id', async (req, res) => {
    await Todos.findByIdAndDelete({ _id: req.params.id })
        .then(() => console.log('Todo Deleted'))
        .catch(err => console.log(err))
})

router.delete('/deleteDev/:id', async (req, res) => {
    await Development.findByIdAndDelete({ _id: req.params.id })
        .then(() => console.log('Dev Deleted'))
        .catch(err => console.log(err))
})

router.delete('/deleteTest/:id', async (req, res) => {
    await Testing.findByIdAndDelete({ _id: req.params.id })
        .then(() => console.log('Test Deleted'))
        .catch(err => console.log(err))
})

router.delete('/deleteDone/:id', async (req, res) => {
    await Done.findByIdAndDelete({ _id: req.params.id })
        .then(() => console.log('Done Deleted'))
        .catch(err => console.log(err))
})

module.exports = router;