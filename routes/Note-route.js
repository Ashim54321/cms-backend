const { AddNotes,getNotes } = require('../controllers/Note-controller');

const router = require('express').Router();

router.post("/note/",AddNotes);
router.get("/note/",getNotes);


module.exports = router;