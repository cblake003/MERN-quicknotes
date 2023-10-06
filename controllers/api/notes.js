const Note = require('../../models/note');

module.exports = {
    index,
    create
}

async function index (req, res) {

    try {
        const notes = await Note.find({ user: req.user._id })
        console.log(notes, req.user.id)
        res.json(notes)

    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function create(req, res) {
    console.log(req.user._id)
    try {
        req.body.user = req.user._id;

        const note = await Note.create(req.body)

        res.json("")
        // Probably need to change this^

    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}