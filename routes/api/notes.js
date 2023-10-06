const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes.js');
const ensureLoggedIn = require('../../config/ensureLoggedIn.js');

router.get('/', ensureLoggedIn, notesCtrl.index);
router.post('/create', ensureLoggedIn, notesCtrl.create);

module.exports = router